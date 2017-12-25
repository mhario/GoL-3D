var scene, camera, renderer, controls
var geometry, material, mesh
import React from 'react'

// import { CUBE_SIZE, BOARD_SIZE, SEED_LIFE_RATIO } from '../containers/SidebarContainer.jsx'

import { buildBoard } from './logic/gameLogic'

let BOARD_SIZE = 5
let CUBE_SIZE = 200

export {scene}

// var THREE = require('three')


// init will:
//    create a camera, lights, and renderer
//    produce and seed the game board
//    add the cell objects to the scene
//    return the cell board to the SidebarContainer
export function init() {
	scene = new window.THREE.Scene()

	renderer = new window.THREE.WebGLRenderer()
	renderer.setClearColor( 0x55aa55 )
	renderer.setSize( window.innerWidth, window.innerHeight )

	var container = document.getElementById( 'main' )
	container.appendChild( renderer.domElement )


	camera = new window.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 )
	camera.position.x = BOARD_SIZE * CUBE_SIZE / 2
	camera.position.y = BOARD_SIZE * CUBE_SIZE / 2
	camera.position.z = BOARD_SIZE * CUBE_SIZE * 2
	camera.position.set( 0, 0, 4000 )
	camera.lookAt( scene.position )


	controls = new window.THREE.OrbitControls( camera, renderer.domElement )
	controls.enableZoom = true

	let light = new window.THREE.DirectionalLight( 0xcccccc )
	light.position.set( 1, 1, 1 )
	scene.add( light )
	light = new window.THREE.DirectionalLight( 0xffffff )
	light.position.set( -1, -1, 200 )
	scene.add( light )
	light = new window.THREE.AmbientLight( 0x222222 )
	scene.add( light )

	window.addEventListener( 'resize', onWindowResize, false )

	// let allCells = buildBoard()
	// return allCells
	return null
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize( window.innerWidth, window.innerHeight )
	renderer.render(scene, camera)
}

function update() {
	requestAnimationFrame( update )
	controls.update()
	renderer.render( scene, camera )
}

export function drawBoard(game) {
	scene.add(camera)
	game.runBoard(cell => {
		scene.add(cell) // add the cell to the scene
	})
	// update()
	console.log('heres the game coming out of drawBoard', game[1][1][1])
	update()
}

export function GameView() {
	init()
	let board = buildBoard({min: 2, max: 3, birth: 3, boardSize: 5, seedRatio: .5})
	// console.log('inside of gameview ', board);
	drawBoard(board)
	return <h1>fail</h1>
}
