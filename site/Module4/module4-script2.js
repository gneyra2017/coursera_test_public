(function (window) {
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Good bye ";
    johnGreeter.sayGoodbye = function () {
      console.log(greeting + johnGreeter.name);
    }
  
    window.johnGreeter = johnGreeter;
  
  })(window);
  
  