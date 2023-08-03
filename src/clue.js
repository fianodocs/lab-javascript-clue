// ITERATION 1

// Suspects Array

const suspectsArray = [ 
    {fName: "",lName: "",occupa: "",age: "",descript: "",image: "",color: ""},
    {fName: "",lName: "",occupa: "",age: "",descript: "",image: "",color: ""},
    {fName: "",lName: "",occupa: "",age: "",descript: "",image: "",color: ""},
    {fName: "",lName: "",occupa: "",age: "",descript: "",image: "",color: ""},
    {fName: "",lName: "",occupa: "",age: "",descript: "",image: "",color: ""},
    {fName: "",lName: "",occupa: "",age: "",descript: "",image: "",color: ""}
];

// Rooms Array

const roomsArray = [

    {name:"1"},
    {name:"2"},
    {name:"3"},
    {name:"4"},
    {name:"5"},
    {name:"6"},
    {name:"7"},
    {name:"8"},
    {name:"9"},
    {name:"10"},
    {name:"11"},
    {name:"12"},
    {name:"13"},
    {name:"14"},
    {name:"15"} 
];

// Weapons Array

const weaponsArray = [
    {type: "",weight: null},
    {type: "",weight: null},
    {type: "",weight: null},
    {type: "",weight: null},
    {type: "",weight: null},
    {type: "",weight: null},
    {type: "",weight: null},
    {type: "",weight: null},
    {type: "",weight: null}

];


// ITERATION 2

function selectRandom(array){
    const randomIndex = Math.floor(Math.random()*array.length);
    const randomItem = array[randomIndex];
    return randomItem;
    
    }   

    

function pickMystery() {
    
    const envelope = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room : selectRandom(roomsArray)
    };
    return envelope;
}


// ITERATION 3

function revealMystery(envelope) {
  const firstName = envelope.suspect.fName;
  const lastName= envelope.suspect.lName
  const weapon =   envelope.weapon.type;
  const room =  envelope.room.name;
  const mysteryReveal=`${firstName} ${lastName}killed Mr. Boddy using the ${weapon} in the room ${room}!`;
  return mysteryReveal;
}


