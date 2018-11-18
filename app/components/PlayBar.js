import React from 'react' //eslint-disable-line no-unused-vars

export const PlayBar = (props) => {

	return (
		<div className="play-bar">
			<button
				className={`btn-play ${props.isPlaying && 'playing' || '' }`}
				onClick={props.togglePlay}>
				{
					props.isPlaying
						? 'Playing!'
						: 'Play'
				}
			</button>
			<button
				className="btn-step"
				onClick={props.stepTurn}>
				Step Turn
			</button>
		</div>
	)
}


