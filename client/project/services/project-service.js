export default class ProjectService{
	constructor($http, constants){
		this.$http = $http;
		this.constants = constants;
	}

	getProjects(){
		return this.$http.get(`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}`)
		.then(response => response.data);
	}

	getProjectById(id){
		return this.$http.get(`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/${id}`)
		.then(response => response.data);
	}

	createProject(project){
		return this.$http.post(`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}`, project);
	}

	deleteProject(id){
		return this.$http.delete(`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/${id}`)
	}
}