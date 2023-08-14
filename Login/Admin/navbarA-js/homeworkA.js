// const tableEl=document.querySelector("tbody").innerHTML;
function submit(){
    const tableEl=document.querySelector("tbody");
    const date= document.querySelector("#date").value;
    const homework = document.querySelector("#homework1").value;
    
    // adding data to table
    const a = `
        <tr>
            <td>${date}</td>
            <td>${homework}</td>
            <td><button class="delbtn">Delete</td>
        </tr>
    `;
    tableEl.innerHTML+=a;
}
// del rows 
const tableEl= document.querySelector('table');
function deleteText(e){
    if(!e.target.classList.contains('delbtn')){
        return;
    }else{
        // alert('clicked the btn');
        const btn = e.target;
        btn.closest("tr").remove();
    }
}
tableEl.addEventListener('click',deleteText);

// homework sending buton 
function sendHomework(){
    // alert("homework sent sucessfully!");
    const a =document.querySelector("tbody").innerHTML;
    localStorage.setItem("homework1",a);
}
