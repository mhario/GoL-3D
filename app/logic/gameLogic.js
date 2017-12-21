import {
	CELL_SIZE,
	LIVE_COLOR
} from '../CONSTANTS'

var THREE = require('three')
var material, mesh, geometry

module.exports = {

	initGame: function(targetEl) {
		return {
			targetEl: targetEl
		}
	},

	// constructs a cell, should be loaded into gameView.boardState
	Cell: function(params) {
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

}
