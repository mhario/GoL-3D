import React from 'react'

const ControlTable = props => {
	return (
		<table>
			{
				props.boardState[props.level - 1]
					.map(row => {
						return <ControlTableRow cellRow={row} toggleCellState={props.toggleCellState}/>
					})
			}
		</table>
	)

}

const ControlTableRow = props => {
	return (
		<tr>
			{
				props.cellRow.map(cell => {
					return (
						<td
							className={`table-cell ${cell.isAlive ? 'live' : 'dead'}`}
							onClick={() => props.toggleCellState(cell)}
						></td>
					)
				})
			}
		</tr>
	)
}

export default ControlTable
