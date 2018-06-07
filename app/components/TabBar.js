import React from 'react'

import { CustomBoard } from './CustomBoard/'
import { RandomBoard } from './RandomBoard/'
import { SavedBoard } from './SavedBoard/'

export class TabBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTab: 'CustomBoard'
		}

		this.setCurrentTab = this._setCurrentTab.bind(this)
	}

	_setCurrentTab(newTab) {
		this.setState({currentTab: newTab})
	}

	render() {
		return (
			<section>
				<div>
					<button
						onClick={() => {this.setCurrentTab('CustomBoard')}}>
						Custom Board
					</button>
					<button
						onClick={() => {this.setCurrentTab('RandomBoard')}}>
						Random Board
					</button>
					<button
						onClick={() => {this.setCurrentTab('SavedBoard')}}>
						Saved Board
					</button>
				</div>
				<CurrentTab currentTab={this.state.currentTab} game={this.props.game}/>
			</section>
		)
	}
}

function CurrentTab(props) {
	if (props.currentTab === 'CustomBoard') {
		return <CustomBoard
			boardState={props.game.board}
		/>
	} else if (props.currentTab === 'RandomBoard') {
		return <RandomBoard
			boardState={props.game.board}
		/>
	} else if (props.currentTab === 'SavedBoard') {
		return <SavedBoard
			boardState={props.game.board}
		/>
	} else {
		return <CustomBoard
			boardState={props.game.board}
		/>
	}
}
