export default class NotificationService{
	constructor($http, constants){
		this.$http = $http;
		this.constants = constants;
	}

	getNotifications() {
		return this.$http.get(`${this.constants.API_URL.API}/${this.constants.API_URL.NOTIFICATIONS}`)
			.then(response => response.data);
	}

	createNotification(notification) {
		return this.$http.post(`${this.constants.API_URL.API}/${this.constants.API_URL.NOTIFICATIONS}`,
		 notification);
	}
}