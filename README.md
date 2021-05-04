# Transferable function
Serialize and deserialize function or lambda to json available plane object. 

- typescript available
- does not use `eval`

# Installation
```npm i transferable-function```

# Description

This utils extract function body and arg names to plane object named Transferable function like this:
```js
import {serializeFn} from 'transferable-function' 

const transferable = serializeFn((a, b) => return a + b)
// transferable: 
// {
//     body: 'return a + b',
//     argNames: ['a', 'b']
// }

fetch('pass/fn/path', {
  method: 'POST',
  body: JSON.stringify(transferable)
})
```

Further you can pass this object by json and convert back

```js
import {deserializeFn} from 'transferable-function' 

app.post('pass/fn/path', (req, res) => {
  const customFn = deserializeFn(req.body)
  res.send(customFn(1, 2)) // send 3
})
```
