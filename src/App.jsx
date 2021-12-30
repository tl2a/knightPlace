import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './App.css'

function App() {
  const [size, setsize] = useState(8);
  const [row, setrow] = useState(2);
  const [col, setcol] = useState(2);

  const [moves, setmoves] = useState(new Set());
  
  const printKnights = () => {
    const move = new Set();
    move.clear();

    // 8 valid moves
    (row-2>=0 && col+1>=0 && row-2<size && col+1<size) && move.add(JSON.stringify([row-2, col+1]));
    (row-1>=0 && col+2>=0 && row-1<size && col+2<size) && move.add(JSON.stringify([row-1, col+2]));
    (row+1>=0 && col+2>=0 && row+1<size && col+2<size) && move.add(JSON.stringify([row+1, col+2]));
    (row+2>=0 && col+1>=0 && row+2<size && col+1<size) && move.add(JSON.stringify([row+2, col+1]));
    (row+2>=0 && col-1>=0 && row+2<size && col-1<size) && move.add(JSON.stringify([row+2, col-1]));
    (row+1>=0 && col-2>=0 && row+1<size && col-2<size) && move.add(JSON.stringify([row+1, col-2]));
    (row-1>=0 && col-2>=0 && row-1<size && col-2<size) && move.add(JSON.stringify([row-1, col-2]));
    (row-2>=0 && col-1>=0 && row-2<size && col-1<size) && move.add(JSON.stringify([row-2, col-1]));
    // console.log(move);
    setmoves(move);
  }

  useEffect(() => {
    printKnights();
  }, [row,col])

  useEffect(() => {
    // console.log(moves);
  }, [moves])

  return (
    <div className="App">
        { moves.size!==0 && <h2 align='center' className='m-0 p-2 text-success'><b>{moves.size} Possible Moves</b></h2> }
      <div className='chessboard'>
        {moves.size!=0 && Array.from(Array(size),(o, i) =>
        <div key={i} className='mb-2'>
          {Array.from(Array(size),(p, j) =>
          <div key={j} r={j} c={i} onClick={() => {setrow(j); setcol(i);}}><div className={"box text-white " + (moves.has(JSON.stringify([j,i])) && ' bg-primary')} >
            {(JSON.stringify([row,col])==JSON.stringify([j,i]) && ' bg-secondary') && <div className='bg-success w-100 h-100'></div>}
            </div></div>
          )}
        </div>)}
      </div>
    </div>
  )
}

export default App
