// function nthEven(n){
// return --n*2
// }
// console.log(nthEven(100));



// function generateRange(min, max, step){
//     let arr = []
//     for(let i =min; i<=max; i+=step){
// arr.push(i)
//     }
//     return arr
// }
// console.log(generateRange(2,10,2));
// console.log(generateRange(1,10,3));



// function problem(x){
//     return typeof x == 'string' ? 'Error': x*50+6
// }
// console.log(problem('10'));


// function saleHotdogs(n){
//     return n<5? n*100: n<10? n*95: n*90
// }
// console.log(saleHotdogs(10))


// function seatsInTheater(nCols, nRows, col, row){
//     return (nCols-col+1)*(nRows-row)
// }
// console.log(seatsInTheater(16,11,5,3));
// console.log(seatsInTheater(60,100,60,1));


// function between (a,b){
//     let arr = []
//     for(let i =a; i<=b; i++){
// arr.push(i)
//     }
//     return arr
// }
// console.log(between(2,9));

// function tripleTrouble(one, two, three){
//     let str  = ''
//     for(let i = 0; i<one.length; i++){
//  str += one[i]+two[i]+three[i]
//     }
//     return str
// }
// console.log(tripleTrouble('aa', 'bb', 'cc'));


// function unusualFive(name){
    
// return name.length
// }
// console.log (unusualFive ('seven'))



// function hello(name){
//     return name? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : `Hello, World!`
// }
// console.log(hello('johN'));

// function noBoringZeroes(n){
//     do{
//         n/=10
//     }
// while(n%10 ==0 && n!=0)
// return n
// }
// console.log(noBoringZeroes(1200));
// console.log(noBoringZeroes(456800000));
// console.log(noBoringZeroes(0));



//Remove vowels from strings

function shortcut(string){
    let vowels = ['a','e','i','o','u']
 return string.split('').filter(x=>!vowels.includes(x)).join('')
}
console.log(shortcut('Hello'));
console.log(shortcut('Goodbye'));
console.log(shortcut('Amazing'));
console.log(shortcut('Mitochondria'));