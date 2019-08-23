// for (let i= 0; i<5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const names=['shaun' , 'mario', 'luigi'];
// for(let i = 0 ; i < names.length; i++){
// console.log(names[i]);
// }


// let i=0;
// while(i<5){
//     console.log('in loop: ',i);
//     i++;
// }
// const names =['shaun', 'mario' ,' luigi'];
// let i=0;
// while (i<names.length){
//     console.log(name[i]);
//     i++;
// }

// let i=5;
// do{
//     console.log('val of i is:',i);
//     i++;

// } while(i<5);

// const age=25;
// if(age>20 ){
//     console.log('you are over 20 years old');
    
// }
// const ninja = ['shaun', 'ryu', 'chun-li', 'loshi'];
// if(ninja.length > 3){
//     console.log("that's a lot of ninja");
// }
// const password ='p@ss';
// if (password.length >=12 && password.includes('@')){
//     console.log('that password is might strong')
// }
//  else if( password.length >= 8 || password.includes('@')){
//     console.log ('that password is long enough');
// } else{
//     console.log('password is not long enough');
// }
// let user = false;
// if(user){

// }
const scores =[50, 25, 0 ,30, 100, 20, 10];
for (let i = 0; i< scores.length; i++){
    if(scores[i] ==0){
        continue;
    }
console.log('your score:', scores[i]);
if(scores[i] ===100){
    console.log('congrats, you got the top score!');
    break;
}
}

const age =30;
if(true){
    const age = 40;
    const name= 'shaun';
    console.log('inside 1st code block:', age , name);
    if(true){
        const age=50;
        console.log('indie 2nd code block:', age);
    }
}
console.log('outside code block:',age, name, test);