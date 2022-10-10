const gameLayoud = () => {
    let rows = 10;
    let columns = 20;

    let html = "<table>";
    for (let countRows = 0; countRows < rows; countRows++) {
        html += "<tr>";
        for (let countColumns = 0; countColumns < columns; countColumns++) {
            html += `<td> ${countRows}, ${countColumns}`;
            html += "<td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    let container = document.getElementById("main-container");
    container.innerHTML = html;
};

export default gameLayoud;
