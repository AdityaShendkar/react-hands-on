import { useState,useCallback } from "react";

function App() {
    const [length, setlength] = useState(10)
    const [number, setnumber] = useState(false)
    const [char, setchar] = useState(false)
    const [password, setpassword] = useState("")

    const passwordGenerator = useCallback(fn, [])

  return (
    <>
      <h1 className="text-3xl font-bold text-center ">Password Generator</h1>
    </>
  );
}

export default App;
