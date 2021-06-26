// {
//     const name ='Mark';
//     console.log(name);
// }

// // console.log(name);

// let age=38;
// {
//     age++;
//     console.log(age);
// }
// ++age;
// console.log(age);
// age++;
// console.log(age);

// // ES6 var --> let ,const


// var a=0;
// console.log(a);

// (function(){
//     a++;
//     console.log(a);
// })();

// (function (){
//     var b=0;
//     console.log(b);
// })();
// console.log(b);

//블록 스코프
// var c =0;
// {
//     c++;
//     console.log(c);
// }

// {
//     //var 는 상관없이 함수스코프를 가지고 동작함
//     var d=0;
//     console.log(d);
// }
// console.log(d);

// var & 호이스팅(아래 선언된것도 끌어올려서 위에서 사용할 수 있는것 함수뿐만아니라 변수도, )


// 함수먼저
function hell1(){
    console.log('hell1');
}

hell1();
hell2();
// 함수의 호출을 먼저
function hell2(){
    console.log('hello2');
}
