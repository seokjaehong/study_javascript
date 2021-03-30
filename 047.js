// 2021.03.22
//# 47.화살표함수
// 매개변수가 하나일 경우에는 인자를 정의할 때 괄호 생략 가능 ;
// 코드 블럭 지정하지 않고, 한 문장이면 return 쓰지 않아도 화살표 오르ㅉ고 표현식의 계산 결과 ㄱ밧이 반환 
// 코드 블럭 지정하면, return undefined
// 

// const double = x => x+x;
// console.log(double(2));

// const add = (a,b) => a+b;
// console.log(add(1,2));

// const printArguments = () => {
//     console.log(arguments);
// }

// printArguments(1,2,3);

// const sum = (...args) => {
//     let total =0;
//     for ( let i=0 ; i< args.length; i++){
//         total += args[i];
//     }
//     return total;
// }
// console.log(sum(1,2,3));

// setTimeout(() => {
//     console.log('화살표 함수! ');
// },10);



// #48. 자바스크립트 객체지향 프로그래밍 이해하기 

const teacherJay ={
    name :'제이',
    age :30,
    teachJavascript : function(student){
        student.gainExp();
    }
}

const studentBbo ={ 
    name:'뽀',
    age:20,
    exp:0,
    gainExp: function(){
        this.exp++
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);