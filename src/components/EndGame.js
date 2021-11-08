import React from 'react'

const EndGame = ({reStartBtn, winCount , clearHistory, player, isDraw }) => {
    return (
        <div className="end-game-screen">
            {!isDraw && <span className="win-text">{player ? "O won":"X won"}</span>}
           {isDraw && <span className="win-text">DRAW GAME</span>}

           <span className="win-history">
               X's WINS: {winCount.X}
               <br/>
               O's WINS: {winCount.O}
          </span>
          

          <button 
          className="btn"
          onClick={reStartBtn}>
              RESTART GAME
          </button>
          <button 
            className="btn"
            onClick={clearHistory}>
              CLEAR HISTORY
          </button>
        </div>
    )
}

export default EndGame;
