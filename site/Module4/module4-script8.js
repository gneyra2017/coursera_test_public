(function (window) {
    var paulaGreeter = {};
    paulaGreeter.name = "Paula";
    var greeting = "Hello ";
    paulaGreeter.sayHello = function () {
      console.log(greeting + paulaGreeter.name);
    }
  
    window.paulaGreeter = paulaGreeter;
  
  })(window);