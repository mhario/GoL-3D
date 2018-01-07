import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'

// import { initGameview, drawBoard } from './logic/game'
// import { buildBoard } from './logic/board'
import { GameView } from './components/GameView'

ReactDOM.render (
	<GameView />,
	document.getElementById('main')
)
