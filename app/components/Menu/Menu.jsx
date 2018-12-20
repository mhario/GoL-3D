import React from 'react'
import { Game, calcTurn } from '../../logic/game'
import TabBar from './TabBar.jsx'
import { PlayBar } from './PlayBar.jsx'

export class Menu extends React.Component {
	constructor() {
		super()
		this.state = {
			playing: false,
			firstGame: new Game('game'),
			turnTimer: 250
		}

		this.state.firstGame.buildBoard()

		this.togglePlay = this._togglePlay.bind(this)
		this.stepTurn = this._stepTurn.bind(this)
		this.runTurns = this._runTurns.bind(this)
		this.rebuild = this._rebuild.bind(this)
		this._increaseSize = this._increaseSize.bind(this)
		this._decreaseSize = this._decreaseSize.bind(this)
	}

	_togglePlay() {
		this.setState({ playing: !this.state.playing })
		this.runTurns()
	}

	_runTurns () {
		setTimeout( () => {
			if (this.state.playing) {
				this.stepTurn()
				this.runTurns()
			}
		}, this.state.turnTimer )
	}

	_stepTurn() {
		calcTurn(this.state.firstGame.board)
		this.forceUpdate()
	}

	_rebuild() {
		this.state.firstGame.buildBoard()
		this.forceUpdate()
	}

	_decreaseSize (game) {
		game.boardSize--
		game.buildBoard()
		this.forceUpdate()
	}
	_increaseSize (game) {
		game.boardSize++
		game.buildBoard()
		this.forceUpdate()
	}

	render() {
		return (
			<div className="menu">
				<PlayBar
					togglePlay={ this.togglePlay }
					isPlaying={ this.state.playing }
					stepTurn={ this.stepTurn }
				/>
				<div className="board-size-row">
					<div
						className="board-size">
						<span
							className="label">
							Size
						</span>
						<button 
							disabled={this.state.playing}
							onClick={() => {
								this._decreaseSize(this.state.firstGame)}}
						>-</button>
						<span
							className="current-size">
							{ this.state.firstGame.boardSize }
						</span>
						<button
							disabled={this.state.playing}
							onClick={() => {
								this._increaseSize(this.state.firstGame)}}
						>+</button>
					</div>
					<button
						className="rebuild-btn"
						disabled={this.state.playing}
						onClick={() => { this.rebuild() }}>
						<img src="./images/diceIcon.svg" />
					</button>
				</div>
				<TabBar
					game={ this.state.firstGame }
					playing={ this.state.playing }
				/>
			</div>
		)
	}
}
