import { useState } from 'react'
function Square({value, onSquareClick}) {
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

function Board() {


  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);

  

  // state split
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    // console.log(nextSquare);
    if (xIsNext) {
      nextSquare[i] = 'X';
    }else{
      nextSquare[i] = 'O';
    }
    // nextSquare[i] = xIsNext ? 'x' : 'o';
    setSquares(nextSquare);
    // state yang mengubah dari true ke flase(kuncinya disini)
    setXIsNext(!xIsNext);
  }


  const winner = calculateWinner(squares);
  console.log(winner);
  let status = '';
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }




  return (
    <>
    <div className="title">
      <h3>Simple Tic Tac Toe</h3>
    </div>
    <div className='board'>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    <div className='status'>{status}</div>
    </>
  )
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}


export default Board
//  44:28 : https://www.youtube.com/watch?v=Jom0uWnQEJk