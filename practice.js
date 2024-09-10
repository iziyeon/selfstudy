// array에서 이름을 찾아주는 함수를 만들고 있습니다.
// 함수 안에 파라미터로 이름을 집어넣으면
// 그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다. 
// 어떻게 만들면 될까요? 

let 출석부 = ['흥민', '영희', '철수', '영희', '재석'];

function 이름찾기(이름){
  for(let i = 0 ; i < 출석부.length ; i++){
   if(출석부[i] == 이름){
      console.log('있어요')
      return;
   }
  }
  console.log('없어요');
}

이름찾기('영희');
이름찾기('민수');

// Q. 철수는 구구단을 외우지 못하는 관계로
// 자바스크립트를 이용해 구구단을 2단부터 9단까지 콘솔창에 출력하고 싶어졌습니다.

function 구구단(){
for(let i = 2 ; i < 10 ; i++){
   for(let j = 1; j < 10 ; j ++){
     console.log(`${i} x ${j} = ${i*j}`)
}
}}

구구단()