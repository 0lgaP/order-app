useRef in custom component

1. import useRef, add a const variable holding the useRef(), add ref={} pointing to that variable

```sh
import React, { useRef } from "react";
```
```sh
const amountInputRef = useRef();
```
```sh
<CustomComponent ref={amountInputRef} />
```

2. in the custom component, wrap the Component function in a React.forwardRef

```sh
const CustomComponent = React.forwardRef((props, ref)=>{
  return (<div ref={ref} >{props.some.variable}</div>)
})
```
3. in the custom component, access the value in the ref by calling refName.current.value, this value will always be a string, so convert it if you need number

```sh
  const amountInputRef = useRef();
  const enteredAmount = amountInputRef.current.value
```

# bind
bind pre-configures a function for future execution && alows you to pre-configure the argument that function will recieve when it's being executed

```sh
someFunctionHandler.bind(null, item.id)
```

# deploy
video [link](https://www.youtube.com/watch?v=5I37iVCDUTU)
run npm deploy
