import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-white text-center text-3xl mb-6">Password Generator</h1>
        <div className="relative mb-6">
          <input
            type="text"
            value={password}
            className="w-full py-2 px-4 bg-gray-700 text-white rounded-md outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="absolute right-0 top-0 bottom-0 bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center mb-6">
          <label className="mr-4 text-white text-xl">Length:</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="flex-1 cursor-pointer appearance-none bg-gray-700 h-1 rounded-md"
            onChange={(e) => setLength(e.target.value)}
          />
          <span className="ml-4">{length}</span>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="numberInput" className="text-xl text-white">Numbers</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="characterInput" className="text-xl text-white">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
