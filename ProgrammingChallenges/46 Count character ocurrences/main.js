function createColumn(text) {
    var col = document.createElement("td");
    textNode = document.createTextNode(text);
    col.appendChild(textNode);
    return col;
}

function fillRow(row, col1, col2) {
    var col = createColumn(col1);
    row.appendChild(col)
    col = createColumn(col2);
    row.appendChild(col);
}

function fillHeader(table, col1, col2) {
    var tableHeader = document.createElement("th");
    var textNode = document.createTextNode(col1);
    tableHeader.appendChild(textNode);
    table.appendChild(tableHeader);
    tableHeader = document.createElement("th");
    textNode = document.createTextNode(col2);
    tableHeader.appendChild(textNode);
    table.appendChild(tableHeader);
}

function getStats() {
    var textBox = document.getElementById("textBox");
    var text = textBox.value;
    textBox.value = ""
    if (text === "") {
        alert("no text given");
        return;
    }
    var lastTable = document.getElementById("tempTable");
    if (lastTable !== null) {
        document.getElementById("lastResults").appendChild(lastTable.cloneNode(true));
        lastTable.remove();
    }
    var letterMapper = {};
    for (var i = 0; i < text.length; i++) {
        if (!(text[i] in letterMapper)) {
            letterMapper[text[i]] = 0;
        }
        letterMapper[text[i]] += 1;
    }
    var statsHolder = document.getElementById("statistics");
    const table = document.createElement("table");
    table.id = "tempTable"
    fillHeader(table, "Character", "Frequency")
    keys = [];
    Object.keys(letterMapper).forEach(key => {
        keys.push(key)
    });
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        row = document.createElement("tr");
        value = letterMapper[keys[i]]
        fillRow(row, keys[i], value);
        table.appendChild(row);
    }
    statsHolder.appendChild(table);
}