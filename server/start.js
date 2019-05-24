'use strict'
/* global __dirname */

const express = require('express')
const app = express()
const { resolve } = require('path')
const PORT = 3000

module.exports = app
	.use(express.static(resolve(__dirname, '..', 'public')))

	.get('/*', (_, res) => {
		res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))
	})

const server = app.listen(
	PORT,
	() => {
		console.log('Listening on port ', PORT)
	}
)