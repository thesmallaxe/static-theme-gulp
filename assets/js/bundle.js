(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/* eslint-env browser */
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);var _jquery2 = _interopRequireDefault(_jquery);
var _accordion = require('modules/accordion.js');var _accordion2 = _interopRequireDefault(_accordion);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(function ($) {
  $(document).ready(function () {
    ready();

    // Styleguide event when an element is rendered
    $(window).bind("styleguide:onRendered", function (e) {
      ready();
    });
  });

  // Initalizing all modules
  function ready() {
    (0, _accordion2.default)();
  }
})(_jquery2.default);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"modules/accordion.js":2}],2:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



function () {
  var accordion = $('.accordion');

  if (accordion.length) {
    $('.toggle').click(function (e) {
      e.preventDefault();

      var $this = $(this);

      if ($this.next().hasClass('active') && $(this).hasClass('active')) {
        $('.toggle').removeClass('active');
        $this.next().removeClass('active');
        $this.next().slideUp(350);
      } else {
        // $('.toggle').removeClass('active');
        $this.parent().parent().find('.accordion__content').removeClass('active');
        // $this.parent().parent().find('.accordion__content').slideUp(350);
        $this.toggleClass('active');
        $this.next().toggleClass('active');
        $this.next().slideToggle(350);
      }
    });
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9tb2R1bGVzL2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBOztBQUVBLGdDO0FBQ0EsaUQ7O0FBRUEsQ0FBQyxVQUFVLENBQVYsRUFBYTtBQUNaLElBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBWTtBQUM1Qjs7QUFFQTtBQUNBLE1BQUUsTUFBRixFQUFVLElBQVYsQ0FBZSx1QkFBZixFQUF3QyxVQUFVLENBQVYsRUFBYTtBQUNuRDtBQUNELEtBRkQ7QUFHRCxHQVBEOztBQVNBO0FBQ0EsV0FBUyxLQUFULEdBQWlCO0FBQ2Y7QUFDRDtBQUNGLENBZEQsRUFjRyxnQkFkSDs7Ozs7Ozs7O0FDRmUsWUFBWTtBQUN6QixNQUFJLFlBQVksRUFBRSxZQUFGLENBQWhCOztBQUVBLE1BQUksVUFBVSxNQUFkLEVBQXNCO0FBQ3BCLE1BQUUsU0FBRixFQUFhLEtBQWIsQ0FBbUIsVUFBVSxDQUFWLEVBQWE7QUFDOUIsUUFBRSxjQUFGOztBQUVBLFVBQUksUUFBUSxFQUFFLElBQUYsQ0FBWjs7QUFFQSxVQUFJLE1BQU0sSUFBTixHQUFhLFFBQWIsQ0FBc0IsUUFBdEIsS0FBbUMsRUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFqQixDQUF2QyxFQUFtRTtBQUNqRSxVQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLFFBQXpCO0FBQ0EsY0FBTSxJQUFOLEdBQWEsV0FBYixDQUF5QixRQUF6QjtBQUNBLGNBQU0sSUFBTixHQUFhLE9BQWIsQ0FBcUIsR0FBckI7QUFDRCxPQUpELE1BSU87QUFDTDtBQUNBLGNBQU0sTUFBTixHQUFlLE1BQWYsR0FBd0IsSUFBeEIsQ0FBNkIscUJBQTdCLEVBQW9ELFdBQXBELENBQWdFLFFBQWhFO0FBQ0E7QUFDQSxjQUFNLFdBQU4sQ0FBa0IsUUFBbEI7QUFDQSxjQUFNLElBQU4sR0FBYSxXQUFiLENBQXlCLFFBQXpCO0FBQ0EsY0FBTSxJQUFOLEdBQWEsV0FBYixDQUF5QixHQUF6QjtBQUNEO0FBQ0YsS0FqQkQ7QUFrQkQ7QUFDRixDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBhY2NvcmRpb24gZnJvbSAnbW9kdWxlcy9hY2NvcmRpb24uanMnO1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHJlYWR5KCk7XG5cbiAgICAvLyBTdHlsZWd1aWRlIGV2ZW50IHdoZW4gYW4gZWxlbWVudCBpcyByZW5kZXJlZFxuICAgICQod2luZG93KS5iaW5kKFwic3R5bGVndWlkZTpvblJlbmRlcmVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZWFkeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBJbml0YWxpemluZyBhbGwgbW9kdWxlc1xuICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICBhY2NvcmRpb24oKTtcbiAgfVxufSkoanF1ZXJ5KTtcbiIsIi8qKlxuICogQWNjb3JkaW9uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICB2YXIgYWNjb3JkaW9uID0gJCgnLmFjY29yZGlvbicpO1xuXG4gIGlmIChhY2NvcmRpb24ubGVuZ3RoKSB7XG4gICAgJCgnLnRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgIGlmICgkdGhpcy5uZXh0KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoJy50b2dnbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLm5leHQoKS5zbGlkZVVwKDM1MCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAkKCcudG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuYWNjb3JkaW9uX19jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuYWNjb3JkaW9uX19jb250ZW50Jykuc2xpZGVVcCgzNTApO1xuICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLm5leHQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLm5leHQoKS5zbGlkZVRvZ2dsZSgzNTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
