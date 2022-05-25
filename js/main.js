function nthEven(n){
return --n*2
}
console.log(nthEven(100));



function generateRange(min, max, step){
    let arr = []
    for(let i =min; i<=max; i+=step){
arr.push(i)
    }
    return arr
}
console.log(generateRange(2,10,2));
console.log(generateRange(1,10,3));



function problem(x){
    return typeof x == 'string' ? 'Error': x*50+6
}
console.log(problem('10'));


function saleHotdogs(n){
    return n<5? n*100: n<10? n*95: n*90
}
console.log(saleHotdogs(10))


function seatsInTheater(nCols, nRows, col, row){
    return (nCols-col+1)*(nRows-row)
}
console.log(seatsInTheater(16,11,5,3));
console.log(seatsInTheater(60,100,60,1));


function between (a,b){
    let arr = []
    for(let i =a; i<=b; i++){
arr.push(i)
    }
    return arr
}
console.log(between(2,9));

function tripleTrouble(one, two, three){
    let str  = ''
    for(let i = 0; i<one.length; i++){
 str += one[i]+two[i]+three[i]
    }
    return str
}
console.log(tripleTrouble('aa', 'bb', 'cc'));


function unusualFive(name){
    
return name.length
}
console.log (unusualFive ('seven'))

