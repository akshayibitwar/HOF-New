var cl = console.log;

// var str = "Welcome in the beautifull World of React, react is used for Frontend Development and which is more popular like react"

// var str2 = str.replace(/react/ig, "Angular");
// cl(str2);

// var con = "Welcome ";

// var str2 = "In the beautiful world ";

// var str3 = "Angular";

// var str4 = con.concat(str2,str3);

// cl(str4);

// var str5 = "I am Akshay Ibitwar";

// var str6 = str5.charAt(5);
// cl(str6);

// var nums = [10,20,30,40,50,60,70,80];

// nums.forEach(function(num){
//     cl(num)
// })

// var skills = ["Angular", "Javascript", "Mongo", "TypeScript"];

// var skill2 = document.getElementById("skills2");

// var result2 = "<ul class='list-group'>";

// skills.forEach(function(skill){
//     result2 += `<li class='list-group-item'>I Love ${skill}</li>`
// })
  
// result2 += `</ul>`;

// skill2.innerHTML = result2;

// var skills1 = ["Nodejs", "MySQL", "Mongo", "Pythan"];

// var skill3 = document.getElementById("skills3");

// var result3 = `<ul class='list-group'>`;

// skills1.forEach(function(backend){
//     result3 += `<li class="list-group-item">I Love ${backend}</li>`
// })

// result3 += `</ul>`;

// skill3.innerHTML = result3;

// (function () {
//     var msg = "IIFE";
//     console.log(msg);
// })();

// console.log(msg);

var stdInfo = {
    fname : "Akshay",
    lname : "ibitwar",
    email : "akshayibitwar@gmail.com",
    contact : 8657954717,
    fullName : function(){
        // cl(this)
         return `${this.fname} ${this.lname}`
     }
};

 cl(stdInfo.fullName());

//  let RandomNum = Math.random(2);

//  cl(RandomNum);

// const info = document.getElementById("info1");

// let result4 = '';
// stdInfo.forEach(function(std){
//     cl(std);
// });
//         result4 += `<tr>
//                     <td>${index + 1}</td>
//                     <td>${std.fname}</td>
//                     <td>${std.lname}</td>
//                     <td>${std.email}</td>
//                     <td>${std.contact}</td>
//                     </tr>`
// });

// info.innerHTML  = result4;

// let add = function(n1, n2){ Function Expression
//     return n1 + n2
// }

//  function add(n1, n2){  Function Declaration
//     return n1 + n2 
// }

let add = (n1, n2) => (n1 + n2);

cl(add(25,20));

let doubleNum = (num) => (num * 2);

cl(doubleNum(100))

function printNum(num){
    return num * Math.random()
}

cl(printNum(10));

