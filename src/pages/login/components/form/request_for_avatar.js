export function requestForAvatar(login) {
  return fetch(`https://api.github.com/users/${login}`).then((response) => {
    return response.json();
  });
}
