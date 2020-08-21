import React, { useState } from 'react';

function Home() {
	const [user, setUser] = useState(null);
	const [friends, setFriends] = useState([]);

	function getFriendsComponents() {
		if (friends.length) {
			return friends.map((friend) => (
				<li key={friend.id}>
					<img src={friend.photo_100} alt={friend.last_name} />
					<span>
						{friend.first_name} {friend.last_name}
					</span>
				</li>
			));
		}
	}

	return (
		<div>
			{user && (
				<h1>
					Пользователь: {user.last_name} {user.first_name}
				</h1>
			)}
			<h2> Список друзей:</h2>
			<ul>{getFriendsComponents()}</ul>
		</div>
	);
}

export default Home;
