import React, { useState } from 'react';

function Resume(props) {
  // const likeState = useState(0);
  // const like = likeState[0];
  // const setLike = likeState[1];
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
  }
  return (
    <div>
      <button onClick={clickLike}>like:{like}</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;