// -----------------------xndir 1
 // Փոխեք այս կոդը այնպես, որ այն console.log անի 45
// const a = {
//  age: 23,
//  foo: function(arr) {
//      arr.forEach(function(val) {
//          console.log(this.age + val);
//      });
//  }
// };
// a.foo([22]);

//------------------------------------ lucum 1
// const a = {
//  age: 23,
//  foo: function(arr) {
//    arr.forEach(function(val) {
//      console.log(this.age + val);
//    }.bind(this));
//  }
// };

// a.foo([22]);

// ---------------------- xndir 2
 // Ի՞նչը console.log կարվի էկրանին և ինչու
    
//  function zoo() {
//   console.log(this.age);
// }
// const b = {
//   age: 44
// };
// const a = {
//   age: 23,
//   foo: zoo.bind(b)
// };
// a.foo();


// ---------------- lucum2
// ktpi 44


// ---------------------------- xndir 3

 // Փոխեք այս կոդը այնպես, որ այն console.log անի "Mike"
    
    // const a = {
    //     name: "Joe",
    //     f: function() {
    //         console.log(this.name);
    //     }
    // }
    // const b = {
    //     name: "Mike"
    // };
    // a.f();


    //  lucum 3
    // ktpi Mike

// ----------------------------------------------- xndir 4

     // Փոխեք այս կոդը այնպես, որ այն ստեղծի նոր Person օբյեկտ
    
    // function Person() {
    //     this.name = "Mike";
    //     this.age = 33;
    // }
    // const a = Person();
    // console.log(a);

    //---------------------------------------------------- lucum 4

//     function Person() {
//   // this = {};
//   this.name = "Mike";
//   this.age = 33;
//   // return this;
// }
// const a = new Person();
// console.log(a, undefined, 2);

// ktpi
 // person{
// age: 33
// name: "Mike"
// }


// --------------- xndir 5   

     // Փոխեք կոդը այնպես, որ ֆունկցիայի 
     // գործառույթում this լինի undefined:
    
    
//      function func() {
//       alert(this);
//   }
//   func();


// -------------------------------- lucum 5
// "use strict"

// function func() {
//   alert(this);
// }

// func();


