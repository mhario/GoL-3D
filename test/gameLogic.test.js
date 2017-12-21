var expect = require('chai').expect
require('chai').should()

import { Cell, buildBoard, initGame } from '../app/logic/gameLogic'
var THREE = require('three')

describe('Game Setup', function() {
	let testGame, testLiveCell, testDeadCell, testBoard
	const boardSize = 5

	before(function() {
		testGame = initGame('main')
		testLiveCell = Cell({isAlive: true})
		testDeadCell = Cell({isAlive: false})
		testBoard = buildBoard({min: 2, max: 3, birth: 3, boardSize, seedRatio: .5})
	})

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

	describe('buildBoard method', function() {
		it('should return a multi-dimensional array', function() {
			expect(testBoard[boardSize - 1][boardSize - 1].length).to.equal(boardSize)
		})

		it('should produce an array filled with mesh objects', function() {
			testBoard.forEach(board => {
				board.forEach(board2 => {
					board2.forEach(cell => {
						expect(cell).to.be.an.instanceof(THREE.Mesh)
					})
				})
			})
		})
	})

	describe('drawBoard method', function() {
		it('should target the specified div', function() {
			
		})
	})

})
