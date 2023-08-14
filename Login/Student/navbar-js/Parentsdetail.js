function dataChangea(){
    const fname = document.querySelector("#fname").value;
    const fnum = document.querySelector("#fphone").value;
    const mname = document.querySelector("#mname").value;
    const mnum = document.querySelector("#mphone").value;
    const add1 = document.querySelector("#address").value;

    var l1=[fname,fnum,mname,mnum,add1];
    localStorage.setItem("list1",l1);
    alert(localStorage.getItem("list1"));

}

function dataChangeb(){
    let fmail = document.querySelector("#fmail").value;
    let fonum = document.querySelector("#fophone").value;
    let mmail = document.querySelector("#mmail").value;
    let monum = document.querySelector("#mophone").value;
    let padd = document.querySelector("#paddress").value;

    var l2=[fmail,fonum,mmail,monum,padd];
    localStorage.setItem("list2",l2);
    alert(localStorage.getItem("list2"));
    
}