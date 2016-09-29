// page init
jQuery(function(){
	initBgVideo();
	initFixedHader();
});

function initFixedHader(){
	var win = jQuery(window);
	var fixedClass = 'fixed-position';

	jQuery('#header').each(function(){
		var holder = jQuery(this);

		function scrollHandler(){
			if (win.scrollTop() > 0) {
				holder.addClass(fixedClass);
			} else {
				holder.removeClass(fixedClass);
			}
		}

		win.on('load scroll', scrollHandler);
	});
}

// background video init
function initBgVideo() {
	// detect device type
	var isTouchDevice = /Windows Phone/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
	var win = jQuery(window);

	jQuery('.video-holder').each(function(){
		var holder = jQuery(this);
		var videoElem = holder.find('video');

		new WheelIndicator({
			callback: function(e){
				if (e.direction === 'down' && win.scrollTop() === 0) {
					SmoothScroll.scrollTo(jQuery(holder.data('scroll-target')).offset().top, 800);
				}
			},
			preventMouse: false
		});

		if (isTouchDevice) {
			videoElem.remove();
			holder.css({
				'background-image': 'url(' + videoElem.attr('data-poster') + ')'
			});
		}
	});
}

/*!
 * SmoothScroll module
 */
;(function($, exports) {
	// private variables
	var page,
		win = $(window),
		activeBlock, activeWheelHandler,
		wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll');

	// animation handlers
	function scrollTo(offset, options, callback) {
		// initialize variables
		var scrollBlock;
		if (document.body) {
			if (typeof options === 'number') {
				options = { duration: options };
			} else {
				options = options || {};
			}
			page = page || $('html, body');
			scrollBlock = options.container || page;
		} else {
			return;
		}

		// treat single number as scrollTop
		if (typeof offset === 'number') {
			offset = { top: offset };
		}

		// handle mousewheel/trackpad while animation is active
		if (activeBlock && activeWheelHandler) {
			activeBlock.off(wheelEvents, activeWheelHandler);
		}
		if (options.wheelBehavior && options.wheelBehavior !== 'none') {
			activeWheelHandler = function(e) {
				if (options.wheelBehavior === 'stop') {
					scrollBlock.off(wheelEvents, activeWheelHandler);
					scrollBlock.stop();
				} else if (options.wheelBehavior === 'ignore') {
					e.preventDefault();
				}
			};
			activeBlock = scrollBlock.on(wheelEvents, activeWheelHandler);
		}

		// start scrolling animation
		scrollBlock.stop().animate({
			scrollLeft: offset.left,
			scrollTop: offset.top
		}, options.duration, function() {
			if (activeWheelHandler) {
				scrollBlock.off(wheelEvents, activeWheelHandler);
			}
			if ($.isFunction(callback)) {
				callback();
			}
		});
	}

	// smooth scroll contstructor
	function SmoothScroll(options) {
		this.options = $.extend({
			anchorLinks: 'a[href^="#"]',	// selector or jQuery object
			container: null,		// specify container for scrolling (default - whole page)
			extraOffset: null,		// function or fixed number
			activeClasses: null,	// null, "link", "parent"
			easing: 'swing',		// easing of scrolling
			animMode: 'duration',	// or "speed" mode
			animDuration: 800,		// total duration for scroll (any distance)
			animSpeed: 1500,		// pixels per second
			anchorActiveClass: 'anchor-active',
			sectionActiveClass: 'section-active',
			wheelBehavior: 'stop', // "stop", "ignore" or "none"
			useNativeAnchorScrolling: false // do not handle click in devices with native smooth scrolling
		}, options);
		this.init();
	}
	SmoothScroll.prototype = {
		init: function() {
			this.initStructure();
			this.attachEvents();
		},
		initStructure: function() {
			var self = this;

			this.container = this.options.container ? $(this.options.container) : $('html,body');
			this.scrollContainer = this.options.container ? this.container : win;
			this.anchorLinks = jQuery(this.options.anchorLinks).filter(function() {
				return document.getElementById(this.getAttribute('href').slice(1));
			});
		},
		getAnchorTarget: function(link) {
			// get target block from link href
			var targetId = $(link).attr('href');
			return $(targetId.length > 1 ? targetId : 'html');
		},
		getTargetOffset: function(block) {
			// get target offset
			var blockOffset = block.offset().top;
			if (this.options.container) {
				blockOffset -= this.container.offset().top - this.container.prop('scrollTop');
			}

			// handle extra offset
			if (typeof this.options.extraOffset === 'number') {
				blockOffset -= this.options.extraOffset;
			} else if (typeof this.options.extraOffset === 'function') {
				blockOffset -= this.options.extraOffset(block);
			}
			return { top: blockOffset };
		},
		attachEvents: function() {
			var self = this;

			// handle active classes
			if (this.options.activeClasses && this.anchorLinks.length) {
				// cache structure
				this.anchorData = [];

				for (var i = 0; i < this.anchorLinks.length; i++) {
					var link = jQuery(this.anchorLinks[i]),
						targetBlock = self.getAnchorTarget(link),
						anchorDataItem;

					$.each(self.anchorData, function(index, item) {
						if (item.block[0] === targetBlock[0]) {
							anchorDataItem = item;
						}
					});

					if (anchorDataItem) {
						anchorDataItem.link = anchorDataItem.link.add(link);
					} else {
						self.anchorData.push({
							link: link,
							block: targetBlock
						});
					}
				};

				// add additional event handlers
				this.resizeHandler = function() {
					self.recalculateOffsets();
				};
				this.scrollHandler = function() {
					self.refreshActiveClass();
				};

				this.recalculateOffsets();
				this.scrollContainer.on('scroll', this.scrollHandler);
				win.on('resize', this.resizeHandler);
			}

			// handle click event
			this.clickHandler = function(e) {
				self.onClick(e);
			};
			if (!this.options.useNativeAnchorScrolling) {
				this.anchorLinks.on('click', this.clickHandler);
			}
		},
		recalculateOffsets: function() {
			var self = this;
			$.each(this.anchorData, function(index, data) {
				data.offset = self.getTargetOffset(data.block);
				data.height = data.block.outerHeight();
			});
			this.refreshActiveClass();
		},
		refreshActiveClass: function() {
			var self = this,
				foundFlag = false,
				containerHeight = this.container.prop('scrollHeight'),
				viewPortHeight = this.scrollContainer.height(),
				scrollTop = this.options.container ? this.container.prop('scrollTop') : win.scrollTop();

			// user function instead of default handler
			if (this.options.customScrollHandler) {
				this.options.customScrollHandler.call(this, scrollTop, this.anchorData);
				return;
			}

			// sort anchor data by offsets
			this.anchorData.sort(function(a, b) {
				return a.offset.top - b.offset.top;
			});
			function toggleActiveClass(anchor, block, state) {
				anchor.toggleClass(self.options.anchorActiveClass, state);
				block.toggleClass(self.options.sectionActiveClass, state);
			}

			// default active class handler
			$.each(this.anchorData, function(index) {
				var reverseIndex = self.anchorData.length - index - 1,
					data = self.anchorData[reverseIndex],
					anchorElement = (self.options.activeClasses === 'parent' ? data.link.parent() : data.link);

				if (scrollTop >= containerHeight - viewPortHeight) {
					// handle last section
					if (reverseIndex === self.anchorData.length - 1) {
						toggleActiveClass(anchorElement, data.block, true);
					} else {
						toggleActiveClass(anchorElement, data.block, false);
					}
				} else {
					// handle other sections
					if (!foundFlag && (scrollTop >= data.offset.top - 1 || reverseIndex === 0)) {
						foundFlag = true;
						toggleActiveClass(anchorElement, data.block, true);
					} else {
						toggleActiveClass(anchorElement, data.block, false);
					}
				}
			});
		},
		calculateScrollDuration: function(offset) {
			var distance;
			if (this.options.animMode === 'speed') {
				distance = Math.abs(this.scrollContainer.scrollTop() - offset.top);
				return (distance / this.options.animSpeed) * 1000;
			} else {
				return this.options.animDuration;
			}
		},
		onClick: function(e) {
			var targetBlock = this.getAnchorTarget(e.currentTarget),
				targetOffset = this.getTargetOffset(targetBlock);

			e.preventDefault();
			scrollTo(targetOffset, {
				container: this.container,
				wheelBehavior: this.options.wheelBehavior,
				duration: this.calculateScrollDuration(targetOffset)
			});
		},
		destroy: function() {
			if (this.options.activeClasses) {
				win.off('resize', this.resizeHandler);
				this.scrollContainer.off('scroll', this.scrollHandler);
			}
			this.anchorLinks.off('click', this.clickHandler);
		}
	};

	// public API
	$.extend(SmoothScroll, {
		scrollTo: function(blockOrOffset, durationOrOptions, callback) {
			scrollTo(blockOrOffset, durationOrOptions, callback);
		}
	});

	// export module
	exports.SmoothScroll = SmoothScroll;
}(jQuery, this));

/**
 * Generates event when user makes new movement (like a swipe on a touchscreen).
 * @version 1.1.4
 * @link https://github.com/Promo/wheel-indicator
 * @license MIT
 */

 /* global module, window, document */

 var WheelIndicator = (function(win, doc) {
 	var eventWheel = 'onwheel' in doc ? 'wheel' : 'mousewheel',

 	DEFAULTS = {
 		callback: function(){},
 		elem: doc,
 		preventMouse: true
 	};

 	function Module(options){
 		this._options = extend(DEFAULTS, options);
 		this._deltaArray = [ 0, 0, 0 ];
 		this._isAcceleration = false;
 		this._isStopped = true;
 		this._direction = '';
 		this._timer = '';
 		this._isWorking = true;

 		var self = this;
 		this._wheelHandler = function(event) {
 			if (self._isWorking) {
 				processDelta.call(self, event);

 				if (self._options.preventMouse) {
 					preventDefault(event);
 				}
 			}
 		};

 		addEvent(this._options.elem, eventWheel, this._wheelHandler);
 	}

 	Module.prototype = {
 		constructor: Module,

 		turnOn: function(){
 			this._isWorking = true;

 			return this;
 		},

 		turnOff: function(){
 			this._isWorking = false;

 			return this;
 		},

 		setOptions: function(options){
 			this._options = extend(this._options, options);

 			return this;
 		},

 		getOption: function(option){
 			var neededOption = this._options[option];

 			if (neededOption !== undefined) {
 				return neededOption;
 			}

 			throw new Error('Unknown option');
 		},

 		destroy: function(){
 			removeEvent(this._options.elem, eventWheel, this._wheelHandler);

 			return this;
 		}
 	};

 	function triggerEvent(event){
 		event.direction = this._direction;

 		this._options.callback.call(this, event);
 	}

 	var getDeltaY = function(event){

 		if(event.wheelDelta && !event.deltaY) {
 			getDeltaY = function(event) {
 				return event.wheelDelta * -1;
 			};
 		} else {
 			getDeltaY = function(event) {
 				return event.deltaY;
 			};
 		}

 		return getDeltaY(event);
 	};

 	function preventDefault(event){
 		event = event || win.event;

 		if (event.preventDefault) {
 			event.preventDefault();
 		} else {
 			event.returnValue = false;
 		}
 	}

 	function processDelta(event) {
 		var
 		self = this,
 		delta = getDeltaY(event);

 		if (delta === 0) return;

 		var direction = delta > 0 ? 'down' : 'up',
 		arrayLength = self._deltaArray.length,
 		changedDirection = false,
 		repeatDirection = 0,
 		sustainableDirection, i;

 		clearTimeout(self._timer);

 		self._timer = setTimeout(function() {
 			self._deltaArray = [ 0, 0, 0 ];
 			self._isStopped = true;
 			self._direction = direction;
 		}, 150);

        //check how many of last three deltas correspond to certain direction
        for(i = 0; i < arrayLength; i++) {
        	if(self._deltaArray[i] !== 0) {
        		self._deltaArray[i] > 0 ? ++repeatDirection : --repeatDirection;
        	}
        }

        //if all of last three deltas is greater than 0 or lesser than 0 then direction is switched
        if(Math.abs(repeatDirection) === arrayLength) {
            //determine type of sustainable direction
            //(three positive or negative deltas in a row)
            sustainableDirection = repeatDirection > 0 ? 'down' : 'up';

            if(sustainableDirection !== self._direction) {
                //direction is switched
                changedDirection = true;
                self._direction = direction;
            }
        }

        //if wheel`s moving and current event is not the first in array
        if(!self._isStopped){
        	if(changedDirection) {
        		self._isAcceleration = true;

        		triggerEvent.call(this, event);
        	} else {
                //check only if movement direction is sustainable
                if(Math.abs(repeatDirection) === arrayLength) {
                    //must take deltas to don`t get a bug
                    //[-116, -109, -103]
                    //[-109, -103, 1] - new impulse

                    analyzeArray.call(this, event);
                }
            }
        }

        //if wheel is stopped and current delta value is the first in array
        if(self._isStopped) {
        	self._isStopped = false;
        	self._isAcceleration = true;
        	self._direction = direction;

        	triggerEvent.call(this, event);
        }

        self._deltaArray.shift();
        self._deltaArray.push(delta);
    }

    function analyzeArray(event) {
    	var
    	deltaArray0Abs  = Math.abs(this._deltaArray[0]),
    	deltaArray1Abs  = Math.abs(this._deltaArray[1]),
    	deltaArray2Abs  = Math.abs(this._deltaArray[2]),
    	deltaAbs        = Math.abs(getDeltaY(event));

    	if((deltaAbs       > deltaArray2Abs) &&
    		(deltaArray2Abs > deltaArray1Abs) &&
    		(deltaArray1Abs > deltaArray0Abs)) {

    		if(!this._isAcceleration) {
    			triggerEvent.call(this, event);
    			this._isAcceleration = true;
    		}
    	}

    	if((deltaAbs < deltaArray2Abs) &&
    		(deltaArray2Abs <= deltaArray1Abs)) {
    		this._isAcceleration = false;
    }
}

function addEvent(elem, type, handler){
	if(elem.addEventListener) {
		elem.addEventListener(type, handler, false);
	} else if (elem.attachEvent) {
		elem.attachEvent('on' + type, handler);
	}
}

function removeEvent(elem, type, handler) {
	if (elem.removeEventListener) {
		elem.removeEventListener(type, handler, false);
	} else if (elem.detachEvent) {
		elem.detachEvent('on'+ type, handler);
	}
}

function extend(defaults, options) {
	var extended = {},
	prop;

	for (prop in defaults) {
		if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
			extended[prop] = defaults[prop];
		}
	}

	for (prop in options) {
		if (Object.prototype.hasOwnProperty.call(options, prop)) {
			extended[prop] = options[prop];
		}
	}

	return extended;
}

return Module;
}(window, document));

if (typeof exports === 'object') {
	module.exports = WheelIndicator;
}