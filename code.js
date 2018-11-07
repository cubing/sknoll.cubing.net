function CellChoice(){

    var piece = document.getElementsByName('PieceType');

    var x = document.getElementById("frm");
    var text = "";
    var i;
    for (i = 7; i < x.length-1 ;i++) {
        text += x.elements[i].value+" ";
    }
    alert(text);
    var columns = [
  [UBR,C],
  [UBL,B],
  //add more columns
  //then add rows
];
}
var excelIO = new GC.Spread.Excel.IO();
var excelUrl = $("#importUrl").val();
function ImportFile() {
    var excelUrl = "./Full 3Style Comm Series + more.xlsx";

    var oReq = new XMLHttpRequest();
    oReq.open('get', excelUrl, true);
    oReq.responseType = 'blob';
    oReq.onload = function () {
        var blob = oReq.response;
        excelIO.open(blob, LoadSpread, function (message) {
            console.log(message);
        });
    };
    oReq.send(null);
}
function LoadSpread(json) {
    jsonData = json;
    workbook.fromJSON(json);

    workbook.setActiveSheet("Revenues (Sales)");
}
