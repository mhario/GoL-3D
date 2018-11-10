import React from 'react'

import { CustomBoard } from './CustomBoard/'
import { RandomBoard } from './RandomBoard/'
import { SavedBoard } from './SavedBoard/'

class TabBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTab: 'CustomBoard'
		}

		this.setCurrentTab = this._setCurrentTab.bind(this)
	}

	_setCurrentTab(newTab) {
		this.setState({ currentTab: newTab })
	}

	render() {
		return (
			<section className="board-settings">
				<div className="tabs">
					<button
						onClick={() => {
							this.setCurrentTab('CustomBoard')}}>
						Custom Board
					</button>
					<button
						onClick={() => {
							this.setCurrentTab('RandomBoard')}}>
						Random Board
					</button>
					<button
						onClick={() => {
							this.setCurrentTab('SavedBoard')}}>
						Saved Board
					</button>
				</div>
				<CurrentTab
					currentTab={this.state.currentTab}
					game={this.props.game}/>
			</section>
		)
	}
}

function CurrentTab(props) {
	if (props.currentTab === 'CustomBoard') {
		return <CustomBoard
			game={props.game}
		/>
	} else if (props.currentTab === 'RandomBoard') {
		return <RandomBoard
			game={props.game}
		/>
	} else if (props.currentTab === 'SavedBoard') {
		return <SavedBoard
			game={props.game}
		/>
	} else {
		return <CustomBoard
			game={props.game}
		/>
	}
}

export default TabBar
