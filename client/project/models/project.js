export default class Project{
	
	constructor(title, description, deadline, client, status, executors){
		this.title = title;
		this.description = description;
		this.deadline = deadline;
		this.client = client;
		this.status = status;
		this.files = [];
		this.tasks = [];
		this.executors = executors;
	}

	addTask(task){
		this.tasks.push(task);
	}

	addExecutor(executor){
		this.executors.push(executor);
	}

	addFile(file){
		this.files.push(file);
	}
}