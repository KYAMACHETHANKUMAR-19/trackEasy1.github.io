
function getres(){
    const abc = localStorage.getItem("results-shedule");
    console.log(abc);
    // console.log(document.querySelector(".rightbody").innerHTML);
    const table21 = `
        <div id="showcase">
            <table id="firstTable">
                <thead>
                    <tr>
                        <td>&emsp;&emsp;Date&emsp;&emsp;</td>
                        <td>&emsp;&emsp;&emsp;&emsp;&emsp;Shedule/Results&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                        <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                    </tr>
                </thead>
                <tbody>
                    ${abc}
                </tbody>
            </table>
        </div>
    `;

    document.querySelector(".rightbody").innerHTML=table21;
}