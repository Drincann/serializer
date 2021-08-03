function serialize(obj) {
  function serializeFun(obj, methods) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        methods[key] = {};
        serializeFun(obj[key], methods[key]);
        continue;
      }

      if (typeof obj[key] === 'function') {
        methods[key] = obj[key].toString();
      }
    }
  }

  const methods = {};
  serializeFun(obj, methods);
  return JSON.stringify({ obj, methods })
}

function deserialize(serializedObj) {
  if (typeof serializedObj === 'string') {
    serializedObj = JSON.parse(serializedObj);
    if (!(serializedObj.obj && serializedObj.methods)) { return null; }
  }

  function deserializeFun(obj, methods) {
    for (const key in methods) {
      if (typeof methods[key] === 'object') {
        deserializeFun(obj[key], methods[key]);
        continue;
      }

      if (typeof methods[key] === 'string') {
        eval(`obj[key] = ${eval('methods[key]')}`);
      }
    }
  }


  deserializeFun(serializedObj.obj, serializedObj.methods)
  return serializedObj.obj;
}

module.exports = {
  serialize,
  deserialize,
}