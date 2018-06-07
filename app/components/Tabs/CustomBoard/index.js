import React from 'react'
import CustomTable from './CustomBoardTable'

export class CustomBoard extends React.Component {
	_increaseFloor() {
		const cubeSize = this.props.boardState.length
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
				<div>
					<button onClick={this.decreaseFloor}> -- </button>
					{this.state.level}
					<button onClick={this.increaseFloor}> ++ </button>
				</div>
				<CustomTable
					boardState={this.props.boardState}
					level={this.state.level}
					toggleCellState={this.toggleCellState}
				/>
			</div>
		)
	}
}
