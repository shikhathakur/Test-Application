//Function To Display Popup
function fnAddColumn() {
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function closePopUp() {
    document.getElementById('abc').style.display = "none";
}
if (document.getElementById('columnName') != null) {
    var scolumnName = document.getElementById('columnName').text;
}

if (document.getElementById('datatype') != null) {
    var scolumnType = document.getElementById('datatype');
    var sType = scolumnType.options[scolumnType.selectedIndex].text;
}

if (document.getElementById('editable') != null) {
    var sEditable = document.getElementById('editable');
    var sEdit = sEditable.options[sEditable.selectedIndex].text;
}

function fnAddColumnPopup() {
    var oTable = document.getElementsByTagName('table');
    var otRow = document.createElement('tr');
    oTable[0].appendChild(otRow);
    var otData1 = document.createElement('td');
    otRow.appendChild(otData1);
    var oInput = document.createElement('input');
    otData1.appendChild(oInput);
    oInput.setAttribute('type', 'checkbox');
    oInput.setAttribute('value', 'true');
    var otData2 = document.createElement('td');
    otRow.appendChild(otData2);
    otData2 = scol;
    var otData3 = document.createElement('td');
    otRow.appendChild(otData3);
    otData3 = sType;
    var otData4 = document.createElement('td');
    otRow.appendChild(otData4);
    otData4 = sEdit;
}
