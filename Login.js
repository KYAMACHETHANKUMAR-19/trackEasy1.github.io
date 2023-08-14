function login(){
    a=["demo",123];
    email = document.querySelector('#Email').value;
    pass = document.querySelector('#Password').value;
    if(email==a[0] && pass==123){
        alert('correct login');
        window.location.href="./Login/Student/Home.html"
    }else{
        alert('incorrect login');
    }
}