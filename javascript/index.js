// Variables
// var , let , const
var a = 12;
let b = "hello";
const c = 'welcome';
console.log(a ,b ,c);
let d = "54"
console.log(typeof(d));
d = Number(d)
console.log(typeof(d));

// functions
function name(a){
     console.log(a);
}
name("Balraj");
const a1 = 12;
const a2 = 15;
const a3 = 13;
function sum(a1,a2,a3){
    return a1+a2+a3  
}
const A= sum(a1,a2,a3);
console.log(A);

function sum1(a1,a2){
    var a3 = 23
    return a1+a2+a3
}
console.log(sum1(a1,a2));

// conditions
function condition(a1,a2,a3) {
    // if (a1 == a2 && a1 ==a2){
    //     console.log(a1 ,a2);
    // }
    if(a1 === a2 && a1 == a2){
        console.log(a1 ,a2);
    }
    else{
        console.log(a3);
    }
}
condition(5,'5',6);

function t(array,num){
    array.push(num);
    return array.shift();
}

const t1 = [1,2,3,4,5]
console.log(JSON.stringify(t1));
const t2 = t(t1,6);
console.log(t2);
console.log(JSON.stringify(t1));

//switch case
function switch_case(score){
    const a=["six","four","out","ones"]
    let answer="" ; 
    switch(score){
        case 6: 
            answer=a[0]
            break;
        case 4: 
            answer=a[1]
            break;
        case 1: 
            answer=a[3]
            break;
        case 0: 
            answer=a[2]
            break;
        default :
            answer="nothing...";
    }
    return answer;
}
console.log(switch_case(6));
console.log(switch_case(4));
console.log(switch_case(1));
console.log(switch_case(0));
console.log(switch_case(2));

// Objects
function member(name, age,status) {
    const mem = {
        "name" : name,
        "age" : age,
        "status":status
    }
    return mem;
}
console.log(member("rajesh" ,30 ,"single"));

// loops
const loop = [];
for(let i =1;i<50;i+=3){
    loop.push(i);
}
console.log(loop);
console.log(typeof(loop));

// conditional loops
const cLoops = [];
for(let i = 2;i<50;i++){
    if(i%2 == 0){
        cLoops.push(i);
    }
} 
console.log(cLoops);
let sumNo =0 ;
for(let i=0;i<cLoops.length;i++){
   sumNo = sumNo+ cLoops[i]; 
}
console.log(sumNo);

// 2dim array loops
let sum2 =1;
let dim2 = [[1,2,3],[4,5,6],[7,8,9]]
for (let i = 0; i < dim2.length ;i++){
    for (let j=0; j < dim2[i].length ;j++){
        console.log(dim2[i][j]);
        sum2 *= dim2[i][j];
    }
}
console.log(sum2);
console.log(dim2.length);

// var p = 1;
// var s =15;
// while (s<10) {
//     p *= s;
// }
// console.log(p);

function rand(min,max){
    console.log(Math.floor(Math.random() *(min,max)+1));
}
const x =rand(6,9)
console.log(x);
