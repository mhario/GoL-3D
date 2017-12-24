var expect = require('chai').expect
require('chai').should()

import { Cell, buildBoard, initGame } from '../app/logic/gameLogic'
var THREE = require('three')

describe('Game Setup', function() {
	let testGame, testLiveCell, testDeadCell, testBoard, testBigBoard
	const boardSize = 2

	before(function() {
		testGame = initGame('main')
		testLiveCell = Cell({isAlive: true})
		testDeadCell = Cell({isAlive: false})
		testBoard = buildBoard({min: 2, max: 3, birth: 3, boardSize, seedRatio: .5})
		testBigBoard = buildBoard({min: 2, max: 3, birth: 3, boardSize: 5, seedRatio: .5})
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
		it('should return a 3-dimensional array', function() {
			expect(testBoard[boardSize - 1][boardSize - 1].length).to.equal(boardSize)
		})

		describe('runBoard(fn) method', function() {
			it('should attach a runBoard(fn) method to the board', function() {
				expect(testBoard.runBoard).to.be.a('function')
			})

			it('should execute once on every cell on the board', function() {
				let cellsCounted = 0
				testBoard.runBoard(() => {
					cellsCounted++
				})
				expect(cellsCounted).to.equal(8)
			})
		})

		describe('array contents', function() {

			it('should produce an array the designated size', function() {
				let testBigBoard = buildBoard({min: 2, max: 3, birth: 3, boardSize: 5, seedRatio: .5})
				let cellsCounted = 0

				testBigBoard.runBoard(() => {
					cellsCounted++
				})

				expect(cellsCounted).to.equal(125)
			})

			it('should produce an array filled with mesh objects', function() {
				expect(testBigBoard.runBoard((cell) => {
					expect(cell).to.be.an.instanceof(THREE.Mesh)
				}))
			})


		})
	})


	describe('drawBoard method', function() {
		// it('should target the specified div', function() {
		//
		// })
	})

})
