// // 자료형 변환 이해하기 
// // 1. 명시적으로 자료형을 변환 
// // 2. 자바스크립트 엔진에 의해 자동으로 변환되는 방법(동적자료형언어이기떄문에 가능 )
// console.log("5"+1);
// console.log("There is "+5);
// console.log("Five"*2);

// var str = 5 +"1";
// console.log(str)
// console.log(typeof str);

// console.log("5"*"2");
// console.log("5"+"2");

// var num = +str;
// // console.log(num);
// str = String(num);
// console.log(str);

// num = Number(num);
// console.log(num);


//객체이해하기 1
// 값들을 그룹으로 묶은 데이터모음 
// 중괄호 {} 
// json : JavaScript Object Notation
// 객체 이해하기 2 
// 
var family ={
    'address':'Seoul',
    members:{},
    addFamilly : function(age,name,role){
        this.members[role]={
            age:age,
            name:name
        };
    },
    getHeadcount : function(){
        return Object.keys(this.members).length;
    }
};

family.addFamilly(30,'chole','aunt');
family.addFamilly(3, 'lyn','niece');
family.addFamilly(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());

var printMembers = function(){
    var members = family.members;
    for (role in members){
        console.log('role=> '+ role +', name =>'+ members[role].name + ',age=> '+members[role].age);
  
    }
};
printMembers();
console.log('--1');

var members = family.members;
members['nephew']={age:3,name:'hyun'};
members.niece ={age:5, name :'lyn'}
delete members.aunt;
delete members['dog'];
printMembers();
console.log("--2")