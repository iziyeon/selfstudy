document.querySelector('.navbar-toggler').addEventListener('click',function(){
    document.querySelector('.list-group').classList.toggle('show');
    })

document.querySelector('.login-button').addEventListener('click', function(){
        document.querySelector('.black-bg').classList.add('show-modal');
    })

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show-modal');
})




document.querySelector('.btn-primary').addEventListener('click', function(event){

    let 이메일입력값 = document.querySelectorAll('.form-control')[0].value;
    let 비밀번호입력값 = document.querySelectorAll('.form-control')[1].value;

    if(이메일입력값 == ""){
       alert('이메일을 입력하세요.');
       event.preventDefault();
    }else if( 비밀번호입력값 == ""){
        alert('비밀번호를 입력하세요.');
        event.preventDefault();
        return
    }else if(비밀번호입력값.length < 6){
        alert('비밀번호를 6자 이상으로 입력하세요.');
        event.preventDefault();
        return;
    }
    
    if( !/\S+@\S+\.\S+/.test(이메일입력값)){
        alert('이메일 형식으로 입력해주세요.')
        event.preventDefault();
        }else if(!/[A-Z]/.test(이메일입력값)){
        event.preventDefault();
        alert('영어 대문자를 1개 이상 포함해주세요.')
        event.preventDefault();
        }
    });

let clickCount = 0;
document.querySelector('.badge').addEventListener('click', function(){
    clickCount++;
    if(clickCount % 2 === 0){
        document.querySelector('.badge').innerHTML = "Dark 🔄"
    }else{
        document.querySelector('.badge').innerHTML = "Light 🔄"
    }
})

let timer = 5;
let setinterval시행 = setInterval(남은초확인, 1000)

function 남은초확인(){
    timer--
    document.querySelector('.남은초').innerHTML = timer;
    if(timer == 0){
        clearInterval(setinterval시행)
        setTimeout(이벤트삭제, 0);
    }
}
function 이벤트삭제(){
    document.querySelector('.alert-danger').style.visibility = "hidden";
}



let 지금보이는사진 = 0;
let 슬라이드버튼 =  document.querySelectorAll('.slide-btn')

for(let i = 0; i < 슬라이드버튼.length; i++){
    슬라이드버튼[i].addEventListener('click', function(){
        document.querySelectorAll('.slide-container')[0].style.transform = `translateX(-${i * 100}vw)`;
        지금보이는사진 = i;
    })
   }

document.querySelector('.next').addEventListener('click', function(){
    지금보이는사진++
    if(지금보이는사진 >= 슬라이드버튼.length){
        지금보이는사진 = 0;
    }
    document.querySelectorAll('.slide-container')[0].style.transform = `translateX(-${지금보이는사진 * 100}vw)`;
});

document.querySelector('.prev').addEventListener('click', function(){
    if(지금보이는사진 == 0){
        지금보이는사진 = 슬라이드버튼.length -1
    }else{
        지금보이는사진--
    }
    document.querySelectorAll('.slide-container')[0].style.transform = `translateX(-${지금보이는사진 * 100}vw)`;
});

let 검은배경 = document.querySelector('.black-bg')

검은배경.addEventListener('click', function(e){
    if(e.target == 검은배경) //e.target사용하지 않으면 이벤트버블링 발생함.
        {검은배경.classList.remove('show-modal');
        }
})