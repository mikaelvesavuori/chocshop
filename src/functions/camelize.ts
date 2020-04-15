/**
 * Camel-case transform a string
 *
 * @exports
 * @function
 * @param {string} str - The string which is to be camelcased
 * @returns {string} - The final string
 * @throws {errorCamelize} - When no string is provided
 */
export function camelize(str: string): string {
  if (!str) throw new Error('Error in camelize()!');

  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\\/g, '-')
    .replace(/\//g, '-')
    .replace(/\s+/g, '');
}
