export default class SprintService{
	constructor($http, constants){
		this.$http = $http;
		this.constants = constants;
	}

	getSprints(){
		return this.$http.get(`${this.constants.API_URL.API}/${this.constants.API_URL.SPRINTS}`)
		.then(response => response.data);
	}

	getSprintById(id){
		return this.$http.get(`${this.constants.API_URL.API}/${this.constants.API_URL.SPRINTS}/${id}`)
		.then(response => response.data);
	}

	createSprint(sprint){
		return this.$http.post(`${this.constants.API_URL.API}/${this.constants.API_URL.SPRINTS}`, project);
	}

	deleteSprint(id){
		return this.$http.delete(`${this.constants.API_URL.API}/${this.constants.API_URL.SPRINTS}/${id}`)
	}
}