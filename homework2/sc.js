// let fullName = 'Ulfat Zakirli Rovshen'



let fullName = 'Dashgin Rahimov Kerim'
console.log(fullName.split(''));



function adsoyad(fullName) {
    let names = fullName.split(' ')
    if (names.length < 2)
        return fullName
    let deyisenad = names[1] + ' ' + names[0]
    for (let i = 2; i < names.length; i++) {
        deyisenad += ' ' + names[i] }
    return deyisenad}
console.log(adsoyad(fullName))



let string  = adsoyad(fullName);
let stringName = string.split(' ').join('');

console.log(stringName);


 let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]




let reqem5 = arr.filter(reqem  => reqem  === 5)
console.log(reqem5);


let cemi = 0
let n =arr.map (item => cemi +=item)
console.log(n);  //132



let artan = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(artan);


let maxNumber = Math.max(...arr);
let number2 = arr.filter(reqem1 => reqem1 == maxNumber).length;
console.log(number2);    
console.log(maxNumber);



const Name = 'Dashgin'
let ad1 = Name.length
console.log(ad1); //4



let result = arr.findIndex(item => item == '5')
console.log(result);




let ilk = arr.indexOf(maxNumber)
console.log(ilk);



let result2 = arr.findIndex (item => item =='4')
 console.log(result2);


let kicikindex = arr.indexOf(5)
console.log(kicikindex);
let boyukindex = arr.lastIndexOf(5)
 console.log(boyukindex);



let array2 = arr.filter(item => item > 2);
let arr4 = arr.length - array2.length;
console.log(array2);
console.log(arr4);

let index7 = arr.indexOf (7)
console.log(index7);



///////////// TASK 2//////////////

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




let names = arr2.filter(item => item.name.startsWith('t'));
console.log(names);


let nameT = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
console.log(nameT);

let Tkey = arr2.reduce((a5, a4) => (a4.name.startsWith('t') &&a4.name.endsWith('t')) ? a5 + a4.key : a5, 0);
console.log(Tkey);


let arr1 = arr2.map((item, index) => {
    if (item.name.slice(-1) === 'e') {
        return { ...item, name: "SuperDev" };
    } else {
        return item;
    }
});
console.log(arr)



let keyLong = arr2.reduce((maxKey, obj) => (obj.name.length > arr2[maxKey].name.length ? arr2.indexOf(obj) : maxKey), 0);
console.log(keyLong);


let long = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(obj => obj.name.length))) ** 2;
console.log(long);


let nameLength = arr2.filter(obj => obj.name.length === 4);
console.log(nameLength);

const maxKey = arr2.reduce((max, current) => {
    return current.key > max ? current.key : max;
}, arr2[0]);

console.log(maxKey.name);


let indexes = arr2.reduce((indexes, obj, index) => (obj.name.split
    ('L').length - 1 === 2 ? [...indexes, index] : indexes), []);
console.log(indexes);

let key2 = arr2.filter(obj => obj.name.split
    ('t').length - 1 === 2).map(obj => obj.key);
    console.log(key2);

    