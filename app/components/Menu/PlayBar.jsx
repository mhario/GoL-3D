import React from 'react' //eslint-disable-line no-unused-vars
var classNames = require('classnames')

export const PlayBar = (props) => {

	return (
		<div className="play-bar">
			<button
				className={classNames('btn-play',
					{ 'playing': props.isPlaying }
				)}
				onClick={props.togglePlay}>
				{
					props.isPlaying
						? 'Playing!'
						: 'Play'
				}
			</button>
			<button
				className={classNames('btn-step',
					{ 'disabled': props.isPlaying }
				)}
				disabled={props.isPlaying}
				onClick={props.stepTurn}>
				Step Turn
			</button>
		</div>
	)
}


