let 탭버튼 = document.querySelectorAll('.tab-button')
let 탭컨텐츠 = document.querySelectorAll('.tab-content')

for(let i = 0 ; i < 탭버튼.length ; i++){
    탭버튼[i].addEventListener('click', function(){
        for(j=0; j < 탭버튼.length ; j++){
            탭버튼[j].classList.remove('orange');
            탭컨텐츠[j].classList.remove('show');
            }
            탭버튼[i].classList.add('orange');
            탭컨텐츠[i].classList.add('show');
        });
}

var car2 = { name : '소나타', price : [50000, 3000, 4000] } 
document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2.price[0]

let 선택 = document.querySelectorAll('.form-select');
선택[0].addEventListener('input', function(){
    if( 선택[0].value == '셔츠'){
        선택[1].classList.remove("form-hide");
    }
});

