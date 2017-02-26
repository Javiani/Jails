;(function( exports ){

	var publisher 	  = pubsub(),
		attribute 	  = 'data-component',
		selector  	  = '['+attribute+']';

	function jails( name, mixin ){
		jails.components[ name ] = mixin;
	}

	jails.events 	 = events();
	jails.components = {};
	jails.publish 	 = publisher.publish;
	jails.subscribe  = publisher.subscribe;

	jails.start = function( ctx ){
		ctx = ctx || document.documentElement;
		each(ctx.querySelectorAll(selector), scan, true);
	};

	jails.destroy = function( ctx, query ){

		ctx = ctx || document.documentElement;
		query = query || selector;

		each(ctx.querySelectorAll( query ), function( node ){
			if(node.__events){
				node.__events = null;
				node.j = null;
			}
			jails.events.trigger(node, ':destroy');
		}, true);
	};

	jails.component = function( name, node ){

		var data = {};
		var base;
		var events = jails.events;

		return base = {

			elm 		:node,
			subscribe 	:publisher.subscribe,
			publish   	:publisher.publish,

			expose 		:function( n, f ){
				node.j[name].methods = n;
			},

			__initialize:function(){},

			on :function( ev, callback ){
				events.on( node, ev, callback );
			},

			off :function( ev, callback ){
				events.off( node, ev, callback );
			},

			init :function( callback ){
				base.__initialize = callback && callback.call?
					callback :base.__initialize;
			},

			props :function( key ){
				data.props = data.props || properties( node );
				return key? data.props[key] : data.props;
			},

			annotations :function( key ){
				data.annotations = data.annotations || annotations( node )[ name ] || {};
				return key? data.annotations[key] : data.annotations;
			},

			get :function( n, query ){

				return function(){

					var args   = Array.from( arguments ),
						method = args.shift(),
						selector = '[data-component*='+n+']';

					query = query? selector + query : selector;

					each( node.querySelectorAll( query ), function( el ){
						if( el.j && el.j[n] && method in el.j[n].methods )
							el.j[n].methods[method].apply(null, args);
					});

					if( node.matches(query) ){
						if( node.j && node.j[n] && method in node.j[n].methods )
							node.j[n].methods[method].apply(null, args);
					}

				}
			},

			emit :function( n, params ){
				var args = Array.from( arguments );
				events.trigger(node, args.shift(), { args:args });
			}
		};

	};

	function annotations( node ){

		var ann = {}, comment;

		comment = node.previousSibling;
		comment = comment && comment.nodeType == 8? comment :comment? comment.previousSibling : null;

		if( comment && comment.nodeType == 8 ){
			comment.data.replace(/@([a-zA-z0-9-\/]*)(?:\((.*)\))?/g, function( text, component, param ){
				ann[component] = new Function('return '+ param)();
			});
		}

		return ann;
	}

	function scan( node ){
		var components = node.getAttribute(attribute).split(/\s/);
		each( components, mount(node) );
	}

	function mount( node ){
		return function( name ){
			var base;
			node.j = node.j || {};
			if( name in jails.components && !node.j[name] ){
				node.j[name] = { methods :{} };
				base = jails.component( name, node );
				jails.components[name]( base, node, base.props );
				base.__initialize( base );
			}
		};
	}

	function properties( node ){
		var props = { data:{} };
		each( node.attributes, propset(props) );
		return props;
	}

	function propset( acc ){
		return function( item ){
			var value, name = item.name.split(/data\-/);
			try{ value = item.value in window? item.value :(new Function('return '+ item.value))(); }
			catch(err){ value = item.value; }

			if( name[1] ) acc.data[name.pop().replace(/-([a-z])/g, upper)] = value;
			else acc[item.name] = value;
			return acc;
		};
	}

	function upper(m, string){
		return string.toUpperCase();
	}

	function each( list, callback, reverse ){
		list = reverse? Array.from( list ).reverse() : list;
		for( var i = 0, len = list.length; i < len; i ++ )
			callback( list[i], i, list );
	}

	function events(){

		function Ev(type, params) {
			var e = document.createEvent(type);
			params = params || {};
			e.initEvent(type, params.bubbles || false, params.cancelable || false, params.detail || null);
			return e;
		}

		function handler(node, ev){
			return function(e){
				var scope = this;
				var detail = e.detail || {};
				node.__events[ev].forEach(function(o){ o.handler.apply(scope, [e].concat(detail.args)); });
			};
		}

		function removeListener( node, ev ){
			node.removeEventListener(ev, node.__events[ev].listener, false);
			delete node.__events[ev];
		}

		function delegate( node, selector, callback ){
			return function(e){
				var element = this, parent = e.target, detail = e.detail || {};
				while( parent && parent !== node ){
					if( parent.matches(selector) )
						callback.apply(element, [e].concat(detail.args));
					parent = parent.parentNode;
				}
			};
		}

		return {

			on :function( node, ev, callback ){

				node.__events 	  = node.__events || {};
				node.__events[ev] = (node.__events[ev] || []);

				if(!node.__events[ev].length){
					var fn = handler(node, ev);
					node.addEventListener(ev, fn, (ev == 'focus' || ev == 'blur'));
					node.__events[ev].listener = fn;
				}

				if( callback.call ){
					node.__events[ev].push({ handler :callback, callback :callback });
				}else{
					Object.keys(callback).forEach(function(key){
						node.__events[ev].push({ handler :delegate(node, key, callback[key]), callback :callback[key] });
					});
				}
			},

			off :function( node, ev, fn ){

				if( fn && node.__events[ev] && node.__events[ev].length ){
					var old = node.__events[ev];
					node.__events[ev] = node.__events[ev].filter(function(o){ return o.callback != fn; });
					node.__events.listener = old.listener;
					if( !node.__events[ev].length )
						removeListener( node, ev );
				}else{
					removeListener( node, ev );
				}
			},

			trigger :function( node, name, args ){
				node.dispatchEvent(
					/\:/.test(name)
					?new CustomEvent( name, { bubbles :true, detail :args } )
					:new Ev( name, { bubbles :true, detail :args } )
				);
			}
		};
	}

	function pubsub( topics, async ){

		topics = {};
		async  = {};

		return {
			publish :function( name, params ){
				if( !(name in topics) )
					async[name] = params;
				else
					each( topics[name], function( topic ){ topic( params ); });
			},
			subscribe :function( name, method ){
				topics[name] = topics[name] || [];
				topics[name].push( method );
				if( name in async )
					each( topics[name], function( topic ){ topic( async[name] ); });
				return function(){
					topics[name] = topics[name].filter(function( topic ){
						return topic == method;
					});
				};
			}
		};
	}

	// UMD export
	if ( typeof define === 'function' && define.amd ) {
		define(function () { return jails; });
	} else if ( typeof module !== 'undefined' && module.exports ){
		module.exports = jails;
	} else {
		exports.jails = jails;
	}
})( window );
