// 속성 계산명  : 속성 이름을 정의하는 다른방법, 대롹ㄹ호 안에 식을 넣거나 변수를 대입해서 동적으로 객체속성을 추가 
var obj ={};
for (var i=0; i<4;i++){
    obj['key'+i]=i;
}

console.log(obj);

var profile = 'chole:30';
var person ={
    [profile]:true,
    [profile.split(':')[0]]:profile.split(':')[1]
};

console.log(person);