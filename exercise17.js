/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  // Code here
  const positions = {
    'UL': [-1, -1],
    'U': [-1, 0],
    'UR': [-1, 1],
    'L': [0, -1],
    'R': [0, 1],
    'DL': [1, -1],
    'D': [1, 0],
    'DR': [1, 1]
  }
  const rows = grid.length;
  const columns = grid[0].length
  let result = grid.map(row => 
          row.map(value => 0));
  

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      for (let position in positions) {
        let newRow = i + positions[position][0]
        let newCol = j + positions[position][1]
        if ((newRow >= 0 && newRow <= rows - 1) && (newCol >= 0 && newCol <= columns - 1) && grid[newRow][newCol] === true) {
          result[i][j]++;
        }
      }
    }
  }

  return result
}

// NOTA IMPORTANTE: El objetivo que marca el enunciado y los test asociados no están alineados. 
// El enunciado pide comprobar para las celdas sin bombas pero los tests comprueban todas las celdas (solución actual).
// En el caso de que se quisiese comprobar lo que pide el enunciado, el map habría que modificarlo a value ? 1 : 0
