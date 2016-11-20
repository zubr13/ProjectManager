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

	saveProject(project){
		return this.$http.put(
			`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/${project._id}`,
			project);
	}

	addSprint(id, sprint){
     	return this.$http.put(`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/${id}/addsprint`, sprint).then(response => response.data);
	}

	addTask(id, task){
		return this.$http.put(`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/${id}/addtask`, task).then(response => response.data);
	}

	deleteSprint(id){
		return this.$http.delete(
			`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/${id}/sprint`);
	}

	deleteTask(id){
		return this.$http.delete(
			`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/task/${id}`);
	}

	addMember(id, email){
		return this.$http.put(
			`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/members/${id}`,
			{"email": email});
	}

	getMemberByEmail(email){
		return this.$http.get(
			`${this.constants.API_URL.API}/${this.constants.API_URL.USERS}`, 
			{
				params: {
					email: email
				}	
			}).then(response => response.data);
	}

	addSprintComment(id, comment){
		return this.$http.put(
			`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/sprints/${id}/comment`,
			comment);
	}

	addTaskComment(id, comment){
		return this.$http.put(
			`${this.constants.API_URL.API}/${this.constants.API_URL.PROJECT}/tasks/${id}/comment`,
			comment);
	}
}