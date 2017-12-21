var expect = require('chai').expect
require('chai').should()

var gameLogic = require('../app/logic/gameLogic')
var THREE = require('three')

describe('Game Setup', function() {

	const testGame = gameLogic.initGame('main')
	const testLiveCell = gameLogic.Cell({isAlive: true})
	const testDeadCell = gameLogic.Cell({isAlive: false})

	describe('initGame method', function() {
		it('should return an object', function() {
			testGame.should.be.an('Object')
		})

		it('should have a targetEl key, passed to method', function() {
			testGame.targetEl.should.equal('main')
		})
	})

	describe('Cell constructor method', function() {
		it('should return a three.js mesh', function() {
			expect(testLiveCell).to.be.an.instanceof(THREE.Mesh)
		})

		it('should only be visible if alive', function() {
			expect(testLiveCell.material.visible).to.equal(true)
			expect(testDeadCell.material.visible).to.equal(false)
		})
	})


})
