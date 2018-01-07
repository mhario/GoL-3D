var controls, camera, scene, renderer

let BOARD_SIZE = 5
let CUBE_SIZE = 200

const update = function() {
	requestAnimationFrame( update )
	controls.update()
	renderer.render( scene, camera )
}


export function Game(targetEl) {
	this.targetEl = targetEl
	this.board = null
	this.rules = {}

	// init will:
	//    create a camera, lights, and renderer
	//    produce and seed the game board
	//    add the cell objects to the scene
	//    return the cell board to the SidebarContainer
	this.initGameview = function() {
		scene = new window.THREE.Scene()

		renderer = new window.THREE.WebGLRenderer()
		renderer.setClearColor( 0x55aa55 )
		renderer.setSize( window.innerWidth, window.innerHeight )

		var container = document.getElementById( this.targetEl )
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

	this.update = update

	this.drawBoard = function() {
		scene.add(camera)
		this.board.runBoard(cell => {
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
