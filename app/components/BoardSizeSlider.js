import React from 'react' //eslint-disable-line no-unused-vars

const _decreaseSize = (game) => {
	game.boardSize--
	game.buildBoard()
	console.log('board is ', game)
}
const _increaseSize = (game) => {
	game.boardSize++
	game.buildBoard()
	console.log('board is ', game)
}

export const BoardSizeSlider = (props) => {
	return (
		<div>
			{props.label}
			<button onClick={() => _decreaseSize(props.game)}>-</button>
			{props.game.boardSize}
			<button onClick={() => _increaseSize(props.game)}>+</button>
		</div>
	)
}
