import { buildBoard, runBoard, clearBoard } from './board'

export function Game(targetEl) {
	this.targetEl = targetEl
	this.board = []
	this.rules = {}
	this.boardSize = 5
	this.seedRatio = 0.05
	this.buildBoard = buildBoard.bind(this)
	this.runBoard = runBoard.bind(this)
	this.clearBoard = clearBoard.bind(this)
}

const MIN_LIVING_NEIGHBORS = 2
const MAX_LIVING_NEIGHBORS = 3
const LIVING_NEIGHBORS_TO_BIRTH = 3

export function calcTurn(board = null) {

	// if (boardCells === null) throw new Error('No Board');
	
	let newBoardCells = board
	
	//  counts number of living neighbors for each cell on the board
	//  sets the 'isAliveNextTurn' based on the count
	newBoardCells.forEach( cellArr => {
		cellArr.forEach( cellArr => {
			cellArr.forEach( cell => {
				let livingNeighbors = 0
				cell.neighbors.forEach( cell => {
					if (cell.isAlive) livingNeighbors++
				})
		
				// set to dead if outside max/min
				if (livingNeighbors < MIN_LIVING_NEIGHBORS ||
				livingNeighbors > MAX_LIVING_NEIGHBORS) {
					cell.isAliveNextTurn = false
				} else { // if inside max/min, life status does not change
					cell.isAliveNextTurn = cell.isAlive
				}
		
				if (!cell.isAlive && livingNeighbors === LIVING_NEIGHBORS_TO_BIRTH) {
					cell.isAliveNextTurn = true
				}
			})
		})
	})
	
	//  iterates over the entire game board
	//  and sets all life flags to next turn state
	newBoardCells.forEach( cellArr => {
		cellArr.forEach( cellArr => {
			cellArr.forEach( cell => {
				cell.isAlive = cell.isAliveNextTurn
				cell.isAliveNextTurn = null
				cell.setStatus()
			})
		})
	})
	
	// return newBoardCells;	  
}