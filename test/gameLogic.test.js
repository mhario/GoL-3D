require('assert')
require('chai').expect
require('chai').should()

var gameLogic = require('../app/logic/gameLogic')

describe('GameView', function() {

	describe('buildGame method', function() {

		const testGame = gameLogic.buildGameView('main')

		it('should return an object', function() {
			testGame.should.be.an('Object')
		})

		it('should have a targetEl key, passed to method', function() {
			testGame.targetEl.should.equal('main')
		})

	})
})
