import React from 'react' // eslint-disable-line no-unused-vars
import { SettingsSlider } from './SettingsSlider.jsx'

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
				<SettingsSlider
					label="Life Ratio"
					value={this.props.game.seedRatio}
					changeHandler={this.setBoardSize}
				/>
				<SettingsSlider
					label="Min. to Live"
					value={this.props.game}
					changeHandler={this.setBoardSize}
				/>
				<SettingsSlider
					label="Max. to Live"
					value={this.props.game}
					changeHandler={this.setBoardSize}
				/>
			</div>
		)
	}
}
