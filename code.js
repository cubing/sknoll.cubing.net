function cellChoice() {
  var buffer = document.getElementById('buf').value;
  var piece2 = buffer + document.getElementById('piece2').value;
  var piece3 = document.getElementById('piece3').value;

  var Row = document.getElementById(piece2);
  var Cells = Row.getElementsByTagName('td');
  var comm;
  switch (buffer) {
    case "DF":
      switch (piece3) {
        case "BU":
          comm = Cells[1].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RU":
          comm = Cells[2].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FU":
          comm = Cells[3].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LU":
          comm = Cells[4].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UF":
          comm = Cells[5].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RF":
          comm = Cells[6].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LF":
          comm = Cells[7].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RD":
          comm = Cells[8].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BD":
          comm = Cells[9].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LD":
          comm = Cells[10].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BR":
          comm = Cells[11].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DR":
          comm = Cells[12].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FR":
          comm = Cells[13].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UR":
          comm = Cells[14].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BL":
          comm = Cells[15].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UL":
          comm = Cells[16].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FL":
          comm = Cells[17].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DL":
          comm = Cells[18].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DB":
          comm = Cells[19].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RB":
          comm = Cells[20].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UB":
          comm = Cells[21].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LB":
          comm = Cells[22].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
      }
      break;
    case "UF":
      switch (piece3) {
        case "UR":
          comm = Cells[2].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UB":
          comm = Cells[1].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UL":
          comm = Cells[3].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FR":
          comm = Cells[4].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FD":
          comm = Cells[5].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FL":
          comm = Cells[6].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DF":
          comm = Cells[7].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DR":
          comm = Cells[8].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DB":
          comm = Cells[8].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DL":
          comm = Cells[10].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RB":
          comm = Cells[11].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RD":
          comm = Cells[12].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RF":
          comm = Cells[13].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RU":
          comm = Cells[14].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LB":
          comm = Cells[15].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LU":
          comm = Cells[16].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LF":
          comm = Cells[17].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LD":
          comm = Cells[18].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BD":
          comm = Cells[19].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BR":
          comm = Cells[20].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BU":
          comm = Cells[21].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BL":
          comm = Cells[22].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
      }
      break;
    case "UFR":
      switch (piece3) {
        case "ULB":
        case "UBL":
          comm = Cells[2].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "URB":
        case "UBR":
          comm = Cells[1].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "ULF":
        case "UFL":
          comm = Cells[3].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FLU":
        case "FUL":
          comm = Cells[4].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FRD":
        case "FDR":
          comm = Cells[5].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FLD":
        case "FDL":
          comm = Cells[6].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DLF":
        case "DFL":
          comm = Cells[7].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DRF":
        case "DFR":
          comm = Cells[8].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DRB":
        case "DBR":
          comm = Cells[9].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DLB":
        case "DBL":
          comm = Cells[10].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RBU":
        case "RUB":
          comm = Cells[11].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RBD":
        case "RDB":
          comm = Cells[12].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RFD":
        case "RDF":
          comm = Cells[13].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LBD":
        case "LDB":
          comm = Cells[14].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LBU":
        case "LUB":
          comm = Cells[15].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LFU":
        case "LUF":
          comm = Cells[16].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LFD":
        case "LDF":
          comm = Cells[17].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BLD":
        case "BDL":
          comm = Cells[18].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BRD":
        case "BDR":
          comm = Cells[19].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BRU":
        case "BUR":
          comm = Cells[20].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BLU":
        case "BUL":
          comm = Cells[21].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        default:
          comm = "The setup you gave was invalid";
          document.getElementById('Comm').innerHTML = comm;
      }
      break;

    case "UBL":
      switch (piece3) {
        case "UFR":
        case "URF":
          comm = Cells[2].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "URB":
        case "UBR":
          comm = Cells[1].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "ULF":
        case "UFL":
          comm = Cells[3].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FUL":
        case "FLU":
          comm = Cells[4].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FRU":
        case "FUR":
          comm = Cells[5].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FRD":
        case "FDR":
          comm = Cells[6].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FLD":
        case "FDL":
          comm = Cells[7].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DFL":
        case "DLF":
          comm = Cells[8].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DRF":
        case "DFR":
          comm = Cells[9].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DBR":
        case "DRB":
          comm = Cells[10].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DBL":
        case "DLB":
          comm = Cells[11].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RBU":
        case "RUB":
          comm = Cells[12].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RDB":
        case "RBD":
          comm = Cells[13].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RFD":
        case "RDF":
          comm = Cells[14].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RFU":
        case "RUF":
          comm = Cells[15].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LBD":
        case "LDB":
          comm = Cells[16].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LFU":
        case "LUF":
          comm = Cells[17].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LDF":
        case "LFD":
          comm = Cells[18].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BDL":
        case "BLD":
          comm = Cells[19].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BRD":
        case "BDR":
          comm = Cells[20].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BUR":
        case "BRU":
          comm = Cells[21].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        default:
          comm = "The setup you gave was invalid";
          document.getElementById('Comm').innerHTML = comm;
      }
      break;
  }
}
