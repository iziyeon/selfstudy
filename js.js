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
    if(document.querySelectorAll('.form-control')[0].value === ""){
       alert('아이디를 입력하세요');
       event.preventDefault();
    }else if(document.querySelectorAll('.form-control')[1].value === ""){
        alert('비밀번호를 입력하세요');
        event.preventDefault();
        return
    }

    if(document.querySelectorAll('.form-control')[1].value.length < 6){
        alert('비밀번호를 6자 이상으로 입력하세요');
        event.preventDefault();
        return;
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

