import React from 'react'

export class ControlBoard extends React.Component {
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
		let tableArr = this.props.boardState[this.state.level - 1]
			.map((cellArr) => {
				const tableArr = cellArr.map((cell, idx) => {
					return (
						<div
							className={`table-cell ${cell.isAlive ? 'live' : 'dead'}`}
							key={idx}
							onClick={() => this.toggleCellState(cell)}
						></div>
					)
				})
				// tableArr.push(<br />)
				return tableArr
			})


		return (
			<div>
				<div>
					<button onClick={this.decreaseFloor}> -- </button>
					<button onClick={this.increaseFloor}> ++ </button>
				</div>
				{this.state.level}
				<div className="control-board-table">
					{tableArr}
				</div>
			</div>
		)
	}
}
