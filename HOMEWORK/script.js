let fullName = 'dashgin rahimov karim'
// console.log(fullName.split(''));


let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// let result = arr.map((item, index) => {
//         if (item !== 5) {
//             return index
//         }
//     }).filter(item => item)
    
//     console.log(result);
    

// console.log(arr.reduce((acc, currentValue) => acc + currentValue, 0));

// function findRepeatingNumbers(arr) {
//     let repeatingNumbers = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j] && !repeatingNumbers.includes(arr[i])) {
//                 repeatingNumbers.push(arr[i]);
//                 break; 
//             }
//         }
//     }

//     return repeatingNumbers;
// }
// const result = findRepeatingNumbers(arr);
// console.log(result);

const maxNumber = Math.max(...arr);

console.log(maxNumber);

const numToFind = 7;
const occurrences = arr.filter(num => num === numToFind).length;
console.log(`${numToFind} sayısı ${occurrences} kez tekrarlandı.`);



let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]



console.log(arr2.find(item => item.name.startsWith('t') + item.name.endsWith('t')).name);



