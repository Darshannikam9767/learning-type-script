// const input = document.getElementsByClassName(".input");
// const btn = document.getElementsByClassName(".btn");

// let num : number;

// btn[0].addEventListener("click",()=>{
//     console.log(input);
    
// })

// let arr : [number,string] = [1.5, "Darshan"];

// console.log(arr);

// function abcd () : string {
//     return "hello";
// }

// console.log(abcd().toUpperCase());


// enum direction {
//     top = "TOP",
//     left = "LEFT",
//     right = "RIGHT",
//     bottom = "BOTTOM",
// }


// console.log(direction.bottom);

// let variable : string | number | number[];

// variable = "true";
// console.log(variable);

// variable = 20;
// console.log(variable);

// variable = [1,2,3,4,5];
// console.log(variable);

// let variable : string | number;

// variable = 12;

// if(typeof variable === "number"){
//     variable.toFixed(2);
// }else if(typeof variable === "string"){
//     variable.toUpperCase();   //in this way it doesn't work...
// };

// function demo(variable: string | number): string | number{
//     if(typeof variable === "number"){
//         return variable.toFixed(2);
//     }else{
//         return variable.toUpperCase();
//     }
// }

// console.log(demo("darshan"));
// console.log(demo(76.5234651));


// let value : string | number; //union 



//Intersection
type City = {
    cityName : string,
    population : number,
}

type Planet = {
    planetName : string,
    cities : number,
}

type Universe = City & Planet;

let variable : Universe ;
variable= {
    cityName:"Shirdi",
    population : 5636478,
    planetName : "Earth",
    cities : 34290
}

console.log(variable);


