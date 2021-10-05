import { Component, OnChanges, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StorageService } from "../../services/storage/storage.service";
import { UserDataComponent } from "../user-data/user-data.component";

@Component({
	selector: "app-user-bar",
	templateUrl: "./user-bar.component.html",
	styleUrls: ["./user-bar.component.scss"],
})
export class UserBarComponent implements OnInit {
	userData: any;
	constructor(public storage: StorageService, public modalCtrl: ModalController) {
		this.loadUserData();
	}

	ngOnInit() {
		// this.loadUserData();
		// console.log("here");
	}

	loadUserData() {
		let interval = setInterval(() => {
			this.storage
				.get("mia_user_data")
				.then((user) => {
					this.userData = user[0];
					console.log("user", this.userData);
					if (user[0]) {
						clearInterval(interval);
					}
				})
				.catch(() => {
					console.log("error while fetching User Data");
				});
		}, 2000);

		// if (this.userData) {
		// 	console.log("here interval");
		// 	clearInterval(interval);
		// }
	}

	openUserData() {
		this.modalCtrl.create({ component: UserDataComponent }).then((userEl) => userEl.present());
	}
}
