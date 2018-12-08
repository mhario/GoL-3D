import React from 'react'

import { CustomBoard } from './Tabs/CustomBoard/CustomBoard.jsx'
import { Settings } from './Tabs/Settings/Settings.jsx'
import { SavedBoard } from './Tabs/SavedBoard.jsx'

class TabBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTab: ''
		}

		this.setCurrentTab = this._setCurrentTab.bind(this)
	}

	_setCurrentTab(newTab) {
		if (newTab === this.state.currentTab) {
			this.setState({ currentTab: null })
			return
		}
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
							this.setCurrentTab('Settings')}}>
						Settings
					</button>
					<button
						onClick={() => {
							this.setCurrentTab('SavedBoard')}}>
						Saved Board
					</button>
				</div>
				<CurrentTab
					playing={this.props.playing}
					currentTab={this.state.currentTab}
					game={this.props.game}/>
			</section>
		)
	}
}

function CurrentTab(props) {
	if (props.playing) return null
	if (props.currentTab === 'CustomBoard') {
		return <CustomBoard
			game={props.game}
		/>
	} else if (props.currentTab === 'Settings') {
		return <Settings
			game={props.game}
		/>
	} else if (props.currentTab === 'SavedBoard') {
		return <SavedBoard
			game={props.game}
		/>
	} else {
		return null
	}
}

export default TabBar
