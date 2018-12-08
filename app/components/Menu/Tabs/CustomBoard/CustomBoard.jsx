import React from 'react'
import CustomTable from './CustomBoardTable.jsx'

export class CustomBoard extends React.Component {
	_increaseFloor() {
		const cubeSize = this.props.game.board.length
		const atMaxLevel = this.state.level < cubeSize
		this.setState({ level: atMaxLevel ? this.state.level + 1 : this.state.level })
	}
	_decreaseFloor() {
		this.setState({ level: this.state.level > 1 ? this.state.level - 1 : 1 })
	}
	_toggleCellState(cell) {
		cell.toggleState()
		this.forceUpdate()
	}
	_getSliderPosition() {
		const level = this.state.level
		let styleString
		if (level === 1) {
			styleString = '0'
		} else {
			const positionPercent = level / this.props.game.boardSize
			styleString = `calc(${positionPercent * 100}% - 50px)`
		}
		return {
			left: styleString
		}
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
						<button
							style={ this._getSliderPosition() }>
							{ this.state.level }
						</button>
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
