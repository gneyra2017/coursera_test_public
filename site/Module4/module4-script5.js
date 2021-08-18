(function (window) {
  var paulGreeter = {};
  paulGreeter.name = "Paul";
  var greeting = "Hello ";
  paulGreeter.sayHello = function () {
    console.log(greeting + paulGreeter.name);
  }

  window.paulGreeter = paulGreeter;

})(window);