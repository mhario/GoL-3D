import { Game } from '../logic/game'

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom' // eslint-disable-line no-unused-vars

export const GameView = () => {
	let firstGame = new Game('game1')
	firstGame.buildBoard({min: 2, max: 3, birth: 3, boardSize: 8, seedRatio: .5})
	return <h1>fail</h1>
}
