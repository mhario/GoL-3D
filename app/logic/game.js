import { buildBoard, runBoard } from './board'

export function Game(targetEl) {
	this.targetEl = targetEl
	this.board = []
	this.rules = {}
	this.buildBoard = buildBoard
	this.runBoard = runBoard

}
