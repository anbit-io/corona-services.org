/**
 * requestAnimationFrame polyfill from Paul Irish
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * MIT license
 */
var lastTime = 0,
  vendors = ["ms", "moz", "webkit", "o"]

for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"]
  window.cancelAnimationFrame =
    window[vendors[x] + "CancelAnimationFrame"] ||
    window[vendors[x] + "CancelRequestAnimationFrame"]
}

if (!window.requestAnimationFrame) {
  // Polyfill for IE8-9, Android <= 4.3
  window.requestAnimationFrame = function(fn) {
    var currTime = +new Date(),
      timeToCall = Math.max(0, 16 - (currTime - lastTime)),
      id = setTimeout(function() {
        fn(currTime + timeToCall)
      }, timeToCall)

    lastTime = currTime + timeToCall

    return id
  }
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = function(id) {
    clearTimeout(id)
  }
}
export default class RafAnimationQueue {
  constructor(context) {
    this.context = context || undefined;
    this.clear();
  }

  add(callback, context) {
    if (callback instanceof Function) {
      this.queue.push(callback.bind(context || this.context));
    }
    return this;
  }

  delay() {
    this.queue.push(null);
    return this
  }

  runQueue() {
    if (this.queueInProgress) {
      return;
    }
    this.queueInProgress = true;
    requestAnimationFrame(this.queueLoop.bind(this));
  }

  queueLoop() {
    const callback = this.queue.shift();
    callback instanceof Function && callback();
    if (!this.queue.length) {
      this.queueInProgress = false;
    } else {
      requestAnimationFrame(this.queueLoop.bind(this));
    }
  }

  clear() {
    this.queue = [];
  }
}
