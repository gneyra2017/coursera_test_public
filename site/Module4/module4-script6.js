(function (window) {
    var frankGreeter = {};
    frankGreeter.name = "Frank";
    var greeting = "Hello ";
    frankGreeter.sayHello = function () {
      console.log(greeting + frankGreeter.name);
    }
  
    window.frankGreeter = frankGreeter;
  
  })(window);