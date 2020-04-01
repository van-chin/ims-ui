/**
 *
 * @param string
 * @param upper
 * @return string
 */
function camel(string, upper = false) {
  const lowerCamel = string.replace(/-(\w)/g, (match, pos) => {
    return pos.toUpperCase();
  });
  return upper
    ? `${lowerCamel.charAt(0).toUpperCase()}${lowerCamel.slice(1)}`
    : lowerCamel;
  // if(upper) {
  //     lowerCamel = ;
  // }
  // return lowerCamel;
}

export default camel;
