
import { controls, renderer, camera, scene } from './logic/game'

export function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize( window.innerWidth, window.innerHeight )
	renderer.render(scene, camera)
}

export function update() {
	requestAnimationFrame( update )
	controls.update()
	renderer.render( scene, camera )
}
