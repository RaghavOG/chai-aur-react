import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleDoubleClick = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied ${color} to clipboard`);
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  // const isLightColor = (color) => {
  //   const hex = color.replace('#', '');
  //   const r = parseInt(hex.substring(0, 2), 16);
  //   const g = parseInt(hex.substring(2, 4), 16);
  //   const b = parseInt(hex.substring(4, 6), 16);
  //   const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  //   return brightness > 155;
  // };

  // const textColorStyle = {
  //   color: isLightColor(color) ? 'black' : 'white'
  // };

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* <div className="flex flex-col items-center justify-center py-10 bg-transparent" style={textColorStyle}> */}
      <div className="flex flex-col items-center justify-center py-10 bg-transparent" >
        <h1 className="text-4xl font-bold mb-4">Background Changer</h1>
        <p className="text-lg mb-2">Click on the color to change the background color</p>
        <p className="text-lg">Double-click on the color to copy the color code</p>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            onDoubleClick={() => handleDoubleClick("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => setColor("yellow")}
            onDoubleClick={() => handleDoubleClick("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button
            onClick={() => setColor("green")}
            onDoubleClick={() => handleDoubleClick("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("black")}
            onDoubleClick={() => handleDoubleClick("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >Black</button>
          <button
            onClick={() => setColor("#C23373")}
            onDoubleClick={() => handleDoubleClick("#C23373")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#C23373" }}
          >Pink</button>
          <button
            onClick={() => setColor("navy")}
            onDoubleClick={() => handleDoubleClick("navy")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "navy" }}
          >Navy</button>
          <button
            onClick={() => setColor("#FFC100")}
            onDoubleClick={() => handleDoubleClick("#FFC100")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFC100" }}
          >Gold</button>
          <button
            onClick={() => setColor("brown")}
            onDoubleClick={() => handleDoubleClick("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >Brown</button>
          <button
            onClick={() => setColor("aquamarine")}
            onDoubleClick={() => handleDoubleClick("aquamarine")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "aquamarine" }}
          >Aquamarine</button>
          <button
            onClick={() => setColor("orange")}
            onDoubleClick={() => handleDoubleClick("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >Orange</button>
          <button
            onClick={() => setColor("seagreen")}
            onDoubleClick={() => handleDoubleClick("seagreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "seagreen" }}
          >Seagreen</button>
          <button
            onClick={() => setColor("lightblue")}
            onDoubleClick={() => handleDoubleClick("lightblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lightblue" }}
          >Lightblue</button>
          <button
            onClick={() => setColor(getRandomColor())}
            onDoubleClick={() => handleDoubleClick(color)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: color }}
          >
            Random Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
