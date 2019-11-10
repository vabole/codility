export function solution(array) {
  let map = new Map();
  for ( let integer of array) {
    if (map.has(integer)) {
      map.delete(integer);
    } else {
      map.set(integer);
    }
  }

  return [...map.keys()][0];
}
