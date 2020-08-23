import React from 'react';

function Avatar() {
	return (
		<img className = "slidebar_avatar" src = {localStorage.getItem('avatarUrl')}></img>
	);
}

export default Avatar;