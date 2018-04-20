import React from 'react'
import { Game } from '../logic/game'

export class Menu extends React.Component {

	render() {
		let firstGame = new Game('game')
		firstGame.buildBoard()

		return (
			<div className="menu">
				<h1>GameOfLife 3D</h1>
				<h2>Mark Hario</h2>

				<button
					onClick={firstGame.buildBoard()}
				>Rebuild</button>


			</div>
		)
	}
}
