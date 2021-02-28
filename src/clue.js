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

function selectRandom (array) {
    let element = array[Math.floor(Math.random()*array.length)];
    return element;
}



let randomSuspect = selectRandom(suspectsArray);
let randomRoom = selectRandom(roomsArray);
let randomWeapon = selectRandom(weaponsArray);


function pickMistery() {
    let randomCards = {suspect: randomSuspect, room: randomRoom, weapon: randomWeapon};
    return randomCards;
}



let randomMistery = pickMistery();



// ITERATION 3

function revealMystery() {
  return `${randomMistery.suspect.firstName.toUpperCase()} ${randomMistery.suspect.lastName.toUpperCase()} killed Mr. Boddy using the ${randomMistery.weapon.name.toUpperCase()} in the ${randomMistery.room.name.toUpperCase()}!`;
}

revealMystery ();

