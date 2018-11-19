import React from 'react' //eslint-disable-line no-unused-vars

export class BoardLifeSlider extends React.Component {
	_decreaseLife (game) {
		game.seedRatio -= 0.05
		game.buildBoard()
		// TODO remove these forceUpdates by refactoring the data into props which will be reactive
		this.forceUpdate()
	}
	_increaseLife (game) {
		game.seedRatio += 0.05
		game.buildBoard()
		this.forceUpdate()
	}

	constructor(props) {
		super(props)

		this.decreaseLife = this._decreaseLife.bind(this)
		this.increaseLife = this._increaseLife.bind(this)
	}
	render() {
		return (
			<div>
				{this.props.label}
				<button onClick={() => this.decreaseLife(this.props.game)}>-</button>
				{this.props.game.seedRatio}
				<button onClick={() => this.increaseLife(this.props.game)}>+</button>
			</div>
		)
	}
}
