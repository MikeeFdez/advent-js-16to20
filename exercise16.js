/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  // Code here
  let arr = s.split("")

  let i = 0;
  while (i < arr.length) {
    if (arr[i] === arr[i +1]) {
      arr.splice(i, 2)
      console.log(arr)
      i = 0 
    } else { 
      i++ 
    }
  }

  return arr.join("")
}
