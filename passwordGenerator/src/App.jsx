import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";
    
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, number, char, setPassword]);
  
  //useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator] )
  
  //useRef hook
    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(() => {
      
      window.navigator.clipboard.writeText(password)
    }, [password])
  
  


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg px-6 py-3 bg-gray-800 text-violet-500 ">
        <h1 className="text-3xl font-bold text-center py-2 text-white ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidde">
          <input
            type="text"
            value={password}
            placeholder="Password"
            name=""
            id=""
            readOnly
            className="w-full py-2 px-3 text-black "
            ref={passwordRef}
          />
          <button 
          className="bg-slate-200 py-2 px-3 text-lg "
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm justify-evenly gap-x-2 py-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length} </label>
          </div>
          <div className="flex items-center gap-1 ">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
