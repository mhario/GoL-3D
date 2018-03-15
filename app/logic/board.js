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

	return mesh
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

export function buildBoard({boardSize, seedRatio}) {
	for(let x = 0; x < boardSize; x++){
		this.board[x] = []
		for(let y = 0; y < boardSize; y++){
			this.board[x][y] = []
			for(let z = 0; z < boardSize; z++){
				let isAlive = (Math.random() < seedRatio)
				this.board[x][y][z] = new Cell({ x, y, z, isAlive })
				scene.add(this.board[x][y][z])
			}
		}
	}
}
