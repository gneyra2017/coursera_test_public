(function (window) {
    var jenGreeter = {};
    jenGreeter.name = "Jen";
    var greeting = "Good bye ";
    jenGreeter.sayGoodbye = function () {
      console.log(greeting + jenGreeter.name);
    }
  
    window.jenGreeter = jenGreeter;
  
  })(window);
  
  