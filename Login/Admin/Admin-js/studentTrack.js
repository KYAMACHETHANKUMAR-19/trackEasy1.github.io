// function loadhtml(id,filename){
//     let xhttp;
//     let element =document.getElementById("content");
//     let file = filename;

//     if(file){
//         xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function(){
//             if(this.readyState ==4){
//                 if(this.status ==200) {element.innerHTML = this.responseText;}
//                 if(this.status == 404) {element.innerHTML="<h1>Page notfound</h1>";}
//             }
//         }
//         xhttp.open("GET", `templates/${file}`,true);
//         xhttp.send();
//         return;
        
//     }
// }


function parentsDetail(){
    const a = localStorage.getItem("list1");
    let arrA = a.split(',');
    // console.log(arrA);
    // for(let i=0;i<arrA.length;i++){
    //     console.log(arrA[i]);
    // }
    const b = localStorage.getItem("list2");
    let arrB = b.split(',');
    // console.log(arrA);
    // for(let i=0;i<arrB.length;i++){
    //     console.log(arrB[i]);
    // }
    let abc = 
    `<div id="matter12">
        <span>Fathers Name :${arrA[0]}</span><br>
        <span>Phone number :${arrA[1]}</span><br>
        <span>Mothers Name :${arrA[2]}</span><br>
        <span>Phone number :${arrA[3]}</span><br>
        <span>Address      :${arrA[4]}</span><br>
        <span>Fathers Email :${arrB[0]}</span><br>
        <span>Office Phone number :${arrB[1]}</span><br>
        <span>Mothers Email :${arrB[2]}</span><br>
        <span>Office Phone number :${arrB[3]}</span><br>
        <span>Permanent Address :${arrB[4]}</span><br></br>
    </div>`;
    document.getElementById("content").innerHTML=abc;
}

function studentAttendance(){
    const attenStu =  localStorage.getItem("Attendance");
    document.getElementById("content").innerHTML=
    `<div id="badass">
        ${attenStu}
    </div>`;
}