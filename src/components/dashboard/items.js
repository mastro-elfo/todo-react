import { v1 as uuid } from "uuid";

const storage = localStorage;

export function load() {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(storage.getItem("items")) || []);
    } catch (err) {
      reject(err);
    }
  });
}

export function create(value) {
  return Promise.resolve({
    value,
    time: +new Date(),
    complete: false,
    uid: uuid(),
    deleted: false
  });
}

export function save(items) {
  return new Promise((resolve, reject) => {
    try {
      storage.setItem("items", JSON.stringify(items));
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}
