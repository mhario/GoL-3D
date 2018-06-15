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
