import { Game } from '../logic/game'

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom' // eslint-disable-line no-unused-vars

export const GameView = () => {
	let firstGame = new Game('game')
	firstGame.buildBoard({min: 2, max: 3, birth: 3, boardSize: 8, seedRatio: .3})
	return <h1>menu goes here</h1>
}
