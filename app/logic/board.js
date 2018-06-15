import {
	CELL_SIZE,
	LIVE_COLOR
} from '../CONSTANTS'

import { scene } from '../main'

var THREE = require('three')
var material, mesh, geometry

function Cell(params) {
	geometry = new window.THREE.BoxGeometry( 200, 200, 200 )
	material = new THREE.MeshPhongMaterial( { color: LIVE_COLOR, wireframe: false })
	material.visible = params.isAlive
	material.isAlive = params.isAlive

	mesh = new THREE.Mesh( geometry, material )

	mesh.position.x = params.x * CELL_SIZE
	mesh.position.y = params.y * CELL_SIZE
	mesh.position.z = params.z * CELL_SIZE
	mesh.isAlive = params.isAlive
	mesh.isAliveNextTurn = null

	mesh.setState = _setState.bind(mesh)
	mesh.toggleState = _toggleState.bind(mesh)

	return mesh
}

function _setState(isAlive) {
	this.isAlive = isAlive
	this.material.visible = isAlive
}

function _toggleState() {
	this.setState(!this.isAlive)
}

// run a passed method on every cell on the board
export function runBoard(fn) {
	this.board.forEach(board => {
		board.forEach(board2 => {
			board2.forEach(cell => {
				fn(cell)
			})
		})
	})
}

export function buildBoard() {
	this.clearBoard()
	this.board = []

	for(let x = 0; x < this.boardSize; x++){
		this.board[x] = []
		for(let y = 0; y < this.boardSize; y++){
			this.board[x][y] = []
			for(let z = 0; z < this.boardSize; z++){
				let isAlive = (Math.random() < this.seedRatio)
				this.board[x][y][z] = new Cell({ x, y, z, isAlive })
				scene.add(this.board[x][y][z])
			}
		}
	}
}

export function clearBoard() {
	this.runBoard(cell => {
		cell.setState(false)
	})
}
