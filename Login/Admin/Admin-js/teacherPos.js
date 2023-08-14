// function atten(){
//     // alert("Currently not available");
//     document.getElementById("content").innerHTML=localStorage.getItem("");
// }
function atten(){
    const attenStu =  localStorage.getItem("teacherAttendance");
    document.getElementById("content").innerHTML=
    `<div id="badass">
        ${attenStu}
    </div>`;
}

function shares(){
    alert("Currently not available");
}