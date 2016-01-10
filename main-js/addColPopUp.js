//Function To Display Popup
function fnAddColumn() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function closePopUp(){
document.getElementById('abc').style.display = "none";
}

//Pop-Up for adding columns
function fnAddColumnPopup(){
	var scolumnName = document.getElementById('columnName').value;
    localStorage.setItem('colName',scolumnName);
    var scolumnType = document.getElementById('datatype');
    var sType = scolumnType.options[scolumnType.selectedIndex].text;
    localStorage.setItem('colType',sType);
    var sEditable=document.getElementById('editable');
	var sEdit = sEditable.options[sEditable.selectedIndex].text;
	localStorage.setItem('edit',sEdit);
    (function(){
        var table = document.getElementById("tableColData");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "<input type='checkbox'>";
        cell2.innerHTML = localStorage.getItem('colName');
        cell3.innerHTML = localStorage.getItem('colType');
        cell4.innerHTML = localStorage.getItem('edit');
    })();
}