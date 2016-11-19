export default class ProfileService{
	/*@ngInject*/
	constructor($http, constants){
		this.$http = $http;
		this.constants = constants;
	}

	getUserById(id){
		return this.$http.get(`${this.constants.API_URL.API}/${this.constants.API_URL.USERS}/${id}`)
			.then(response => response.data);
	}
}