// Step 1
var animal = {
    species: "reptiles",
    name: "Steve",
    noises:[]
};

console.log(animal);

// Step 2
var noises = ['arrr', 'quack'];
noises.push('rarr');
noises.unshift('growl');

console.log(noises);

// Step 3
// THIS STEP IS A DICK!
animal["noises"] = noises;

noises.push("fuck noises");


// console.log(animal);
// console.log(noises);

//FUCK STEPS FOUR AND FIVE(ESPECIALLY FIVE)

//Step Six
var animals = [];
animals.push(animal);

console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze']
};
animals.push(duck);


var platypus = {
    species: 'asshole',
    name: 'Godless Jezebel',
    noises:['WHAAAAAA!!!']
};

var cheetah = {
    species: 'cocaine',
    name: 'Snort',
    noises: ['SSSSSSNNNNIIIIFFFF']
};

animals.push(platypus);
animals.push(cheetah);
console.log(animals);
console.log(animals.length);

/*An array is the most logical data structure because it can hold an index of 
various values*/


 var friends = [];
 


function randomFriends(animals) {
    return Math.floor(Math.random() * animals.length); 
};


console.log(animals[randomFriends(animals)]);

friends.push(animals[randomFriends(animals)].name);

console.log(friends);

animal['friends'] = friends;

console.log(animals);

//part 2: Step 1.

console.log(animals);
function search(animalName){
    for (var i = 0; i < animals.length; i++){
        if(animalName === animals[i].name){
            return animalName;
        }else{
            return null;
        }
    }
}

console.log(search("bubba"));

function edit(animalNames, animalObject){
    for (var i = 0; i < animals.length; i++){
    if (animalNames === animals[i].name){
         animals[i] = animalObject;
        }
    }
}

function remove(animalNames1){
    for (var i = 0; i < animals.length; i++){
        if(animalNames1 ===animals[1].name){
            
        }
    }
}