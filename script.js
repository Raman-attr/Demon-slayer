// let age = prompt("Enter the age");

// if(age===null){
//     console.error("You have canceled it.");
// }else{
//     if(age.trim()===""){
//         console.log("Please write something...");
//     }else{
//       age = Number(age);
//       if(isNaN(age)){
//         console.error("Please enter a number");
//       }else{
//         if(age<0){
//             console.log("Not consider");
//         } else if(age>=18){
//             console.log("You can vote");
//         }else{
//             console.log("You cant vote");
//         }
//       }
//     }
// }



// for(let i = 1 ; i<11;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// for(let i = 1 ;  i<11 ;  i++){
//     console.log(`38 x ${i} = ${38*i}`);
// }

// let count = 0;
// for(let i = 1  ; i<16 ; i++){
//     if(i>8){
//         count++;
//         console.log(i);
//     }
// }
// console.log(`Total count is ${count}`);


// let password = "qwertyRaman";
// let pass = prompt("Enter the password..");

// if(pass===null){
//     console.error("You canceled it");
// }else{
//     if(pass.trim()===""){
//         console.error("Please enter something");
//     }else{
//         if(pass===password){
//             console.log("Matched");
//         }else{
//             console.log("Not matched");
//         }
//     }
// }


// while loop
// let attempt = 0;
// let pass = "ramanqwerty"
// let account = false;
// let password = prompt("Enter the password..");
// attempt++;
// if(password===pass) account = true;
// while(password!==pass){
//     if(attempt === 3) {
//         console.error("Acount Locked");
//         break;
//     }
//     password = prompt("Enter the password..");
//     if(password === pass) acount = true;
//     attempt++;
// }

// if(account===true) console.log("Acount opened");


let attempt = 0;
let pass = "raman";
let password = prompt("Enter the password..");
attempt++;
while(attempt<3 && password!==pass){
    password = prompt("Enter the password..");
    attempt++;
}
if(attempt===3 && password!==pass){
    console.error("Account locked");
}else{
    console.log("Done");
}


