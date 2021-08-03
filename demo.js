const { serialize, deserialize } = require('./index');

const obj = {
  a: 'a',
  b: {
    c: () => {
      console.log('d method');
    }
  },
};

const serializedObj = serialize(obj);
console.log(serializedObj);
// {"obj":{"a":"a","b":{}},"methods":{"b":{"c":"() => {\r\n      console.log('d method');\r\n    }"}}}

const deserializedObj = deserialize(serializedObj);
deserializedObj.b.c();
// -> 'd method'