(function (window) {
    var jasonGreeter = {};
    jasonGreeter.name = "Jason";
    var greeting = "Good bye ";
    jasonGreeter.sayGoodbye = function () {
      console.log(greeting + jasonGreeter.name);
    }
  
    window.jasonGreeter = jasonGreeter;
  
  })(window);
  
  