import React from 'react'
import { Game, calcTurn } from '../logic/game'
import TabBar from './Tabs/'

export class Menu extends React.Component {
	constructor() {
		super()
		this.state = {
			playing: false,
			firstGame: new Game('game')
		}

		this.state.firstGame.buildBoard()

		this.togglePlay = this._togglePlay.bind(this)
		this.stepTurn = this._stepTurn.bind(this)
		this.runTurns = this._runTurns.bind(this)
	}

	_togglePlay() {
		const isPlaying = this.state.playing
		this.setState({ playing: !isPlaying })
		this.runTurns()
	}

	_runTurns () {
		setTimeout( () => {
			if (this.state.playing) {
				this.stepTurn()
				this.runTurns()
			}
		}, 250 )
	}

	_stepTurn() {
		calcTurn(this.state.firstGame.board)
	}

	render() {
		return (
			<div className="menu">
				<h1>Game Of Life</h1>
				<h3>Mark Hario</h3>
				<div className="menu-top-row">
					<button
						className={`btn-play ${this.state.playing && 'playing'}`}
						onClick={this.togglePlay}>
						{
							this.state.playing
								? 'Playing!'
								: 'Play'
						}
					</button>
					<button
						onClick={this.stepTurn}>
						Step Turn
					</button>
					
					<button
						onClick={this.state.firstGame.buildBoard}>
						Rebuild
					</button>
				</div>
				<TabBar
					game={this.state.firstGame}
				/>
			</div>
		)
	}
}
