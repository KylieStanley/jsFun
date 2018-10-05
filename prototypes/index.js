const { instructors, cohorts } = require('./datasets/turing');
const { constellations, stars } = require('./datasets/astronomy');
const { cakes } = require('./datasets/cakes');
const { pie } = require('./datasets/pie');
const { clubs } = require('./datasets/clubs');
const { classrooms } = require('./datasets/classrooms');
const { mods } = require('./datasets/mods');
const { bosses, sidekicks } = require('./datasets/bosses');

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
  studentsForEachInstructor() {
    const result = instructors.map((instructor) => {
      let newInstructor = {name: instructor.name}
      let matchingCohort = cohorts.find(function(cohort) {
        return cohort.module === instructor.module;
      })
      newInstructor.students = matchingCohort.studentCount;
      return newInstructor;
    });
    return result;
 
    // Annotation:
    // I have two arrays and want an array. The returned array will be the same length as instructors array
    // so I will use .map over instructors. I set a variable newInstructor to an oject with a key name that 
    // is assigned to the instructor.name. I declare a variable matchingCohort. I will iterate through cohorts
    // and return the cohort module that equals the instructor module.
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((obj,key) => {
      obj[`cohort${key.cohort}`] = key.studentCount / instructors.reduce((acc, teacher) => {
        if (teacher.module === key.module) {
          acc++;
        }
        return acc;
      }, 0);
      return obj;
    }, {});
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
    // I receive an array and want to receive an array of the same length with a new
    // key of studentsPerInstructor and mod so I will use map to iterate over the mods.
    // On each iteration the callback will return a new object with a mod and studentsPerInstructor
    // key. We get the value of studentsPerInstructor by dividing our mod.students by the 
    // mod.teachers. The map function will return a new array of our new objects.
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
    // I receive an array of classrooms and want to return a new array with only
    // FE classrooms so I use the filter method. Each iteration of the callback 
    // returns a boolean. If the statement evaluates to true, the room will be added
    // to the new array. The filter function finally returns an array of only FE rooms.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

  let feCapacity = 0;
  let beCapacity = 0;

    const result = 
    classrooms.reduce((obj, room) => {
      if (room.program === 'FE') {
        feCapacity += room.capacity;
      } else {
        beCapacity += room.capacity;
      }
      obj.feCapacity = feCapacity;
      obj.beCapacity = beCapacity;
      return obj;
    }, {});
    return result;


    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a,b) => a.capacity - b.capacity);;
    return result;

    // Annotation:
    // I have an array and want to return the same array, sorted by capacity, so I will use 
    // .sort. Each callback iteration compares two room object capacities and continues through
    // the end. The .sort will return the new array of objects in increasing capacity order.
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
  },
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

    const result = cakes.map(cake => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      }
    });
    return result;

    // Annotation:
    // I have an array and want to return a modified array of the same length. I will use
    // map to iterate over each cake. Each iteration of the callback function will return 
    // a new object with only the cake flavor and stock. The new array of objects will be 
    // returned and stored in result.
  },

  totalInventory() {
    // Return the total amout of cakes in stock e.g.
    // 59

    const result = cakes.reduce((total, cake) => {
      total += cake.inStock;
      return total;
    }, 0);
    return result;

    // Annotation:
    // I have an array and want to return a single number so I will use reduce. I set the 
    // initial value to zero and on each iteration of the callback, add the value of caie.inStock
    // to the total. The callback will return the total on each and the reduce will return 
    // the final total. 
  },

  onlyInStock() {

    const result = cakes.filter((currentCake) => {
        return currentCake.inStock;
    });

    return result;

    // Annotation:
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

     const result = Object.keys(bosses).reverse().map((boss) => {
      return {
        bossName: bosses[boss].name,
        sideKickLoyalty: sidekicks.reduce((acc, sideKick) => {
          if (boss === sideKick.boss.toLowerCase()) {
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




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name);

    // Annotation:
    // I have an array and want to return an array of a shorter length. I only want to return
    // kitties that have the color orange, so I will use filter to return only those kitties.
    // That will return an array of the kitty objects and I only want an array of the name properties.
    // I will chain on map to return a new modified array of the same length to pull back just the name
    // values.
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a,b) => a.age - b.age);
    return result;

    // Annotation:
    // I am given an array and want to return an array of the same length, with its elements
    // reordered. I will use .sort and access the ages with dot notation to iterate through the
    // kitty objects and sort them by age. 
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      kitty.age += 2;
      return kitty;
    });
    return result;

    // Annotation:
    // I am given an array and want to return an array of the same length, with the age
    // property on each kitty object increased by two. I use map to iterate over each kitty
    // and set kitty.age to the current value plus two. I then return the kitty object from the
    // callback and return the entire changed array from the main function.
  }
};




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// DATASET: bosses, sidekicks from ./datasets/bosses
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    var constellationKeys = Object.keys(constellations);
    const result = stars.filter(star => {
      let newStar;
      constellationKeys.forEach(key => {
        if (constellations[key].names.includes(star.constellation))
        newStar = star;
      })
      return newStar;
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((obj, star) => {
      if (!(star.color in obj)) {
        obj[star.color] = stars.filter(color => {
          return star.color === color.color;
        })
      }
      return obj;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]


    const result = stars.filter(star => {
      return star.visualMagnitude < 0.6 && star.constellation !== '';
    }).map(star => star.constellation)
    return result;

    // Annotation:
    // I have an array and want to return a smaller array. We are returning the brightest stars, 
    // which does not appear to include 'Hadar'. I used .filter to return stars with a visual magnitude
    // less than .6 and checked if the constellation was an empty string such as the case of the Alpha
    // Centauri star. I then mapped through the filtered stars and returned just the constellation names.
    // Finally I returned a full array of names.
  }
};


module.exports = {
  turingPrompts,
  piePrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts
};