export default class ProjectService{
	constructor($http, API_URL){
		this.$http = $http;
		this.API_URL = API_URL;
	}

	getProjects(){
		this.$http.get(`${this.API_URL.BASE_API}${this.API_URL.PROJECT}`)
		.then(response => response.result);
	}
}