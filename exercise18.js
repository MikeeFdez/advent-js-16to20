/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  // Pasamos nuestra agenda a un objeto ordenado. Lo primero es establecer las regular expressions:
  // const regexp = /<([^<>]*)>/gi;
  const regexpName = /<([a-zA-Z\s]+)>/g;
  const regexpNumber = /\+\d{1,2}-\d{3,4}-\d{3,4}-\d{3,4}/g;

  // A continuación, separamos la agenda por saltos de línea y ya empezamos a rellenar nuestra agenda correcta.
  const agendaLines = agenda.split("\n");
  const correctAgenda = []

  // A través de un bucle hacemos el proceso.
  for (let i = 0; i < agendaLines.length; i++) {
    let name = agendaLines[i].match(regexpName)[0].replace(/<|>/g, "");
    let phoneNumber = agendaLines[i].match(regexpNumber)[0];
    let address = agendaLines[i].replace(regexpName, "").replace(regexpNumber, "").trim();
    correctAgenda.push({name,address,phoneNumber})
  }

  // Ahora lo único que queda es hacer al búsqueda por número de teléfono:

  let result = correctAgenda.filter(line => line.phoneNumber.includes(phone))
  return result.length === 1 ? { name: result[0].name, address: result[0].address } : null;
}
