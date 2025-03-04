/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  // Escribe tu código aquí
  // Lo primero que tenemos que hacer es pasar ambos arrays a objetos contando el número de veces que aparece.
  const receivedCount = received.reduce((accumulator, gift) => {
    accumulator[gift] = (accumulator[gift] || 0) + 1;
    return accumulator
  }, {});
  const expectedCount = expected.reduce((accumulator, gift) => {
    accumulator[gift] = (accumulator[gift] || 0) + 1;
    return accumulator
  }, {});

  console.log(receivedCount)
  console.log(expectedCount)

  // Ahora tenemos que comparar ambos objetos para obtener el resultado.
  // Primer comprobamos los que faltan:
  const missing = {}
  for (let gift in expectedCount) {
    if (!receivedCount[gift] || receivedCount[gift] < expectedCount[gift]) {
      missing[gift] = expectedCount[gift] - (receivedCount[gift] || 0)
    }
  } 

  // Ahora comprobamos los extra:
  const extra = {}
  for (let gift in receivedCount) {
    if (!expectedCount[gift] || expectedCount[gift] < receivedCount[gift]) {
      extra[gift] = receivedCount[gift] - (expectedCount[gift] || 0)
    }
  }


  return {
    missing,
    extra
  }
}
