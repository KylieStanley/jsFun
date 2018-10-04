const { instructors, cohorts } = require('./datasets/turing');
const { cakes } = require('./datasets/cakes');
const { pie } = require('./datasets/pie');
const { clubs } = require('./datasets/clubs');
const { classrooms } = require('./datasets/classrooms');
const { mods } = require('./datasets/mods');
const { bosses, sidekicks } = require('./datasets/bosses');

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    instructors.map((instructor) => {
        let newInstructor = {name: instructor.name}
        let matchingCohort = cohorts.find(function(cohort) {
        return cohort.module === instructor.module;
    })
        newInstructor.students = matchingCohort.studentCount;
        return newInstructor;
    });

 
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

  const modPrompts = {
    studentsPerMod() {
      const result = mods.map((mod) => {
       let numOfInstructors = mod.students / mod.instructors;
        return {
          mod: mod.mod,
          studentsPerInstructors: numOfInstructors
        }
      })
      return result;

    // Annotation:
    // I receive an array of objects and want to receive an array of the same length with a new
    // key of studentsPerInstructor and mod.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    const result = classrooms.filter((room) => {
      return room.program === 'FE';
    })
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    return result;
    // Annotation:
    // I receive an array of classrooms and want to return a new array
    // with only FE classrooms filtered out so I use the filter method.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach((topping) => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation: I receive an array of cakes and I want to take the 'toppings' 
    // property from each cake object and push them into a new array, minus any duplicates so I
    // start with reduce to iterate through the cakes and initialize an empty array.
    // Inside the reduce method, I can use forEach on cake.toppings to iterate through
    // the toppings and check if the new array contains the topping. If not, it will be pushed in.
    // 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach((topping) => {
        acc.push(topping);
      })
      return acc;
    }, []).reduce((acc, topping) => {
      if (topping in acc) {
        acc[topping]++
      } else {
        acc[topping] = 1;
      }
      return acc;
    }, {});;
    return result;

    // Annotation:     
    //I received an array of cake objects and want to produce a new object that
    //includes the toppings and amount needed of each so I use reduce to first create a new array of only
    //the toppings properties from each cake object. I then create the new object by using reduce again on
    //the toppings array. The callback returns a new key value pair for each topping, and the method
    //returns the entire object;
    // },

  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'honey', inStock: 3 },
    //    { flavor: 'vanilla', inStock: 21 },
    //    ..etc
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amout of cakes in stock e.g.
    // 59

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {

    const result = cakes.filter((currentCake) => {
        return currentCake.inStock;
    });

    return result;

    //I'm receiving an array of cakes and I want a subset of that
    //array so I will use filter. My filter callback will return only
    //the cakes that have an inStock value.  Return an array of only
    //the cakes that are in stock.

    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------







// DATASET: pie from ./datasets/pie
const piePrompts = {
  howManyIngredients() {
    // The bakery needs to make more rhubarb pies in order to meet the
    // desiredInventoryCount. Programmatically determine how many more pies
    // need to be made, and return an object of the total number of ingredients we need
    // we need to buy in order to make the remaining pies. e.g.:
    // {
    //   cinnamon: 50,
    //   sugar: 100
    // }

  let piesNeeded = pie.desiredInventoryCount -  pie.inventoryCount;

  const result = Object.keys(pie.ingredients).reduce((obj, key) => {
    obj[key] = pie.ingredients[key] * piesNeeded;
    return obj;
  }, {});
  return result;

    // Annotation:
    // I receive an object and need to create a new object from that, so I 
    // will use reduce to iterate over the keys in the pie ingredients object.
    // Object.keys will turn the ingredients into an array before using reduce.
    // Each iteration returns the obj with the new property added.
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((obj, club) => {
      club.members.forEach((member) => {
        if (!(member in obj)) {
          obj[member] = clubs.filter((club) => {
            return club.members.indexOf(member) > -1;
          }).map((club) => {
            return club.club;
          })
        }
      })
      return obj;
    }, {})
    return result;

    // Annotation:
    // I receive an array of clubs and want to return an object so I will start with reduce.
    // I need to access the members array of each club so I used forEach to  add each member into
    // the object I am creating with reduce. Each member key in the object needs an array value so I
    // used filter to iterate through the clubs and check if the member is included. This returns the 
    // value as an array of objects, so I mapped through to just get the club names in the array.
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

     const result = Object.keys(bosses).map((boss) => {
      return {
        bossName: bosses[boss].name,
        sideKickLoyalty: sidekicks.reduce((acc, sideKick) => {
          if (bosses[boss].name === sideKick.boss) {
            acc += sideKick.loyaltyToBoss;
          }
          return acc;
        }, 0)
      }
    });
    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



module.exports = {
  turingPrompts,
  piePrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts
};