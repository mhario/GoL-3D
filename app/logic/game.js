import { buildBoard, runBoard, clearBoard } from './board'

export function Game(targetEl) {
	this.targetEl = targetEl
	this.board = []
	this.rules = {}
	this.buildBoard = buildBoard.bind(this)
	this.runBoard = runBoard.bind(this)
	this.clearBoard = clearBoard.bind(this)
}
