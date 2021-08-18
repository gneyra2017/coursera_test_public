(function (window) {
    var larryGreeter = {};
    larryGreeter.name = "Larry";
    var greeting = "Hello ";
    larryGreeter.sayHello = function () {
      console.log(greeting + larryGreeter.name);
    }
  
    window.larryGreeter = larryGreeter;
  
  })(window);