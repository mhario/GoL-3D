
import { initGameview, drawBoard } from '../logic/game'
import { buildBoard } from '../logic/board'

import React from 'react'
import ReactDOM from 'react-dom'

export const GameView = () => {
	initGameview('main')
	let board = buildBoard({min: 2, max: 3, birth: 3, boardSize: 5, seedRatio: .5})
	// console.log('inside of gameview ', board);
	drawBoard(board)
	return <h1>fail</h1>
}
