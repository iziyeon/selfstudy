//Q1. 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
//(1초 == 1000ms 입니다)
console.log(시간(1,30))

function 시간(분, 초){
 return ((분 * 60 * 1000) + (초 * 1000))
}

console.log(시간(2,10))

// Q2. 가격을 파라미터로 입력하면 10% 할인된 가격을 뱉는 함수를 만들어봅시다.
// 근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다. 
// 주의사항은 가격으로 10.3 이런거 넣으면 소수로 인한 오차도 나올 수도 있으니 오차는 깔끔하게 처리해야 합니다.

function 할인가격(가격, 구매여부){
   let 낼돈 = 가격 * 0.9
   if(구매여부 == true){
      낼돈 = 낼돈 - 1.5
   }
   return console.log(parseFloat(낼돈).toFixed(2))
}

console.log(할인가격(70, false))
console.log(할인가격(10, true))
