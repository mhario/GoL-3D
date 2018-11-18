import React from 'react'
import { Game, calcTurn } from '../logic/game'
import TabBar from './Tabs/'
import { PlayBar } from './PlayBar'
import { BoardSizeSlider } from './BoardSizeSlider'

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
		this.rebuild = this._rebuild.bind(this)
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
		this.forceUpdate()
	}

	_rebuild() {
		this.state.firstGame.buildBoard()
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
					<BoardSizeSlider
						boardSize={ this.state.firstGame.boardSize }
						game={ this.state.firstGame }/>	
					<button
						className="rebuild-btn"
						onClick={() => { this.rebuild() }}>
						<img src="./images/diceIcon.svg" />
					</button>
				</div>
				<TabBar
					game={ this.state.firstGame }
				/>
			</div>
		)
	}
}
