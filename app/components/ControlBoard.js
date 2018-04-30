import React from 'react'

export class ControlBoard extends React.Component {

	constructor(props) {
		super(props)
		this.state = { level: 0 }
	}
	render () {
		let tableArr = this.props.boardState[this.state.level].map((cellArr) => {
			return cellArr.map((cell, idx) => {
				return (
					<div className="table-cell" key={idx} style={{width: 50}} onClick={() => cell.toggleState()}>  {cell.isAlive ? '.' : 'X'}  </div>
				)
			})
		})

		return (
			<div>
				<div>
					<button onClick={() => this.setState({ level: this.state.level ? this.state.level - 1 : 0 })}> -- </button>
					<button onClick={() => this.setState({ level: this.state.level < tableArr.length ? this.state.level + 1 : this.state.level})}> ++ </button>
				</div>
				{this.state.level}
				<div className="control-board-table">
					{tableArr}
				</div>
			</div>
		)
	}
}
