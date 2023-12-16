import json from '../../sermoes.json';

export function getData() {
  return json;
}

export function getByTitle(title: string) {
  return json.filter(data => data.title.includes(title));
}
