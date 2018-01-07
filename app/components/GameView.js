import { initGameview, drawBoard } from '../logic/game'
import { buildBoard } from '../logic/board'
import { Game } from '../logic/game'

import React from 'react'
import ReactDOM from 'react-dom'

export const GameView = () => {
	let firstGame = new Game('game1')
	firstGame.initGameview()
	firstGame.board = buildBoard({min: 2, max: 3, birth: 3, boardSize: 5, seedRatio: .5})
	firstGame.drawBoard()
	return <h1>fail</h1>
}
