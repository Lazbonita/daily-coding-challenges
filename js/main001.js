//Remove vowels from strings

function shortcut(string){
    let vowels = ['a','e','i','o','u']
 return string.split('').filter(x=>!vowels.includes(x)).join('')
}
console.log(shortcut('Hello'));
console.log(shortcut('Goodbye'));
console.log(shortcut('Amazing'));
console.log(shortcut('Mitochondria'));
