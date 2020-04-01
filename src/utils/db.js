import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage(`ims`);
const db = low(adapter);

db.defaults({
  sys: {},
  database: {}
}).write();

export default db;
