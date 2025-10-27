import { useState, useCallback } from "react";

function App() {
  const [length, setlength] = useState(10);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("Random");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, number, char, setpassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg px-5 py-3 bg-gray-800 text-violet-500 ">
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
          />
          <button className="bg-slate-200 py-2 px-3 text-lg ">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 py-5">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={6}
            max={32}
            value={length}
            className="cursor-pointer "
            onChange={() => {}}
            />
            <label htmlFor="">Length:{length} </label>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
