(function (window) {
    var lauraGreeter = {};
    lauraGreeter.name = "Laura";
    var greeting = "Hello ";
    lauraGreeter.sayHello = function () {
      console.log(greeting + lauraGreeter.name);
    }
  
    window.lauraGreeter = lauraGreeter;
  
  })(window);