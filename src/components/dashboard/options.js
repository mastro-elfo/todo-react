const storage = localStorage;

function _id(key) {
  return `opt-${key}`;
}

export function set(key, value) {
  storage.setItem(_id(key), value);
}

export function get(key, parse = v => v) {
  return parse(storage.getItem(_id(key)));
}
