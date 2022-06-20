import React, { useState } from 'react';

const Greeting = () => {
  const [message, setMessage] = useState("여기를 주목하세요");

  const onMouseEnter = () => {
    console.log("안녕하세요!");
    setMessage("hello!");
  };

  const onMouseLeave = () => {
    console.log("안녕히가세요");
    setMessage("bye!");
  };

  return (
    <div>
      <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        여기에 마우스를 올려보세요!
      </p>
      <div>{message}</div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;