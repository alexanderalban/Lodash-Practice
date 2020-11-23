const pieNums = ["1","4","1","5","9","2","6","5","3","5","8","9","7","9","3",
"2","3","8","4","6","2","6","4","3","3","8","3","2","7","9","5","0","2","8",
"8","4","1","9","7","1","6","9","3","9","9","3","7","5","1","0","5","8","2",
"0","9","7","4","9","4","4","5","9","2","3","0","7","8","1","6","4","0","6",
"2","8","6","2","0","8","9","9","8","6","2","8","0","3","4","8","2","5","3",
"4","2","1","1","7","0","6","7","9","8","2","1","4","8","0","8","6","5","1",
"3","2","8","2","3","0","6","6","4","7","0","9","3","8","4","4","6","0","9",
"5","5","0","5","8","2","2","3","1","7","2","5","3","5","9","4","0","8","1",
"2","8","4","8","1","1","1","7","4","5","0","2","8","4","1","0","2","7","0",
"1","9","3","8","5","2","1","1","0","5","5","5","9","6","4","4","6","2","2",
"9","4","8","9","5","4","9","3","0","3","8","1","9","6","4","4","2","8","8",
"1","0","9","7","5","6","6","5","9","3","3","4","4","6","1","2","8","4","7",
"5","6","4","8","2","3","3","7","8","6","7","8","3","1","6","5","2","7","1",
"2","0","1","9","0","9","1","4","5","6","4","8","5","6","6","9","2","3","4",
"6","0","3","4","8","6","1","0","4","5","4","3","2","6","6","4","8","2","1",
"3","3","9","3","6","0","7","2","6","0","2","4","9","1","4","1","2","7","3",
"7","2","4","5","8","7","0","0","6","6","0","6","3","1","5","5","8","8","1",
"7","4","8","8","1","5","2","0","9","2","0","9","6","2","8","2","9","2","5",
"4","0","9","1","7","1","5","3","6","4","3","6","7","8","9","2","5","9","0",
"3","6","0","0","1","1","3","3","0","5","3","0","5","4","8","8","2","0","4",
"6","6","5","2","1","3","8","4","1","4","6","9","5","1","9","4","1","5","1",
"1","6","0","9","4","3","3","0","5","7","2","7","0","3","6","5","7","5","9",
"5","9","1","9","5","3","0","9","2","1","8","6","1","1","7","3","8","1","9",
"3","2","6","1","1","7","9","3","1","0","5","1","1","8","5","4","8","0","7",
"4","4","6","2","3","7","9","9","6","2","7","4","9","5","6","7","3","5","1",
"8","8","5","7","5","2","7","2","4","8","9","1","2","2","7","9","3","8","1",
"8","3","0","1","1","9","4","9","1","2","9","8","3","3","6","7","3","3","6",
"2","4","4","0","6","5","6","6","4","3","0","8","6","0","2","1","3","9","4",
"9","4","6","3","9","5","2","2","4","7","3","7","1","9","0","7","0","2","1",
"7","9","8","6","0","9","4","3","7","0","2","7","7","0","5","3","9","2","1",
"7","1","7","6","2","9","3","1","7","6","7","5","2","3","8","4","6","7","4",
"8","1","8","4","6","7","6","6","9","4","0","5","1","3","2","0","0","0","5",
"6","8","1","2","7","1","4","5","2","6","3","5","6","0","8","2","7","7","8",
"5","7","7","1","3","4","2","7","5","7","7","8","9","6","0","9","1","7","3",
"6","3","7","1","7","8","7","2","1","4","6","8","4","4","0","9","0","1","2",
"2","4","9","5","3","4","3","0","1","4","6","5","4","9","5","8","5","3","7",
"1","0","5","0","7","9","2","2","7","9","6","8","9","2","5","8","9","2","3",
"5","4","2","0","1","9","9","5","6","1","1","2","1","2","9","0","2","1","9",
"6","0","8","6","4","0","3","4","4","1","8","1","5","9","8","1","3","6","2",
"9","7","7","4","7","7","1","3","0","9","9","6","0","5","1","8","7","0","7",
"2","1","1","3","4","9","9","9","9","9","9","8","3","7","2","9","7","8","0",
"4","9","9","5","1","0","5","9","7","3","1","7","3","2","8","1","6","0","9",
"6","3","1","8","5","9","5","0","2","4","4","5","9","4","5","5","3","4","6",
"9","0","8","3","0","2","6","4","2","5","2","2","3","0","8","2","5","3","3",
"4","4","6","8","5","0","3","5","2","6","1","9","3","1","1","8","8","1","7",
"1","0","1","0","0","0","3","1","3","7","8","3","8","7","5","2","8","8","6",
"5","8","7","5","3","3","2","0","8","3","8","1","4","2","0","6","1","7","1",
"7","7","6","6","9","1","4","7","3","0","3","5","9","8","2","5","3","4","9",
"0","4","2","8","7","5","5","4","6","8","7","3","1","1","5","9","5","6","2",
"8","6","3","8","8","2","3","5","3","7","8","7","5","9","3","7","5","1","9",
"5","7","7","8","1","8","5","7","7","8","0","5","3","2","1","7","1","2","2",
"6","8","0","6","6","1","3","0","0","1","9","2","7","8","7","6","6","1","1",
"1","9","5","9","0","9","2","1","6","4","2","0","1","9","8","9"];



//_.chunk creates an array of elements split into groups. In this case,
//splitting the pieNums into groups of 200.
console.log("This is the '_.chunk'")
console.log(_.chunk(pieNums, [size=200]));

//_.reverse, naturally, reverses the order of the array
console.log("This is the '_.reverse'")
console.log(_.reverse(pieNums));

//_.without removes specified items from the array. In this case, removing
//"1" and "3"
console.log("This is the '_.without'")
let withoutArray = _.without(pieNums, "1", "3");
console.log(withoutArray);

//_.shuffle rearranges the array items randomly
console.log("This is the '_.shuffle'")
console.log(_.shuffle(pieNums));

//_.sampleSize randomly gathers the specified number of items from an array,
//and returns this as a new array. In this case, 25 items
console.log("This is the '_.sampleSize'")
console.log(_.sampleSize(pieNums, 25));

//_.orderBy places the items in the array in ascending order
console.log("this is the '_.orderBy'")
console.log(_.orderBy(pieNums));

//_.groupBy creates an object composed of keys generated from the results of
//running each element of the array through the iteratee. In this case,
//there is no iteratee. So, it groups like items together.
console.log("this is the '_.groupBy'")
console.log(_.groupBy(pieNums));

//_.xor creates an array of unique values of the given array
console.log("this is the '_.xor'")
console.log(_.xor(pieNums));

//_.last returns the last item in the array
console.log("this is the '_.last")
console.log(_.last(pieNums));

//_.drop creates a slice of array with a number of elements dropped at the
//beginning. In this case, 500
console.log("this is the '_.drop'")
console.log(_.drop(pieNums, 500));

//_.replace replaces a designated string with another designated string.
//It will only replace the first instance of the string. In this case,
//the first instance of "0" will be replaced with "hello"
console.log("this is the '_.replace'")
console.log(_.replace(pieNums, '0', 'hello'));



//Examples for front facing website

//Get Full List of Office Workers

let officeArray
let workerNameArray = [];

const getOfficeArray = () => {
    fetch('https://randomuser.me/api/?nat=us&results=50&inc=name')
        .then(response => response.json())
        .then(users => officeArray = users)
        setTimeout(function() {
            console.log(officeArray)
            officeArray.results.map((user) => {
                workerNameArray.push(user.name.first);
            })
            console.log(workerNameArray);
        }, 1000)
};

getOfficeArray();

const showWorkerNameArray = () => {
    let office = document.getElementById('office-home');
    let workers = workerNameArray.join(', ');
    office.append(workers);
}

//Get Mystery Team

const getMysteryTeam = () => {
   mysteryTeam = _.sampleSize(workerNameArray, 5);
   console.log(mysteryTeam);
   let teamMates = document.getElementById('team-home');
   let team = mysteryTeam.join(', ');
   teamMates.append(team);
}

//_.chunk

const divideAndConquer = () => {
    let interrogationRooms = document.getElementById('chunk-home');
    let suspectGroups = _.chunk(workerNameArray, [size=10]);
    console.log(suspectGroups)
    interrogationRooms.append(suspectGroups.join(' \b '));
}

//_.reverse

const reverseWorkers = () => {
    let room = document.getElementById('reverse-home');
    let flippedWorkers = _.reverse(workerNameArray);
    console.log(flippedWorkers);
    room.append(flippedWorkers.join(', '));
}

//_.shuffle

const shuffleWorkers = () => {
    let room = document.getElementById('shuffle-home');
    let shuffledWorkers = _.shuffle(workerNameArray);
    console.log(shuffledWorkers);
    room.append(shuffledWorkers.join(', '));
}

//_.without
const removeSome = () => {
    let room = document.getElementById('without-home');
    let remainingWorkers =  _.without(workerNameArray, "John", "Cody", "Allison", "Eric", "Jenny",
    "Ann", "Tina", "Jim", "Ryan", "James");
    console.log(remainingWorkers);
    room.append(remainingWorkers.join(', '));
}


//Solve Mystery
const solveMystery = () => {
    let room = document.getElementById("solve-home");
    _.shuffle(workerNameArray);
    let innocents = workerNameArray.splice(0, 49);
    console.log(innocents);
    console.log(workerNameArray);
    let remainingWorkers = _.without(workerNameArray, innocents)
    console.log(remainingWorkers);
    room.append(remainingWorkers.join(', '));
}