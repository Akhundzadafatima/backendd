import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState([]);
  const GetData = async () => {
    const res = await axios.get("http://localhost:5000/products");
    console.log(res?.data);
    setCount(res?.data);
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      {count.map((elem) => {
        return (
          <div>
            <p>{elem.image}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
