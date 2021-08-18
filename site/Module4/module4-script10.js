(function (window) {
    var jimGreeter = {};
    jimGreeter.name = "Jim";
    var greeting = "Good bye ";
    jimGreeter.sayGoodbye = function () {
      console.log(greeting + jimGreeter.name);
    }
  
    window.jimGreeter = jimGreeter;
  
  })(window);
  
  