
//TODO remove this imp new auth
//https://stackoverflow.com/questions/48983708/where-to-store-access-token-in-react-js
//https://medium.com/lightrail/getting-token-authentication-right-in-a-stateless-single-page-application-57d0c6474e3


export function setSessAuth(token, uid, name, email) {
	//TODO remove this imp new auth
	console.log('<< SETTING SESS AUTH >>')
	window.sessionStorage.setItem("TEMP_token", token);
	window.sessionStorage.setItem("TEMP_uid", uid);
	window.sessionStorage.setItem("name", name);
	window.sessionStorage.setItem("email", email);
}

export function getSessAuth() {
	//TODO remove this imp new auth
	console.log('AUTH TEST >> ')
	console.log(window.sessionStorage.getItem("TEMP_token"))
	console.log(window.sessionStorage.getItem("TEMP_uid"))
	console.log(window.sessionStorage.getItem("name"))
	console.log(window.sessionStorage.getItem("email"))
	//	"TEMP_token": window.sessionStorage.getItem("TEMP_token"),
	//	"TEMP_token": window.sessionStorage.getItem("TEMP_uid")
	return window.sessionStorage.getItem("TEMP_uid")
}

export function endSessAuth() {
	window.sessionStorage.setItem("TEMP_token", null);
	window.sessionStorage.setItem("TEMP_uid", null);
	window.sessionStorage.setItem("name", null);
	window.sessionStorage.setItem("email", null);
}

