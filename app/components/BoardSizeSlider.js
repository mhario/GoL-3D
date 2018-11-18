import React from 'react' //eslint-disable-line no-unused-vars

const _decreaseSize = (game) => {
	game.boardSize--
	game.buildBoard()
}
const _increaseSize = (game) => {
	game.boardSize++
	game.buildBoard()
}

export const BoardSizeSlider = (props) => {
	console.log('rendering', props.game.boardSize)
	return (
		<div
			className="board-size">
			<span
				className="label">
				Size
			</span>
			<button onClick={() => _decreaseSize(props.game)}>-</button>
			<span className="current-size">
				{ props.game.boardSize }
			</span>
			<button onClick={() => _increaseSize(props.game)}>+</button>
		</div>
	)
}
