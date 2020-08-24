import React from 'react';

import './sidebar.css';

import Avatar from '../avatar';
import FooterSidebar from '../footer_sidebar';
import Navigation from '../navigation';

function Sidebar() {
	return (
		<aside className = "sidebar">
			<Avatar />
			<Navigation />
			<FooterSidebar />
		</aside>
	);
}

export default Sidebar;