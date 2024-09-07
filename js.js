document.getElementsByClassName('navbar-toggler')[0].addEventListener('click',function(){
    document.getElementsByClassName('list-group')[0].classList.toggle('show');
    })

document.querySelector('.login-button').addEventListener('click', function(){
        document.querySelector('.black-bg').classList.add('show-modal');
    })

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show-modal');
})

document.querySelector('.navbar-toggler-icon').addEventListener('click', function(){
    document.querySelector('.login-button').style.display = 'none';
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
document.querySelectorAll('.slide-1')[0].addEventListener('click', function(){
    document.querySelectorAll('.slide-container')[0].style.transform = "translateX(0vw)";
})

document.querySelectorAll('.slide-2')[0].addEventListener('click', function(){
    document.querySelectorAll('.slide-container')[0].style.transform = "translateX(-100vw)";
})

document.querySelectorAll('.slide-3')[0].addEventListener('click', function(){
    document.querySelectorAll('.slide-container')[0].style.transform = "translateX(-200vw)";
})

let 지금보이는사진 = 1;
document.querySelector('.next').addEventListener('click', function(){
    if(지금보이는사진 == 1){
        document.querySelectorAll('.slide-container')[0].style.transform = "translateX(-100vw)"
        지금보이는사진++;
    }else if(지금보이는사진 == 2){
        document.querySelectorAll('.slide-container')[0].style.transform = "translateX(-200vw)"
        지금보이는사진++;
    }else if(지금보이는사진 == 3){
        document.querySelectorAll('.slide-container')[0].style.transform = "translateX(0vw)";
        지금보이는사진 = 지금보이는사진 - 2
    }
    }
)
