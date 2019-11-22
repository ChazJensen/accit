class User {
	constructor(name, pfp) {
		this.name = name;
		this.pfp = pfp;
		this.userDta = {};
	}
	
	addUserData(key, data) {
		this.userData[key] = data;
	}
}