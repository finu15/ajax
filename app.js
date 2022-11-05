// console.log("My node app"); 

// var passenger ={
//     name: 'Passenger 1',
//     email: 'pass1@email.com',
//     age:22,
//     phone:[12345, 123456]
// };
// var res = JSON.stringify(passenger);
// console.log(res);

var json ='{"name":"Passenger 1","email":"pass1@email.com","age":22,"phone":[12345,123456]}';
var res = JSON.parse(json);
console.log(res);