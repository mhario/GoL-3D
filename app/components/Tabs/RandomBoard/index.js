import React from 'react' // eslint-disable-line no-unused-vars
import { BoardLifeSlider } from '../../BoardLifeSlider'

export class RandomBoard extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				Board Settings
				{/* <button onClick={this.props.game.buildBoard}>
					Rebuild
				</button>
				<BoardSizeSlider label="Board Size" game={this.props.game}/> */}
				<BoardLifeSlider label="Board life ratio" game={this.props.game}/>
			</div>
		)
	}
}
