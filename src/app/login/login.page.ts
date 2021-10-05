import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { UtilService } from "../services/util/util.service";
import { StorageService } from "../services/storage/storage.service";
import { NavController } from "@ionic/angular";
@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
	user = {
		email: "",
		password: "",
	};
	isLoading: boolean = false;

	constructor(
		public navCtrl: NavController,
		public util: UtilService,
		public auth: AuthService,
		public storage: StorageService
	) {}

	ngOnInit() {}

	login() {
		// For development purposes
		// this.navCtrl.navigateRoot(['/tabs/dashboard']);

		if (this.user.email != "" && this.user.password != "") {
			this.isLoading = true;
			this.auth
				.login(this.user.email, this.user.password)
				.then((response) => {
					this.isLoading = false;
					if (response) {
						this.navCtrl.navigateRoot(["/tabs/dashboard"]);
					}
				})
				.catch((err) => {
					this.isLoading = false;
					this.util.presentErr(JSON.stringify(err.statusText), JSON.stringify(err.message));
					console.log(err);
				});
		}
	}

	register() {
		this.navCtrl.navigateForward("register");
	}
}
