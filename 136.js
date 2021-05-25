//136. 일정시간 후 코드 실행하기 

// const timer = {
//     run : function() {
//         if (this.t) console.log(' 이미 실행된 타이머가 있습니다.');

//         this.t = setTimeout(function(){
//             console.log('1초뒤에 실행됩니다.')
//         },1000);
//     },
//     cancel : function(){
//         if (this.t) clearTimeout(this.t);
//         this.t =undefined;
//     }
// };

// // timer.run();

// timer.cancel();

//137. setInterval 

// let count =0;

// const timer = setInterval(() =>{
//     console.log(`${count++}번째 함수를 실행함.`);;
// },1000);

// clearInterval(timer);

//138 .Promise 이해하기 
// Promise는 객체로써 언젠가 완료될 일을 나타냄
// 완료되면 하나의 값을 결과로 반환하는데 실패하여 정상적인 값 대신 실패의 이유를 반환할 수 도 있음 
// Promise 객체의 상태 3가지 
// 1. 대기중 (Pending) : 아직 결과가 없는 상태를 의미함
// 2. 이행됨 (Fulfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태 
// 3. 거부됨 (rejected) : 비동기 처리가 실패한 상태 

// Promise 객체의 2가지 
// 1. then(onFulfilled, onReject) : 약속이 완료되었을때 호출될 함수들을 정의함. 
// 이때 첫번째인자로 전달되는 함수는 약속이 성공적으로 이행되었을 때 호출함 
// 두 번째로 전달된 함수는 거부되었을 때 호출. 두 전달인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해전달
// 2. catch(onReject): 약속이 거부되었을 때 호출될 함수 (onReject)를 등록함

function promiseForHomework(mustDo){ // 매개변수 mustDo(true/false)
    return new Promise((resolve, reject)=>{ // resolve와 reject 라는 매개변수를 가짐.
        // resolve는 약속을 성곡시킬 수 있는 함수를 호출시 결과를 인자로 전달함. 
        // reject 는 실패 처리를 위한 함수로 호출 시 실패이유를 함께 전달 할수 있다. 
        setTimeout(() => {
            console.log('doing homework');
            if(mustDo){resolve({result : 'homework-result'});
        } else { 
            reject (new Error('Too lazy!'));
        }
    }, 3000);
        });
    };

const promiseA = promiseForHomework(true);
console.log('promiseA create');

const promiseB = promiseForHomework();
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseB.then(v=>console.log(v)).catch(e=>console.error(e));
