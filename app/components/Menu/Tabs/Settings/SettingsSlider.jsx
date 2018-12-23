import React from 'react' //eslint-disable-line no-unused-vars

export class SettingsSlider extends React.Component {
	render() {
		return (
			<div className="slider">
				<label>
					{this.props.label}
				</label>
				<button className="down">
				-
				</button>
				<div className="slider-bar">
					<input
						type="range"
						min="0"
						step="0.05"
						value={this.props.value}
						max="1"
						onChange={(e) => {
							this.props.changeHandler(e)}}
					/>
				</div>
				<button className="up">
				+
				</button>
			</div>
		)
	}
}
