const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';  //creates global variable because person was not declared
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
    {'A': 'Ben'},
    {'B': 'CardiB'},
    {'C': 'CardiB'},
    {'D': 'Paul'}
    ];
    return result;

    // Annotation:
    // We declare three global variables, personA, personB, personC. We then declare our changePerson
    // function on line 7. We skip to line 28 and invoke changePerson. We go back to line 8 inside changePerson
    // where we check if personA equals Paul, and if true, reassign person to CardiB. Since a person variable does
    // not exist, we set a global person variable to CardiB and then invoke beautifyPerson. On line 14 inside beautifyPerson
    // we log the value of personB which evaluates to Ben. We then check if personB(Ben) includes 'B'. This is true, so we
    // reassign personB to the value of our global person variable. The value of personB is now CardiB. We go to line18 and 
    // reassign personC to the value of personB. Since personB is now CardiB, personC becomes CardiB in the global scope. On
    // line19 we log personC which evaluates to CardiB. We continue changePerson on line23 where we reassign personC to the 
    // value of personA. We then log the value of personB on line25 which is CardiB, since we had reassigned the globally scoped
    // variable. This ends the invokation of changePerson so we move to line 30 and log the value of personC in the global scope.
    // Since the bueatifyPerson functiuon reassigned the global personC variable to the value of personA, personC is 'Paul'.
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
      {'A': '75'},
      {'B': '64'},
      {'C': '64'},
      {'D': '30'}
    ];
    return result;

    // Annotation:
    // We declare a global variable number that is assigned to 30 on line 55. We then declare the numberFunction function
    // on line 57. We skip down to line 77 and invoke the numberFunction function. We go back to line 58 and declare a function
    // scoped variabe called number and assign it equal to 75. On line 60 we check if the number variable is equal to 75. If true, 
    // this declares a block scoped number variable and assigns it equal to 28.  We then log number, which will be 75 because we are
    // now only in the scope of numberFunction. We declare the newNumber function on line 66 and skip to line 72 to invoke the newNumber
    // function. On line 67 number is reassigned to equal 64. Number has not been declared in newNumber, so we look up the scope chain 
    // into the parent function, numberFunction. The variable delcared in numberFunction on line 58 gets reassigned to 64. We log number
    // inside newNumber which is 64. That is the end of newNumber so we move back to line 74 and log number. Since we are still inside 
    // number function, and the function scoped number variable was reassigned by newNumber, number is 64 in the scope of numberFunction.
    // We exit numberFunction and move to line 79 where we log number again. This is in the global scope so number will still be 30, the
    // value of the global variable declared on line 55;
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      {'A': 'Yo'},
      {'B': 'Hey'},
      {'C': 'Hey'},
      {'D': 'Hello'}
    ];
    return result;

    // Annotation:
    // We first declare a global variable, greeting, that is assigned to the string 'Hello' on line 104. We then declare the function
    // greetingFunction on line 106. We skip to line 126 and invoke greetingFunction. We then go back to line 107 and declare a variable
    // greeting that is assigned to the string 'Yo' inside the greetingFunction scope. On line 109 we evaluate if the value of the greeting 
    // variable is equal to 'Yo' and declare a new block scoped variable greeting that is assigned to 'Howdy'. We log greeting on line 113
    // which still equals the function scoped variable from line 107,'Yo'. We declare a newPhrase function on line 115, then skip to line 121
    // and invoke newPhrase. We reassign greeting to 'Hey' on line 116. Greeting was not declared in the scope of newPhrase so we look up one
    // level into greetingFunction. Greeting was declared in the greetingFunction scope on line 107, so we reassign that to the string 'Hey'.
    // We log greeting inside newPhrase, which is 'Hey', and exit the function. We move back to line 123 and log greeting again. Since newPhrase
    // reassigned the greeting variable in the function scope of GreetingFunction, greeting is 'Hey'. We exit greetingFunction and move to line
    // 128 to log greeting again which is 'Hello' since we are now back in the global scope and can only see the globally scoped variable.

  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      }

      newGreeting();

      // Log C: greeting
    }

    greetingGenerator();

    // Log D: greeting

    const result = [
      {'A': 'hi'},
      {'B': 'welcome'},
      {'C': 'welcome'},
      {'D': 'howdy'}
    ];
    return result;

    // Annotation:
    // We declare a global variable greeting assigned to 'howdy' on line 153. We then declare a const greetingGenerator which is a function.
    // on line 155. We skip to line 175 and invoke greetingGenerator. We move back to line 156 inside the greetingGenerator function and declare
    // a function scoped greeting variable assigned to 'hi'. We run a conditional to check if greeting equals 'hi', and if so, create a new block
    // scoped greeting variable assigned to 'hello'. We then log greeting on line 162 which is 'hi' since that was declared inside our function. We 
    // declare another const variable newGreeting assigned to a function on line 164, then skip to line 170 and invoke it. Inside newGreeting, the
    // greeting variable is reassigned to 'welcome'. No greeting variable was delcared within newGreeting, so we look outside to the parent function
    // scope and reassign the greeting variable on line 156 to 'welcome'. We log greeting on line 167, which is now 'welcome'. On line 172 we log greeting
    // again. We are within the greetingGenerator function, and just reassigned that variable, so its value is 'welcome'. We move back out to the global
    // scope and log greeting. The globally defined variable has not changed so greeting is 'howdy' in the global scope.
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = [
      {'C': 'Brittany'},
      {'A': 'Nathaniel'},
      {'B': 'Nathaniel'},
      {'D': 'Brittany'}
    ];
    return result;

    // Annotation:
    // We declare a global variable name on line 200 assigned to 'Brittany'. We move to line 202 and declare a function called sayName. We then skip
    // to line 218 and log name which is still 'Brittany' as defined in the global scope above. We invoke sayName on line 220. We go back to line 203
    // and declare a name variable assigned to 'Pam'. On line 205 we check if the name variable equals 'Pam' and if so, reassign the name variable to
    // 'Nathanial'. This reassigns the name variable that was declared on line 203. Inside the current if statement block, we run another conditional 
    // to check of name.length is greater than 0. If true, a new name variable is declared and assigned to 'Brittany'. We then log name on line 212. We
    // are inside the block scope where name was reassigned to 'Nathanial', so that is the current value of name. We move to line 215, outside of the block
    // scope and back to the scope of sayName and log name. Since the function scoped name variable was reassigned to 'Nathanial', that is the value of 
    // name here as well. We move to line 222 and log name again. We nare in the global scope again so name will equal 'Brittany'.
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
      {'A': 'Spot'},
      {'B': 'Spot'},
      {'C': 'Biscuit'},
      {'D': 'Biscuit'},
      {'D': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // We start by declaring a gloal dog variable assigned to 'Spot' on line 244. On line 246 we declare a function petDog. We skip down to line 267
    // and invoke petDog. On line 247 we log dog. Dog has not been declared in the function scope so we look outside to the global scope. Dog will log
    // 'Spot'. We then run a conditional to check if dog equals 'Spot' and declare a new dog variable assigned to 'Fluffy' if true. We declare a function
    // called rollOver on line 253. We skip to line 262 and invoke rollOver. On line 254 we log dog. Dog has not been declared in the rollOver function, 
    // so we move up a level and check the petDog scope. Dog is not declared in the petDog scope so dog will by 'Spot' as defined in the global scope. On 
    // line 256 the global dog variable is reassigned to 'Biscuit'. When dog is logged again on line 258, dog qill equal 'Biscuit'. We move back to line
    // 264 and log dog again. We are in the petDog function scope, which has no dog variable declaration. Dog will be 'Biscuit again as defined globally.
    // On line 269 we log in the global scope, which equals 'Biscuit'.
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit()

    // Log D: fruit

    const result =  [
      {'A': 'undefined'},
      {'B': 'mango'},
      {'C': 'mango'},
      {'D': 'apple'}
    ];
    return result;

    // Annotation:
    // We declare a global variable fruit assigned to 'apple'. We then declare a function eatfruit on line 294. On line 310 we invoke eatFruit.
    //On line 296 we check if the fruit variable is not kiwi. If fruit is not 'kiwi', we declare a new variable fruit that is 'mango'. We then
    // check if fruit exists, and log fruit. Fruit will be undefined. This is because we declare the const fruit and assign to strawberry within 
    // the block scope, but that does not happen until after fruit is logged. This will hoist the fruit declaration, but not the actual value, to 
    // the top of the block scope. When fruit is logged, we know fruit exists, but have no value. Outside of the second block, but still in the first, 
    // we log fruit again. Fruit is 'mango' since we declared it in the if block. We log fruit again on line 307. Fruit is 'mango', because we declared
    // our fruit variable with 'var' inside the if block. This is not block scoped and is hoisted to the top of our function. We log fruit one last 
    // time in the global scope so fruit is apple.
},

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result =  [
      {'A': 4},
      {'D': 9},
      {'E': 10},
      {'B': 9},
      {'C': 4}
    ];

    return result;

    // Annotation:
    // We declare a global variable num and assign to 6. We then declare a const variable fn1 assigned to a function. On line 355 we declare a const
    // variable fn2 and assign it to a function. We then invoke fn1 on line 363. We move back to line 336 inside the fn1 function and declare a variable
    // num and assign it equal to 4. We log num on line 338 which is 4 as we just declared. On line 340, we check if num is less than 5. If so, we declare
    // a block scoped const variable num and assign it equal to 9. We invoke fn2 on line 343 and pass in num, which we just assigned the value 9. We skip
    // to line 356, now inside fn2 and log num. Num here will equal the parameter that we passed into the function which is 9. We reassign the global num 
    // variable on line 358 to the current parameter num plus one. When we log num again on line 360, it now equals 10. After fn2 runs, we keep moving inside 
    // fn1 and declare a const variable newNum on line 345, assigned to the value of the num variable. This is still within the block scope of the if statement 
    // where we declared num and assigned to 9, so newNum equal 9 as well. On line 350, outside of the block scope, but still within function scope, we reassign
    // newNum to the num variable. This newNum variable cannot look inside the if block scope to see the previously declared newNum variable, so we are creating 
    // a global newNum variable and assigning it to the value of 4. We log newNum on line 352 and get 4 because it was assigned the value of the function scoped
    // num variable.
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result =  [
      {'A': 75},
      {'B': 0},
      {'C': 75},
      {'D': 80},
      {'A': 55},
      {'B': 0},
      {'C': 55},
      {'E': 55}
    ];
    return result;

    // Annotation:
    // We declare a global variable hunger and assign it to 100. We then declare the eatSnack function on line 391. We skip to line 404 and invoke eatSnack.
    // On line 392, we reassign the global hunger variable to the current value minus and log hunger, which is now 75. We invoke the gorgeYourself function
    // and move to line 396 where it has been declared. Inside the function we declare a const variable hunger and assign it to 0. We log hunger on 398 which
    // will give us 0. We log hunger again on line 401. We are within the eatSnack function scope that does not have it's own hunger variable declared, so we 
    // can look to the variable in the global scope which equals 75. We move to line 406 and reassign the global hunger variable to the current value plus 5.
    // Hunger will now equal 80 when we log it on line 407. We invoke eatSnack again on 409, go back up to line 392 and reassign hunger globally to 55. We log
    // A again on line 393, which refers to the global variable and equals 55. The gorgeYourself function is invoked again which, again, declares a function 
    // scoped hunger variable assigned to 0. We log B again on line 398 which is 0 because we just declared and assigned it. We log hunger again within eatSnack
    // which still equals 55 because it is referring back to the global variable. When eatSnack is finished running, we log hunger which has been reassigned to 
    // 55 globally.
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';  //var cheeseTopping = 'kraft',var amandaBynes = "National Treasure"

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result =  [
      {'A': 'ketchup sandwich'},
      {'D': 'gouda'},
      {'B': 'undefined'},
      {'C': 'not a mediocre sandwich'},
      {'E': 'not a mediocre sandwich'},
      {'F': 'National Treasure' }
    ];
    return result;

    // Annotation:
    // We declare a global variable sandwich and assign it to the string 'ketchup sandwich'. We log sandwich on line 440 which will be 'ketchup sandwich'. We
    // then declare a const variable addChipotle on line 442 and assign its value to a function. We declare another const variable addCheese on line 453 and
    // assign its value to a function. We skip to line 464 and reassign a cheeseTopping variable to 'kraft'. Since no cheeseTopping variable exists currently,
    // we have just declared a global cheeseTopping variable. We invoke addCheese on line 465. Within addCheese on line 454, we declare a cheeseTopping variable
    // and assign it to 'gouda'. We log cheeseTopping on line 455 and receive 'gouda'. We declare a const variable shesTheManReference on line 457, then invoke
    // it on line 461. We go back to line 458 and reassign the variable amandaBynes to 'National Treasure'. The declares a new global variable because we did not
    // specify let, var, or const. We move down to line 467 and invoke addChipotle next. First, we log toppings on line 443. We declare and assign toppings on the
    // next line, so the toppings declaration is hoisted to the top of the function without the value and toppings on line 443 will be undefined. The toppings
    // variable gets assigned to 'chipotle sauce' on line 444. We run a conditional statement to check if toppings equals 'chipotle sauce'. We reassign the sandwich
    // variable to 'not a mediocre sandwich'. This will reassign our global variable which was previously 'ketchup sandwich'. We log sandwich on line 450 which now 
    // equals 'not a mediocre sandwich'. After addChipotle runs, we go to line 468 and log sandwich which is 'not a mediocre sandwich'. We log amandaBynes which will
    // be 'National Treasure'.
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A: num
    }

    foo();

    // Log B: num

    const result = [
      {'A': 7},
      {'B': 7}
    ];
    return result;

    // Annotation:
    // We declare a global variable num on line 497 and assign it to 10. we declare a function foo on line 499. We invoke foo on line 506. On line 500, we check
    // if num is greater than five, and if so, reassign the num variable to 7. This reassigns the value of the globally declared variable. We log num on line 503
    // which will be 7. We exit foo and log num again on line 508 which will be 7 since we are in the global space, and reassigned the global variable earlier.
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result =  [
      {'A': 95},
      {'B': 90},
      {'C': 90}
    ];
    return result;

    // Annotation:
    // We declare a global variable grade and assign it to 100. On line 525 we declare a function losePoints. We skip to line 543 and invoke losePoints. We go 
    // back to line 526 and reassign the grade variable to 90. On line 528 we declare a function addPoints. We skip to line 538 and invoke addPoints. We go back
    // to line 529 and declare a const variable grade and assign it to 95. We check if grade equals 95, then declare a block scoped varaible grade and assign it 
    // to 97. We log grade on line 535 which will be 95 because that was declared within the current function scope. We move back to line 540 and log grade inside
    // the losePoints function scope. Grade was reassigned to 90 at the top of the function and has not changed within this scope. We log grade on 545 in the global 
    // scope after running losePoints. Since losePoints reassigned grade in the global scope, grade is 90 here as well.
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result =  [
      
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe   flipflop
      var shoe = 'boot';
    }

    // Log B: shoe      flipflop 
    putOnShoe();
    // Log C: shoe

    const result = [
      {'B': 'flipflop'},
      {'A': 'undefined'},
      {'C': 'flipflop'}

    ];
    return result;

    // Annotation:
    // On line 469 we declare a global variable named shoe and assign it equal to flipflop.
    // Then we declare a global function named putOnShoe, but we skip down to line 469 because it
    // hasn't been invoked yet. On line 469 we log the value of show, which is 'flipflop' at this point 
    // in time. Then we go ahead and invoke our putOnShoe function, and when we try to log shoe within
    // our function, we get undefined because our shoe delcaration on line 473 is hoisted to the top of 
    // that function scope Once we've finished executing putOnShoe, we go back down to line 478 and log
    // shoe again which will give us flipflop.

  },

  exerciseP() {
    function orderLunch() {
      if (typeof lunch === 'undefined') {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
>>>>>>> 568db0ab5b43ec3388877948b5afc1039e9a1cc4
  }
}

module.exports = scope;