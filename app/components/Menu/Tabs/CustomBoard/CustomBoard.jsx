import React from 'react'
import CustomTable from './CustomBoardTable.jsx'

export class CustomBoard extends React.Component {
	_increaseFloor() {
		const cubeSize = this.props.game.board.length
		const atMaxLevel = this.state.level < cubeSize
		this.setState({ level: atMaxLevel
			? this.state.level + 1 : this.state.level })
		this.forceUpdate()
	}
	_decreaseFloor() {
		this.setState({ level: this.state.level > 1
			? this.state.level - 1 : 1 })
		this.forceUpdate()
	}
	_toggleCellState(cell) {
		cell.toggleState()
		this.forceUpdate()
	}
	setBoardSize(e) {
		// must force type, comes in as string
		const boardSize = Number(e.target.value)
		this.setState({level: boardSize})
		this.forceUpdate()
	}

	constructor(props) {
		super(props)
		this.state = { level: 1 }

		this.toggleCellState = this._toggleCellState.bind(this)
		this.increaseFloor = this._increaseFloor.bind(this)
		this.decreaseFloor = this._decreaseFloor.bind(this)
	}

	render () {
		return (
			<div>
				<div className="slider">
					<button
						className="down"
						onClick={ this.decreaseFloor }>
						--
					</button>
					<div className="slider-bar">
						<input
							type="range"
							min="1"
							value={this.state.level}
							max={this.props.game.boardSize}
							onChange={(e) => {
								this.setBoardSize(e)}}
						/>
					</div>
					<button
						className="up"
						onClick={ this.increaseFloor }>
						++
					</button>
				</div>
				<CustomTable
					boardState={ this.props.game.board }
					level={ this.state.level }
					toggleCellState={ this.toggleCellState }
				/>
			</div>
		)
	}
}
