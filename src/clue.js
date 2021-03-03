// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        color: 'green'
    },

    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        color: 'white'
    },

    {
        firstName: 'Victor',
        lastName: 'Plum',
        color: 'purple'
    },

    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        color: 'red',
    },

    {
       firstName: 'Eleanor',
       lastName: 'Peacock',
       color: 'blue'
    },

    {
        firstName: 'Jack',
        lastName: 'Mustard',
        color:'yellow'
    }

];

// Rooms Collection
const roomsArray = [

    {name: 'Dining Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'}

];

// Weapons Collection
const weaponsArray = [

    {
        name: 'rope',
        weight: 10
    },
    
    {
        name: 'knife',
        weight: 8
    },
    
    {
        name: 'candlestick',
        weight: 2
    },
    
    {name: 'dumbbell',
    weight: 30
    },
    
    {
        name: 'poison',
        weight: 2
    },
    
    {
        name: 'axe',
        weight: 15
    },
    
    {
        name: 'bat',
        weight: 13
    },
    
    {
        name: 'trophy',
        weight: 25
    },
    
    {
        name: 'pistol',
        weight: 20
    }

];


// ITERATION 2
function selectRandom(array) {
  if (!array.length ) {
      return undefined;
    } else {
        return array[Math.floor(Math.random() * Math.floor(array.length))];}
}

let randomSuspect = selectRandom(suspectsArray);
let randomRoom = selectRandom(roomsArray);
let randomWeapon = selectRandom(weaponsArray);


function pickMystery() {
    let randomCards = {suspect: randomSuspect, room: randomRoom, weapon: randomWeapon};
    return randomCards;
}

let randomMystery = pickMystery();


// ITERATION 3
function revealMystery() {
  return `${randomMystery.suspect.firstName} ${randomMystery.suspect.lastName} killed Mr. Boddy using the ${randomMystery.weapon.name} in the ${randomMystery.room.name}!`;
}