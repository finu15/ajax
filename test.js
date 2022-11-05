// template literal ✔
// arrow functions ✔
// higher order functions ✔
// es6 es2020

let boyfriends = ["valavi","abijith","akhil","francis"];




    let ame = "fida"
let best_friend = "finu";

setTimeout(function(){
    console.log(["valavi","abijith","akhil","francis"])
    },0)
let fav_food = "shawarma";








console.log(`name is ${ame} best friend is ${best_friend} number of boyfriends are ${2+2} favourite food is ${fav_food}`);

// let array = [1,2,function (name){console.log(name)}]
// let abhi = array[2]
// abhi("abijith")
function greet(print){
    let name = "francis";
    print(name);
    
}

// greet(function (name){
//     console.log(name)
// })

// function icecream(makeicream,flavour){
//     makeicream(flavour)
// }

// icecream(function(flavour){
//     console.log(`${flavour} flavoured icecream`);
// },"strawberry");


// for(let i = 0; i < boyfriends.length; i++){
//     console.log(boyfriends[i])
// }

// function foreach(func){
//     func(item)
// }
boyfriends.forEach(function (item){
console.log(item)
})

// function greet(name){
//     console.log(name)
// }
// greet("anjali")

var greet = function (name){
    console.log(name)
}
greet("jinu")

function icecream(finu,flavour){
    finu(flavour)
}

icecream(function (jinu){
    console.log(`${jinu} flavoured icecream`)
},"strawberry")



// es6
// high order functions 
// array
// map ✅  filter✅ foreach ✅


function foreach(func){
let boyfriends = ["valavi","abijith","akhil","francis"];
func(boyfriends)
}
boyfriends.forEach(function(item){
    console.log(item)
})
function map(func){

    func("valavi")
}
let mod_bfs = boyfriends.map(function (bf){
    return bf + " sir"
})
console.log(mod_bfs)

