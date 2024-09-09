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