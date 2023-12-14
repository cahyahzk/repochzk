/*console.log("Hello");
hjhjhj
ini kadal hutan*/
/*let kadrun="SINGA"
let unta

unta=kadrun
unta=2
console.log(unta)
console.log("Cadok")

const uang = 1
//uang=2

console.log(uang)
let we=3
let er=4
let ge=er+we
console.log(ge)
console.log(we+er)

let IPK=2.9
if (IPK > 3.5) {
console.log("Cumlaude")
} else if (3<=IPK && IPK<=3.5) {
console.log("Baik")
} else{
console.log("Cukup")
}
  
let ret=45.3
console.log(ret)
console.log(typeof ret)*/

// let array = [1,2,3,4,5]
// let array2=["badu","roro",4,5,"cucuk"]
// console.log(array[3])
// console.log(array.length)
// console.log(array2)
// console.log(array2[array2.length-1])

// console.log(array.toString())
// console.log(typeof array.toString())
// console.log(array[1].toString())

// //pop remove paling belakang
// console.log(array.pop())
// console.log(array)

// //push tambah elemen terakhir
// console.log(array.push(5))
// console.log(array)

//shift remove array indeks 1
/*console.log(array.shift())
console.log(array)
console.log(array.unshift(1))
console.log(array)

//sort harus sama digitnya
let arrays = [100,21,3,40,5]
console.log(arrays.sort())
console.log(arrays)
console.log(arrays.reverse())
console.log(arrays)
console.log(arrays.sort(function(a,b) {return b-a}))
console.log(arrays.sort(function(a,b) {return a-b}))*/
//let prompt("What is your favorite number? ");

// Bubble sort Implementation using Javascript
 
// Creating the bblSort function
function bblSort(arr) {
 
    for (var i = 0; i < arr.length; i++) {
 
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
 
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
 
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
 
    // Print the sorted array
    console.log(arr);
}
 
// This is our unsorted array
var arr = [234, 55, 63, 5, 547];
 
// Now pass this array to the bblSort() function
//bblSort(arr);

x=2
x+=5
c=2
console.log(x)
console.log(c++)
console.log(c)
let a=2
let b="2"
let gg= false
let gg1= 0

console.log(a==b);
console.log(a===b);
console.log(gg==gg1);

console.log(2+3==1+4? 'benar':'salah')//benar depan, salah belakang
console.log(false? 'benar':'salah')//boolean syarat bisa

// function bbleSort(arr) {
//     for (var i = 0; i < arr.length; i++) 
//         if (arr[0]<arr[0+i])
//             arr[0]=    
// }
