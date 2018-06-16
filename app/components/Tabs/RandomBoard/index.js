import React from 'react' // eslint-disable-line no-unused-vars
import { BoardSizeSlider } from '../../BoardSizeSlider'
import { BoardLifeSlider } from '../../BoardLifeSlider'

export class RandomBoard extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				Random board
				<button onClick={this.props.game.buildBoard}>
					Rebuild
				</button>
				<BoardSizeSlider label="Board Size" game={this.props.game}/>
				<BoardLifeSlider label="Board life ratio" game={this.props.game}/>
			</div>
		)
	}
}
