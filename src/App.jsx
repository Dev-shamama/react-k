import { useEffect, useState } from "react";
const App = () => {
  const [count, setCount] = useState([]);

  const getData = async () => {
    const res = await fetch("http://api.github.com/users");
    const result = await res.json();
    setCount(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button>Button</button>
      {count.map((i, index) => {
        return <li key={index}>{i.login}</li>;
      })}
    </>
  );
};

export default App;
