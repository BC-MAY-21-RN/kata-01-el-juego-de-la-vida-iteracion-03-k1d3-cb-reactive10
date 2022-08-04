const { loadPartialConfig } = require("@babel/core");
const Matrix = require("../models/matrix");
let matriz = new Matrix(2, 2);

test("matrix is filled with .", () => {
  var empty = false;
  const m = new Matrix(2, 2);
  m.crearMatriz();
  const matriz = m.llenarMatriz();

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      if (matriz[i][j] != ".")
        empty = true;
    }
  }
  expect(empty).toBe(false);
});



test(`should be initializated with 4 columns and 3 rows`, () => {
  const m = new Matrix(4, 3);
  expect(m.columns).toBe(4);
  expect(m.rows).toBe(3);
});


test('should fill the matrix with nine dead cells ', () => {
  const m = new Matrix(3,3)
  m.crearMatriz()
  const matrixFilled = m.llenarMatriz()
  let count = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrixFilled[i][j] == '.') {
        count++
      }
    }
  }
  expect(count).toBe(9)
})

test('should insert alive cells', () => { 
  let aliveCells = [[1,1],[2,3],[2,4]]
  const m = new Matrix(8,8)
  m.crearMatriz()
  m.llenarMatriz()
  let count = 0
  const matrixFilled = m.fillLiveCells(aliveCells)
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (matrixFilled[i][j] == '*') {
        count++
      }
    }
  }
  expect(count).toBe(3)
 })



