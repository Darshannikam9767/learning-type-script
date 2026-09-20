// // // // const input = document.getElementsByClassName(".input");
// // // // const btn = document.getElementsByClassName(".btn");

// // // // let num : number;

// // // // btn[0].addEventListener("click",()=>{
// // // //     console.log(input);
    
// // // // })

// // // // let arr : [number,string] = [1.5, "Darshan"];

// // // // console.log(arr);

// // // // function abcd () : string {
// // // //     return "hello";
// // // // }

// // // // console.log(abcd().toUpperCase());


// // // // enum direction {
// // // //     top = "TOP",
// // // //     left = "LEFT",
// // // //     right = "RIGHT",
// // // //     bottom = "BOTTOM",
// // // // }


// // // // console.log(direction.bottom);

// // // // let variable : string | number | number[];

// // // // variable = "true";
// // // // console.log(variable);

// // // // variable = 20;
// // // // console.log(variable);

// // // // variable = [1,2,3,4,5];
// // // // console.log(variable);

// // // // let variable : string | number;

// // // // variable = 12;

// // // // if(typeof variable === "number"){
// // // //     variable.toFixed(2);
// // // // }else if(typeof variable === "string"){
// // // //     variable.toUpperCase();   //in this way it doesn't work...
// // // // };

// // // // function demo(variable: string | number): string | number{
// // // //     if(typeof variable === "number"){
// // // //         return variable.toFixed(2);
// // // //     }else{
// // // //         return variable.toUpperCase();
// // // //     }
// // // // }

// // // // console.log(demo("darshan"));
// // // // console.log(demo(76.5234651));


// // // // let value : string | number; //union 



// // // //Intersection
// // // type City = {
// // //     cityName : string,
// // //     population : number,
// // // }

// // // type Planet = {
// // //     planetName : string,
// // //     cities : number,
// // // }

// // // type Universe = City & Planet;

// // // let variable : Universe ;
// // // variable= {
// // //     cityName:"Shirdi",
// // //     population : 5636478,
// // //     planetName : "Earth",
// // //     cities : 34290
// // // }

// // // console.log(variable);



// // //premitive type aliases

// // // type Alphabate = string;

// // // let studnetName : Alphabate;

// // // studnetName = "Darshan  Nikam";


// // // console.log(typeof studnetName);







// // // object type aliases

// // type Car = {
// //     name : string,
// //     model : number;
// //     brand : string,
// // }

// // let car : Car;

// // car = {
// //     name:"M4 Competetion",
// //     model : 2025,
// //     brand : "BMW"
// // }

// // console.log(car);
// // console.log(typeof car);




// interface User {
//     name : string;
//     username : string;
//     age : number;
//     email : string,
//     password : string
// }

// const getUser = (user : User) => {
//     console.log(user.name);
//     console.log(user.username);
//     console.log(user.age);
//     console.log(user.email);
//     console.log(user.password);
    
// }

// let user : User = {
//     name : "Darshan Nikam",
//     username : "darshuuu",
//     age : 21,
//     password : "darshan@123",
//     email : "darshan@gmail.com"
// }

// getUser(user)


interface Food {
     name : string
     price : number
}

interface MithaFood extends Food{
    isSweet : boolean
}

interface KhattaFood extends Food{
    isSour : boolean
}


function getMithaFood(food : MithaFood){
    food.isSweet;
}

function getKhattaFood(food : KhattaFood){
    food.isSour;
}