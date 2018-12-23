import React from 'react' // eslint-disable-line no-unused-vars

export class Settings extends React.Component {
	_setBoardSize (e) {
		const value = e.target.value
		this.props.game.seedRatio = value
		this.props.game.buildBoard()
		this.forceUpdate()
	}
	
	constructor(props) {
		super(props)
		this.setBoardSize = this._setBoardSize.bind(this)
	}
	render() {
		return (
			<div className="settings">
				Board Settings

				<div className="slider">
					<label>
						Life Ratio
					</label>
					<button className="down">
					-
					</button>
					<div className="slider-bar">
						<input
							type="range"
							min="0"
							step="0.05"
							value={this.props.game.seedRatio}
							max="1"
							onChange={(e) => {
								this.setBoardSize(e)}}
						/>
					</div>
					<button className="up">
					+
					</button>
				</div>
			</div>
		)
	}
}
