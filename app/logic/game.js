var controls, camera, scene, renderer

import { buildBoard, runBoard } from './board'

let BOARD_SIZE = 8
let CUBE_SIZE = 200

const update = function() {
	requestAnimationFrame( update )
	controls.update()
	renderer.render( scene, camera )
}

export function Game(targetEl) {
	this.targetEl = targetEl
	this.board = []
	this.rules = {}
	this.update = update
	this.buildBoard = buildBoard
	this.runBoard = runBoard

	// init will:
	//    create a camera, lights, and renderer
	//    produce and seed the game board
	//    add the cell objects to the scene
	//    return the cell board to the SidebarContainer
	this.initGameview = function({width, height}) {
		scene = new window.THREE.Scene()

		renderer = new window.THREE.WebGLRenderer()
		renderer.setClearColor( 0x55aa55 )
		renderer.setSize( width, height )

		var container = document.getElementById( this.targetEl )
		container.appendChild( renderer.domElement )

		camera = new window.THREE.PerspectiveCamera( 75, width / height, 1, 10000 )
		const offsetValue = BOARD_SIZE * CUBE_SIZE
		let cameraX = offsetValue - (offsetValue * 1.5)
		let cameraY = offsetValue * 1.5
		let cameraZ = offsetValue * 1.5
		camera.position.set( cameraX, cameraY, cameraZ )

		let targetXYZ = offsetValue / 2

		controls = new window.THREE.OrbitControls( camera, renderer.domElement )
		controls.enableZoom = true
		controls.target = new window.THREE.Vector3(targetXYZ, targetXYZ, targetXYZ)

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
	}

	this.drawBoard = function() {
		scene.add(camera)
		this.runBoard(cell => {
			scene.add(cell) // add the cell to the scene
		})
		this.update()
	}

	this.onWindowResize = function() {
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
		renderer.setSize( window.innerWidth, window.innerHeight )
		renderer.render(scene, camera)
	}
}
