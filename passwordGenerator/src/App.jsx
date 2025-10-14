import { useState } from "react";

function App() {
    const [length, setlength] = useState(10)
    const [number, setnumber] = useState(false)
    const [char, setchar] = useState(false)
    const [password, setpassword] = useState("")

  return (
    <>
      <h1 className="text-3xl font-bold text-center ">Password Generator</h1>
    </>
  );
}

export default App;
