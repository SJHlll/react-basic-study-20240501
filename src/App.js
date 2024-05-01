import logo from './logo.svg';
import './App.css';
import NoName from './NoName';

function App() {

  const $h2 = <h2>ㅎㅇ</h2>;

  return (
    <>
    <NoName />
      <div className='App'>
        <h1>ㅎㅇ</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' placeholder='ㅂㅂ'/>
        <p>
          반가워<br />
          나는나야
        </p>
      </div>
    </>
  );
}

export default App;
