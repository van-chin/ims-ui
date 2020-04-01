/**
 *
 * @param obj
 * @param key
 */
function delve(obj, key) {
  return key.split(".").forEach(p => (obj = obj && obj[p])), obj;
}

export default delve;
