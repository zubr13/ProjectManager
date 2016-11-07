export default class ProjectService{
	constructor($http, constants){
		this.$http = $http;
		this.constants = constants;
	}

	getProjects(){
		return this.$http.get(`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}`)
		.then(response => response.data);
	}
}