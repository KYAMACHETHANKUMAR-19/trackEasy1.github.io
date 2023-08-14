function tabdata(){
    day=document.querySelector('#day').value;
    ped1=document.querySelector('#ped1').value;
    ped2=document.querySelector('#ped2').value;
    ped3=document.querySelector('#ped3').value;
    ped4=document.querySelector('#ped4').value;
    ped5=document.querySelector('#ped5').value;
    ped6=document.querySelector('#ped6').value;
    ped7=document.querySelector('#ped7').value;
    
    const tbodyEl = document.querySelector('tbody');
    tbodyEl.innerHTML+=`
        <tr>
            <td>${day}</td>
            <td>${ped1}</td>
            <td>${ped2}</td>
            <td>${ped3}</td>
            <td>${ped4}</td>
            <td>${ped5}</td>
            <td>${ped6}</td>
            <td>${ped7}</td>
            <td><button class="delbtn">Delete</button></td>
        </tr>
    `;
}
//Del rows
const tableEl= document.querySelector('table');
function onDelRow(e){
    if(!e.target.classList.contains('delbtn')){
        return;
    }else{
        // alert('clicked the btn');
        const btn = e.target;
        btn.closest("tr").remove();
    }
}
tableEl.addEventListener('click',onDelRow);

function send(){
    let tableData = document.querySelector("tbody").innerHTML;
    console.log(tableData);
    localStorage.setItem("tableData",tableData);

}