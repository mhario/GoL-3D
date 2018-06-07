import React from 'react'
import { Game } from '../logic/game'
import { TabBar } from './TabBar'

export class Menu extends React.Component {
	constructor() {
		super()
	}


	render() {
		let firstGame = new Game('game')
		firstGame.buildBoard()

		return (
			<div className="menu">
				<h1>Game Of Life</h1>
				<h3>Mark Hario</h3>

				<button
					onClick={firstGame.buildBoard}
				>Rebuild</button>
				<TabBar
					game={firstGame}
				/>
			</div>
		)
	}
}
