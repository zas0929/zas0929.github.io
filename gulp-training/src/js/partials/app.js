// "use strict"
//Destructuring
var prism = {
  l: 5,
  w: 8
}

// function rectPrismaArea ({l, w, h = 10}) {
//   return l * w * h;
// }
console.log(prism.l);

//Template Strings
// let myData = {
//   data: 'hello'
// }
// let template = `
//     <div>
//     ${ myData.data }
//     </div>
//     `
// console.log(template);


//Arrow Functions
// let object = {
//   collection: ['patrick', 'scott', 'mike'],
//   domain: 'angularclass.com',
//   method: function method() {
//     return this.collection.map(item => {
//       return `${ item }@${ this.domain }`
//     })
//   }
// }
// console.log(object.method());


//Var, let const
// const day = 'today';
//
// // if (true) {
// //   day = 'tomorrow';
// // }
// console.log(day);




//Object.keys
// var obj = {
//   "one": 1,
//   "two": 2,
//   "three": 3
// }
// var keys = Object.keys(obj);
//
// var timesTwo = keys.map(function(key) {
//   return obj[key]*2;
// })
// console.log(timesTwo);
// for (var key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(obj[key]);
//   }
// }





//getters and setters
// var obj = {
//   firstName: 'Mike',
//   lastName: 'Adams',
//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set fullName(value) {
//     var fullNameArray = value.split(' ');
//     this.firstName = fullNameArray[0];
//     this.lastName = fullNameArray[1];
//   }
// }
// console.log(obj.fullName);
// obj.fullName = "Scott Moss";
// console.log(obj.firstName);
// console.log(obj.lastName);
