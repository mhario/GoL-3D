import React from 'react' // eslint-disable-line no-unused-vars

const ControlTable = props => {
	return (
		<table className="control-board-table">
			<tbody>
				{
					props.boardState[props.level - 1]
						.map((row, index) => {
							return (
								<ControlTableRow
									cellRow={row}
									toggleCellState={props.toggleCellState}
									key={index}
								/>
							)
						})
				}
			</tbody>
		</table>
	)
}

const ControlTableRow = props => {
	const cellWidthPct = (1 / props.cellRow.length) * 100
	const styleObj = {width: `calc(${cellWidthPct}% - 2px)`}
	return (
		<tr>
			{
				props.cellRow.map(cell => {
					return (
						<td
							className={`table-cell
								${cell.isAlive ? 'live' : 'dead'}`}
							onClick={() => { props.toggleCellState(cell)} }
							key={cell.uuid}
							style={styleObj}
						></td>
					)
				})
			}
		</tr>
	)
}

export default ControlTable
