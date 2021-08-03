# serializer

一个简单的 JavaScript 的对象序列化器实现

## usage

```js
const { serialize, deserialize } = require('./index');

const obj = {
  a: 'a',
  b: {
    c: () => {
      console.log('c method');
    }
  },
};

const serializedObj = serialize(obj);
console.log(serializedObj);
// {"obj":{"a":"a","b":{}},"methods":{"b":{"c":"() => {\r\n      console.log('c method');\r\n    }"}}}

const deserializedObj = deserialize(serializedObj);
deserializedObj.b.c();
// -> 'c method'
```
