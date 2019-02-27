function cellChoice() {
  var buffer = document.getElementById('buf').value;
  var piece2 = buffer+document.getElementById('piece2').value;
  var piece3 = document.getElementById('piece3').value;

  var Row = document.getElementById(piece2);
  var Cells = Row.getElementsByTagName('td');
  var comm;
  switch (buffer) {
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
    case "UFR" :
      switch (piece3) {
        case "UBL":
          comm = Cells[2].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UBR":
          comm = Cells[1].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "UFL":
          comm = Cells[3].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FUL":
          comm = Cells[4].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FDR":
          comm = Cells[5].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "FDL":
          comm = Cells[6].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DFL":
          comm = Cells[7].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DFR":
          comm = Cells[8].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DBR":
          comm = Cells[9].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "DBL":
          comm = Cells[10].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RUB":
          comm = Cells[11].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RDB":
          comm = Cells[12].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "RDF":
          comm = Cells[13].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LDB":
          comm = Cells[14].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LUB":
          comm = Cells[15].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LUF":
          comm = Cells[16].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "LDF":
          comm = Cells[17].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BDL":
          comm = Cells[18].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BDR":
          comm = Cells[19].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BUR":
          comm = Cells[20].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        case "BUL":
          comm = Cells[21].innerHTML;
          document.getElementById('Comm').innerHTML = comm;
          break;
        default:
          alert("The setup you gave was invalid");
      }
    }
}
