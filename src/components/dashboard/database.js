import { DBNAME, Init, Search } from "../../database";

export default function search(query) {
  return Init(DBNAME).then(db => Search(db, query, null, false));
}
