# date-reviver

Date parser for JSON.parse.
Converts any string value in JSON which is compliant with the format of Date.toISOString() into Date object.

## Example

```
import dateReviver from '@grainrigi/date-reviver';

const json = '{ "date": "2020-05-30T00:27:14.068Z" }';

const obj = JSON.parse(json, dateReviver);

// obj.date.valueOf() === 1590798434068

```
