import json from '../../sermoes.json';
import {IData} from '../Interfaces/IData';

export function getData(): IData[] {
  return json as IData[];
}

export function getByTitle(title: string): IData[] | [] {
  return json.filter(data => data.title.includes(title)) as IData[] | [];
}
