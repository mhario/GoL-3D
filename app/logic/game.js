var controls, camera, scene, renderer


let BOARD_SIZE = 5
let CUBE_SIZE = 200

import { update } from '../render'
export { controls, renderer, camera, scene }

export function initGame(targetEl) {
	return {
		targetEl: targetEl,
		board: null,
		rules: {}
	}
}

// init will:
//    create a camera, lights, and renderer
//    produce and seed the game board
//    add the cell objects to the scene
//    return the cell board to the SidebarContainer
export function initGameview(targetDiv) {
	scene = new window.THREE.Scene()

	renderer = new window.THREE.WebGLRenderer()
	renderer.setClearColor( 0x55aa55 )
	renderer.setSize( window.innerWidth, window.innerHeight )

	var container = document.getElementById( targetDiv )
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

	// TODO: find a place for
	// window.addEventListener( 'resize', onWindowResize, false )

	// let allCells = buildBoard()
	// return allCells
	return null
}


export function drawBoard(game) {
	scene.add(camera)
	game.runBoard(cell => {
		scene.add(cell) // add the cell to the scene
	})
	update()
	console.log('heres the game coming out of drawBoard', game[1][1][1])
}
