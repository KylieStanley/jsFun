const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    }

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'instance of SpaceProbe';
    return result;

    // Annotation:
    // a new instance of the SpaceProbe class called ship is created,
    // so ship.fly() is calling the fly method on the ship object.
    // 'This' on the fly method refers to the ship object.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // The function fn is defined in the global scope, so `this` points to the global window object.
  },

  exerciseC() {
    const car = {
      make: "Tesla",
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    el.addEventListener("click", car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'button element';
    return result;

    // Annotation: 
    // `This` gets defined on function invokation. The function is being invoked upon the click event
    // of a button. `This` will refer to the button that was clicked instead of the car object. If we
    // called car.getInfo() on its own, `this` would refer to the car object. 
  },

  exerciseD() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function(){
        const innerFunction = function() {
        console.log(this.breed);
      };
    
      return innerFunction();
      }
    };

    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // This is an ES5 function, 'this' is not assigned until function is invoked. The inner
    // function cannot access the `this` that the getBreed method refers back to. By default,
    // `this` becomes the global window object.
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    }


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // With ES6 syntax, the value of this is assigned on function declaration. `This` refers to the
    // global window object because the function itself has been defined globally.
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // identifyHero is a method on the Hero class. `This` refers to the object on which
    // it is called. When we create the new storm object from Hero class, this will refer to 
    // a new instance of Hero because the new object inherits that method.
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
    }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`)
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // When we call monopoly.restart(), we are calling a method on the monopoly object.
    // Within that method is another function. The `this` within that inner function cannot
    // access the `this` that refers to the object, so it defaults to the global window.
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { return this };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // obj.method is running a function that reassigns the value of the arrowFunction property
    // to a function that returns `this`. When we call obj.arrowFunction(), we are just calling
    // a method on the object, so `this` is the object.
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets)

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // Each iteration of poets.mapn returns the entire poets array. We are mapping through the poets
    // array and returning `this` in the callback. The poets array is being passed into the callback
    // function by way of the `thisArg` parameter. In the callback of an array prototype, `this` will 
    // refer to the value of whatever is used as the `thisArg` parameter. If nothing is specified, this
    // will refer to the window.
    
  },

  exerciseJ() {
    $('#btn').on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'button element';
    return result;

    // Annotation: 
    // The function that console.logs `this` is being invoked by the click event 
    // on the button object. The button is wrapped in a jQuery wrapper, 
    // which makes it a jQuery object.
  }

};

module.exports = context;