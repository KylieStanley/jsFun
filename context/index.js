fconst context = {
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
    const result = instance of SpaceProbe;
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
    const result = 'global vwindow object' ;
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
    // The getInfo method is being called on the 'car' object, so `this` within the function refers
    // to that car object.  
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
    // `This` is being called on a new function within the getBreed method. This inner 
    // function cannot access the `this` on the dog object because it is not a property of 
    // the dog object itself. innerFunction will log the Window object for `this`, which 
    // will then be returned by getBreed()
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
    // global window object because the function itself has been defined globally
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
    // identifyHero is a method on the Hero object. `This` refers to the object on which
    // it is called. When we create the new storm object from Hero, this will refer to storm.
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
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment
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
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment
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
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
  },

  exerciseJ() {
    $('#btn').on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = '$(#btn) object';
    return result;

    // Annotation: 
    // The function that console.logs `this` is being invoked by the click event 
    // on the button object. The button is wrapped in a jQuery wrapper, 
    // which makes it a jQuery object.
  }

};

module.exports = context;