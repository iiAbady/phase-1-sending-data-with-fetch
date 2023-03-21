// Add your code here
function submitData(name, email) {
	return fetch('http://localhost:3000/users', {
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		},
		method: "POST",
		body: JSON.stringify({name, email})
	}).then(res => res.json() ).then(data => {
		const p = document.createElement('p');
		p.textContent = `id: ${data.id}`;
		const users = document.querySelector('div#users');
		console.log(users);
		users.appendChild(p);
	}).catch(({message}) => {
		alert(`Error! ${message}`)
	})
}

submitData("abdullah", "abdullah.binsaadd@gmail.com")