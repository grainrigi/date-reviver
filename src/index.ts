const reISO = /^(?:[+-]\d{6}|\d{4})-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

export default function dateReviver(key: string, value: any): any {
  if(typeof value === 'string') {
    // ざっくりチェック
    if((value.length === 24 || value.length === 27) && value[value.length - 1] === 'Z') {
      if(reISO.exec(value)) return new Date(value);
    }
  }
  return value;
}