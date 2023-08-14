function homeworkD(){
    // console.log('i am not done');
    var ls = localStorage.getItem("homework1");
    // console.log('i am done');
    // alert("hello");
    document.querySelector("tbody").innerHTML=ls;
}