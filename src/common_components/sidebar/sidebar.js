import React from 'react';

import Avatar from '../avatar';
import FooterSidebar from '../footer_sidebar';

function Sidebar() {
	return (
		<aside className = "sidebar">
			<Avatar />
			<FooterSidebar />
		</aside>
	);
}

export default Sidebar;