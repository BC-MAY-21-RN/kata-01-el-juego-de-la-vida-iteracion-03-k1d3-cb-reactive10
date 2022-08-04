/*
class NAME {
    
    Constructor (x,y)
    -Variables-
    this.variableName;
    -Metodos-
    metodo1 (){

    }
} 

metodos 
crear matriz
imprimir matriz

*/
class Matriz {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.matriz = [];
  }

  /*
  for(let i=0; i<R; i++){
      matrix[i]= new Array(C)
  }
   */
  // Creamos matriz de x, y
  crearMatriz() {
    for (let i = 0; i < this.rows; i++) {
      this.matriz[i] = new Array(this.columns);
    }
    return this.matriz;
  }

  /*
  for (let i = 0; i < matrix.length; i++) {
  //console.log(matrix[i].length);
  for(let j=0; j<matrix[i].length;j++){
    matrix[i][j]='.'
  }
  }
   */
  // Llenamos matriz de puntitos
  llenarMatriz() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matriz[i][j] = ".";
      }
    }
    return this.matriz;
  }
  /**
* 
for(let i=0; i<R; i++){
  let line= '';
  for (let j = 0; j < matrix[i].length; j++) {
      line += matrix[i][j] + ' '; 
  }
  console.log(line);
}
}} matriz 
*/
  imprimirMatriz() {
    for (let i = 0; i < this.matriz.length; i++) {
      let line = "";
      for (let j = 0; j < this.matriz[i].length; j++) {
        line += this.matriz[i][j] + " ";
      }
      console.log(line);
    }
    return "";
  }
  // coordenadas = [ [x,y] , [x,y] , [x,y]  ]

  fillLiveCells(cells) {
    cells.forEach((coordenada) => {
      this.matriz[coordenada[0]][coordenada[1]] = "*";
    });

    this.imprimirMatriz();
    return "";
  }

  siguienteGeneracion() {
    for (let y = 1; y < this.columns - 1; y++) {
      for (let x = 1; x < this.rows - 1; x++) {
        let num = this.countNeighbours(x, y);
        if (this.matriz[x][y] == ".") {
          if (num == 3) this.matriz[x][y] = "*";
        } else {
          if (num == 3 || num == 2) {
            this.matriz[x][y] = "*";
          } else {
            this.matriz[x][y] = ".";
          }
        }
      }
    }

    this.imprimirMatriz();
    return "";
  }

  /*countNeighbours(x, y) {
    var neighbours = 0;

    for (var i = -1; i < 1; i++) {
      for (var j = -1; j < 1; j++) {
        if (this.matriz[x + i][y + j] == "*" && (x != 0 && y != 0)) neighbours++;
      }
    }

    return neighbours;
  }
  */

  countNeighbours(x, y) {
    let neighbours = 0;
    neighbours += this.contarLados(x - 1, y - 1);
    neighbours += this.contarMedios(x, y);
    neighbours += this.contarLados(x - 1, y + 1);

    return neighbours;
  }

  contarLados(x, y) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.matriz[x][y] == "*") {
        count++;
      }
      x++;
    }
    return count;
  }

  contarMedios(x, y) {
    let count = 0;
    if (this.matriz[x - 1][y] == "*") {
      count++;
    }

    if (this.matriz[x + 1][y] == "*") {
      count++;
    }
    return count;
  }
}

module.exports = Matriz;
