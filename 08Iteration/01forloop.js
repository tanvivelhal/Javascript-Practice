// for (let i = 1; i <= 10 ; i++) {
//     console.log(i);
// }


// for (let i = 1; i <= 10 ; i++) {
//     console.log(i * 15);
// }

// const nameArray = ["apple","mango","banana","chickoo","papaya"]

// for (let  i = 0;  i < nameArray.length;  i++) {
//     const element = nameArray[i];
//     console.log(element);
// }


// for (let i = 0; i < 5;  i++) {
//     if(i==2){
//         (`2 is detected`)
//         break
//     }
//     console.log(i);
// }    

// for (let i = 0; i < 3; i++) {
//     console.log(i);
    
    
// }

for (let i = 0; i < 3;  i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 3 ;  j++) {
        console.log(`inner loop ${j} : outer loop${i}`);               //first check the condition & then print
    }
}