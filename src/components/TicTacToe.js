import React, {useState} from 'react'
import EndGame from './EndGame';
import Square from './Square'

const INITIAL = "";
const X_PLAYER = "X"
const O_PLAYER = "O"
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const TicTacToe = () => {
    const [grid, setgrid] = useState(Array(9).fill(INITIAL));
    const [player, setPlayer] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isDraw, setIsDraw] =  useState (false)
    const [winCount, setWinCount] = useState({X: 0, O: 0 })

    const GameOver = () => {
        if(!isGameOver) {
            // Win check for "X"
            for(let i = 0; i <8; i++) {
                if(grid[winCombination[i][0]] === X_PLAYER &&
                   grid[winCombination[i][1]] === X_PLAYER &&
                   grid[winCombination[i][2]] === X_PLAYER  )
                   {
                       setIsGameOver(true)
                       setWinCount({...winCount, X: winCount.X +1})
                       console.log("X wins")
                       return
                   }
            }

            // win check for 'O'

            for(let i = 0; i <8; i++) {
                if(grid[winCombination[i][0]] === O_PLAYER &&
                   grid[winCombination[i][1]] === O_PLAYER &&
                   grid[winCombination[i][2]] === O_PLAYER  )
                   {
                       setIsGameOver(true)
                       console.log("O wins")
                       setWinCount({...winCount, O: winCount.O +1})
                       return
                   }
            }



            // Draw game check
             
            if(!grid.includes(INITIAL)){
                setIsDraw(true)
                setIsGameOver(true)
                console.log("DRAW")
            }
        }
    }
    const reStartBtn = () => {
        setgrid(Array(9).fill(INITIAL))
        setIsGameOver(false)
        setIsDraw(false)
    }


    const clearHistory = () => {
        setWinCount({ X: 0, O: 0});
        reStartBtn();
        
    }
    GameOver();

    const clickHandler = (id) => {
      
        setgrid(grid.map((item, index) => {
            if(index === id) {
                if (player) {
                    return X_PLAYER
                } else {
                    return O_PLAYER
                }
            } else {
                return item
            }
        }))
        setPlayer(!player)

    }

 
    return (
        <div>
            <span className="win-history">
                X's Wins: {winCount.X}
                <br/>
                O's Wins: {winCount.O}

            </span>
            {isGameOver &&
            <EndGame 
            winCount = {winCount}
            reStartBtn= {reStartBtn}
            player = {player}
            isDraw ={isDraw}
            clearHistory={clearHistory}
           

             /> }
       
        <Square clickedArray = {grid} clickHandler= {clickHandler} />
        </div>
    )
}

export default TicTacToe
