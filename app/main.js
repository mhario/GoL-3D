import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'

import { GameView } from './components/GameView' // eslint-disable-line no-unused-vars

var scene, camera, renderer, controls
const BOARD_SIZE = 8
const CUBE_SIZE = 200
const offsetValue = BOARD_SIZE * CUBE_SIZE
const targetXYZ = offsetValue / 2
const cameraPos = offsetValue * 1.5

init()
animate()
export { scene }

function init() {
	scene = new window.THREE.Scene
	const width = window.innerWidth, height = window.innerHeight

	addLights()

	camera = new window.THREE.PerspectiveCamera( 75, width / height, 1, 10000 )
	camera.position.set( cameraPos, cameraPos, cameraPos )

	renderer = new window.THREE.WebGLRenderer()
	renderer.setClearColor( 0x55aa55 )
	renderer.setSize( window.innerWidth, window.innerHeight )

	controls = new window.THREE.OrbitControls( camera, renderer.domElement )
	controls.enableZoom = true

	var container = document.getElementById( 'game' )
	container.appendChild( renderer.domElement )

	controls.target = new window.THREE.Vector3(targetXYZ, targetXYZ, targetXYZ)
}

function render() {
	controls.update()
	renderer.render(scene, camera)
}

function animate() {
	requestAnimationFrame( animate )
	render()
}

function addLights() {
	var light = new window.THREE.DirectionalLight( 0xffffff, 0.5 )
	light.position.set( 1, 1, 1 )
	scene.add( light )

	light = new window.THREE.DirectionalLight( 0xffffff )
	light.position.set( -1, -1, 200 )
	scene.add( light )
	light = new window.THREE.AmbientLight( 0x222222 )
	scene.add( light )
}

ReactDOM.render (
	<GameView />,
	document.getElementById('app')
)
