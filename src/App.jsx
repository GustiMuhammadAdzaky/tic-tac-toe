import { useState } from 'react'
function Square() {
  const [value, setValue] = useState('');
  return <button className='square' onClick={handleClick}>{value}</button>

  function handleClick() {
    setValue('x');
  }
}

function Board() {

  return (
    <div className='board'>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </div>
  )
}

export default Board
//  17:30 : https://www.youtube.com/watch?v=Jom0uWnQEJk