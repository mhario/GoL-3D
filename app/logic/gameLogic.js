import {
	CELL_SIZE,
	LIVE_COLOR
} from '../CONSTANTS'

var THREE = require('three')
var material, mesh, geometry

export function initGame(targetEl) {
	return {
		targetEl: targetEl
	}
}

// constructs a cell, should be loaded into gameView.boardState
export function Cell(params) {
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

export function buildBoard(rules, board = null) {
	if (!board) {
		let boardCells = []
		for(let x = 0; x < rules.boardSize; x++){
			boardCells[x] = []
			for(let y = 0; y < rules.boardSize; y++){
				boardCells[x][y] = []
				for(let z = 0; z < rules.boardSize; z++){
					let isAlive = (Math.random() < rules.seedRatio)
					boardCells[x][y][z] = new Cell({ x, y, z, isAlive })
					// scene.add(boardCells[x][y][z]); // add the cell to the scene
				}
			}
		}

		boardCells.runBoard = function(fn) {
			boardCells.forEach(board => {
				board.forEach(board2 => {
					board2.forEach(cell => {
						fn(cell)
					})
				})
			})
		}

		return boardCells
	} else {
		// load
		console.log('loading a saved board')
	}
}

export function drawBoard(game) {
	// next to do
}
