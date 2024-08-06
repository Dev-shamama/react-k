import { useState } from "react";
import Header from "./Header";
const App = () => {
  const obj = [
    { id: 1, name: "ali" },
    { id: 2, name: "mouse" },
    { id: 3, name: "laptop" },
  ];

  //   const obj = {
  //     name: "ali",
  //     gender: "male",
  //     occupation: { first: "java", second: "python" },
  //   };

  const [count, setCount] = useState(obj);
//   console.log(count);
//   const button = () => {
//     setCount(null);
//   };

  return (
    <>
      <Header zzz={count} />

      {/* <button onClick={button}>Button</button> */}
    </>
  );
};

export default App;
