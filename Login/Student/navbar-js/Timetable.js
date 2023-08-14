function timetable(){
    const tableData = localStorage.getItem("tableData");
    console.log(tableData);
    document.querySelector('tbody').innerHTML=tableData;
    
}