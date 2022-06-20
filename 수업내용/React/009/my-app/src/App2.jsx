import './App2.css'

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours()
  const min = today.getMinutes()
  const sec = today.getSeconds()


  return (
    <div>
      <h1 className='title1'>안녕, 라이캣! 1호</h1>
      <h1>안녕, 라이캣 2호!</h1>
      <p className='empty'>내가 무슨말을 써도 넌 못볼거야</p>
      <div className='cont-date'>
        <h1 className='year'>년 : {year}</h1>
        <h1>월/일 : {month}월/{day}일</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div>
    </div>
  )
}

export default App;
