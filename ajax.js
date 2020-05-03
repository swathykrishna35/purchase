function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var products = JSON.parse(this.responseText);

            var col = [];//var col = [];
            debugger;
            for (var i = 0; i < products.length; i++) {
                for (var key in products[i]) {
                    //if (products.indexof(key) === -1) {
                    if ((String(col).indexOf(key)) === -1) {
                        col.push(key);
                    }
                }
            }
            var table = document.createElement("table");
            var tr = table.insertRow(-1);

            debugger;
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            for (var i = 0; i < products.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tableCell = tr.insertCell(-1);
                    tableCell.innerHTML = products[i][col[j]];
                }
            }
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        }
    }
    xhttp.open("GET", "groc.json", "true");
    xhttp.send();
}