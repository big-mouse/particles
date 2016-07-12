(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BigMouseParticles"] = factory();
	else
		root["BigMouseParticles"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * Particles plugin implementation\n * @param options {radius}\n * @returns Function(Object, {num, size, radius, color, speed, distortion})\n */\n// Note: not using \"export default\" es6 to bypass .default when using library globally from window scope.\nmodule.exports = exports = function exports() {\n    var options = arguments.length <= 0 || arguments[0] === undefined ? { radius: 30 } : arguments[0];\n\n\n    var iteration = 1;\n    var rad = options.radius;\n\n    return {\n        painter: function painter(self, options) {\n\n            var particles = getParticles(options, self.mouseCoords);\n\n            return function (self) {\n\n                self.canvas.ctx.globalCompositeOperation = 'source-over';\n                self.canvas.ctx.fillStyle = 'transparent';\n                self.canvas.ctx.clearRect(0, 0, self.canvas.el.width, self.canvas.el.height);\n                self.canvas.ctx.fillRect(0, 0, self.canvas.el.width, self.canvas.el.height);\n\n                var crad = rad * Math.sin(iteration / 30);\n\n                self.canvas.ctx.globalCompositeOperation = 'lighter';\n\n                particles.forEach(function (particle) {\n\n                    self.canvas.ctx.strokeStyle = particle.color;\n                    self.canvas.ctx.lineWidth = particle.size;\n                    self.canvas.ctx.beginPath();\n\n                    if (particle.radius) crad = particle.radius * Math.sin(iteration / 30);\n\n                    var x = self.mouseCoords.x + (crad + particle.distortion * Math.sin(iteration / particle.tmod)) * Math.cos(particle.angle * 180 / Math.PI);\n                    var y = self.mouseCoords.y + (crad + particle.distortion * Math.sin(iteration / particle.tmod)) * Math.sin(particle.angle * 180 / Math.PI);\n\n                    self.canvas.ctx.moveTo(particle.lastPos.x, particle.lastPos.y);\n                    self.canvas.ctx.lineTo(x, y);\n\n                    particle.lastPos = { x: x, y: y };\n                    particle.angle = (particle.angle + particle.speed) % 359;\n\n                    self.canvas.ctx.stroke();\n                });\n\n                iteration++;\n            };\n        }\n    };\n};\n\n/**\n * Create particles accordingly to input options\n * @param options\n * @param mouse The mouse coordinates\n * @returns {Array}\n */\nfunction getParticles(options, mouse) {\n\n    var rand = function rand(min, max) {\n        return Math.random() * (max - min) + min;\n    };\n\n    var particles = [];\n\n    while (~~options.num--) {\n\n        var angle = rand(0, 359);\n\n        particles = [].concat(_toConsumableArray(particles), [{\n            color: options.color ? options.color : 'hsla(' + (rand(0, 1) > .5 ? ~~rand(0, 20) : ~~rand(180, 200)) + ',100%,60%,1)',\n            distortion: rand(0, options.distortion ? options.distortion : 10),\n            tmod: rand(5, 15),\n            size: rand(1, options.size),\n            speed: rand(1, options.speed ? options.speed : 3) / 10000,\n            angle: angle,\n            radius: options.radius,\n            lastPos: {\n                x: mouse.x,\n                y: mouse.y\n            }\n        }]);\n    }\n\n    return particles;\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGFydGljbGVzLmpzPzU0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQYXJ0aWNsZXMgcGx1Z2luIGltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0gb3B0aW9ucyB7cmFkaXVzfVxuICogQHJldHVybnMgRnVuY3Rpb24oT2JqZWN0LCB7bnVtLCBzaXplLCByYWRpdXMsIGNvbG9yLCBzcGVlZCwgZGlzdG9ydGlvbn0pXG4gKi9cbi8vIE5vdGU6IG5vdCB1c2luZyBcImV4cG9ydCBkZWZhdWx0XCIgZXM2IHRvIGJ5cGFzcyAuZGVmYXVsdCB3aGVuIHVzaW5nIGxpYnJhcnkgZ2xvYmFsbHkgZnJvbSB3aW5kb3cgc2NvcGUuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zPSB7cmFkaXVzOjMwfSl7XG5cbiAgICBsZXQgaXRlcmF0aW9uID0gMTtcbiAgICBsZXQgcmFkID0gb3B0aW9ucy5yYWRpdXM7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHBhaW50ZXIoc2VsZiwgb3B0aW9ucyl7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlcyA9IGdldFBhcnRpY2xlcyhvcHRpb25zLCBzZWxmLm1vdXNlQ29vcmRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYgPT4ge1xuXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuY3R4LmZpbGxTdHlsZSA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy5lbC53aWR0aCwgc2VsZi5jYW52YXMuZWwuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwgMCwgc2VsZi5jYW52YXMuZWwud2lkdGgsIHNlbGYuY2FudmFzLmVsLmhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY3JhZCA9IHJhZCAqIE1hdGguc2luKGl0ZXJhdGlvbiAvIDMwKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG5cbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gcGFydGljbGUuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwYXJ0aWNsZS5zaXplO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocGFydGljbGUucmFkaXVzKSBjcmFkID0gIHBhcnRpY2xlLnJhZGl1cyAqIE1hdGguc2luKGl0ZXJhdGlvbiAvIDMwKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gc2VsZi5tb3VzZUNvb3Jkcy54ICsgKGNyYWQgKyBwYXJ0aWNsZS5kaXN0b3J0aW9uICogTWF0aC5zaW4oaXRlcmF0aW9uIC8gcGFydGljbGUudG1vZCkpICogTWF0aC5jb3MocGFydGljbGUuYW5nbGUgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHNlbGYubW91c2VDb29yZHMueSArIChjcmFkICsgcGFydGljbGUuZGlzdG9ydGlvbiAqIE1hdGguc2luKGl0ZXJhdGlvbiAvIHBhcnRpY2xlLnRtb2QpKSAqIE1hdGguc2luKHBhcnRpY2xlLmFuZ2xlICogMTgwIC8gTWF0aC5QSSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuY3R4Lm1vdmVUbyhwYXJ0aWNsZS5sYXN0UG9zLngsIHBhcnRpY2xlLmxhc3RQb3MueSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLmN0eC5saW5lVG8oeCwgeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUubGFzdFBvcyA9IHsgeCwgeSB9O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS5hbmdsZSA9IChwYXJ0aWNsZS5hbmdsZSArIHBhcnRpY2xlLnNwZWVkKSAlIDM1OTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpdGVyYXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vKipcbiAqIENyZWF0ZSBwYXJ0aWNsZXMgYWNjb3JkaW5nbHkgdG8gaW5wdXQgb3B0aW9uc1xuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBtb3VzZSBUaGUgbW91c2UgY29vcmRpbmF0ZXNcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZ2V0UGFydGljbGVzKG9wdGlvbnMsIG1vdXNlKXtcblxuICAgIGNvbnN0IHJhbmQgPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuICAgIGxldCBwYXJ0aWNsZXMgPSBbXTtcblxuICAgIHdoaWxlKH5+b3B0aW9ucy5udW0tLSkge1xuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gcmFuZCgwLCAzNTkpO1xuXG4gICAgICAgIHBhcnRpY2xlcyA9IFsuLi5wYXJ0aWNsZXMsIHtcbiAgICAgICAgICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yID8gb3B0aW9ucy5jb2xvciA6IGBoc2xhKCR7KHJhbmQoMCwxKSA+IC41KSA/IH5+cmFuZCgwLCAyMCkgOiB+fnJhbmQoMTgwLCAyMDApfSwxMDAlLDYwJSwxKWAsXG4gICAgICAgICAgICBkaXN0b3J0aW9uOiByYW5kKDAsb3B0aW9ucy5kaXN0b3J0aW9uID8gb3B0aW9ucy5kaXN0b3J0aW9uIDogMTApLFxuICAgICAgICAgICAgdG1vZDogcmFuZCg1LCAxNSksXG4gICAgICAgICAgICBzaXplOiByYW5kKDEsIG9wdGlvbnMuc2l6ZSksXG4gICAgICAgICAgICBzcGVlZDogcmFuZCgxLCBvcHRpb25zLnNwZWVkID8gb3B0aW9ucy5zcGVlZCA6IDMpIC8gMTAwMDAsXG4gICAgICAgICAgICBhbmdsZTogYW5nbGUsXG4gICAgICAgICAgICByYWRpdXM6IG9wdGlvbnMucmFkaXVzLFxuICAgICAgICAgICAgbGFzdFBvczoge1xuICAgICAgICAgICAgICAgIHg6IG1vdXNlLngsXG4gICAgICAgICAgICAgICAgeTogbW91c2UueVxuICAgICAgICAgICAgfVxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydGljbGVzXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3BhcnRpY2xlcy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBMENBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ])
});
;