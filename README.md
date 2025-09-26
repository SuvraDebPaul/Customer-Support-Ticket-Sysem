# What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows us to write HTML-like code inside JavaScript, making the UI structure easier to understand and maintain.

## 👉 Why it’s used:

- Makes code more readable and declarative.
- Lets you combine HTML + JavaScript logic in one place.
- React uses JSX to create virtual DOM elements efficiently.

### Example:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const name = "PH";

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is my first JSX example.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

# What is the difference between State and Props?

## 👉 Props:

Props (short for properties) are read-only inputs passed from a parent component to a child component in React, used to configure or customize the child component.

- Passed from parent to child component.
- Read-only → child cannot change props.
- Used to configure a component.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## 👉 State:

State is a mutable data object managed within a React component that determines the component’s behavior and how it renders, allowing the UI to update dynamically.

- **Managed inside** a component (created with `useState` in functional components).
- **Mutable** → component can update its state.
- Used to handle **dynamic data** and **UI changes.**

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

### ✅ Key Difference:

- **Props** = external, fixed values → like function arguments.

- **State** = internal, changeable values → like variables inside a function.

# What is the useState hook, and how does it work?

## useState Hook:

- Its a react Hook that lets us add state to functional components.
- It is used to store dynamic values that can change over time and trigger re-render when updated.

## Syntax

```javascript
const [state, setState] = useState(initialValue);
```

- `state` → current value of the state
- `setState` → function to update the state
- `initialValue` → the default value of the state when the component mounts

# How can you share state between components in React?

### Here’s a detailed explanation of sharing state between components in React:

## 1. Lifting State Up

- When two or more components need to share the same state, then we can move the state to their closest common parent.

- The parent manages the state and passes it down via props.

```javascript
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
}

function ChildA({ count }) {
  return <h1>Count: {count}</h1>;
}

function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  );
}
```

### ✅ Explanation:

- `Parent` holds the state `count`.
- `ChildA` reads the state.
- `ChildB` updates the state using `setCount`.
- Both children share the same state seamlessly.

## 2. Using Context API

- For deeply nested components, lifting state up can become cumbersome.

- React Context lets us share state globally without passing props manually at every level.

```javascript
const CountContext = createContext();

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <ChildA />
      <ChildB />
    </CountContext.Provider>
  );
}

function ChildA() {
  const { count } = useContext(CountContext);
  return <h1>Count: {count}</h1>;
}

function ChildB() {
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  );
}
```

### ✅ Explanation:

- `CountContext.Provider` makes state available to any nested component.
- `useContext` hook lets children access and update the shared state.

## 3. Using State Management Libraries

- For large applications, you can use libraries like:

       - Redux
       - Zustand
       - Recoil

- These let multiple components read and update shared state from a centralized store.

### Summary

| Method                   | When to Use                                 |
| ------------------------ | ------------------------------------------- |
| Lifting State Up         | Few components, shallow hierarchy           |
| Context API              | Deeply nested components, global-like state |
| State Management Library | Large apps, complex state interactions      |

# How is event handling done in React?

## 1. Basics of Event Handling

### React handles events similar to HTML, but with some differences:

- Event names are camelCase (e.g., `onClick` instead of `onclick`)
- We can pass a function as the event handler, not a string.

```javascript
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### ✅ Explanation:

- `onClick` is the React event.
- `handleClick` is the function called when the button is clicked.

## 2. Using Inline Functions

You can also use an **inline arrow function:**

```jsx
<button onClick={() => alert("Clicked!")}>Click Me</button>
```

- Useful for passing arguments to the handler:

```jsx
<button onClick={() => handleClick(5)}>Click Me</button>
```

## 3. Synthetic Events

- React wraps native browser events in **SyntheticEvent** for **cross-browser compatibility.**

- Synthetic events behave like normal DOM events but work the same across all browsers.

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 4. Passing Parameters to Event Handlers

### Use arrow functions or bind:

```jsx
<button onClick={() => sayHello("PH")}>Greet</button>

// or
<button onClick={sayHello.bind(this, "PH")}>Greet</button>
```

### Key Points

1. Event names are **_camelCase._**
2. Handlers are **_functions_**, not strings.
3. Use **_SyntheticEvent_** to access event info (`e.target`, `e.preventDefault()`).
4. To pass arguments, use **_arrow functions_** or `bind()`.
