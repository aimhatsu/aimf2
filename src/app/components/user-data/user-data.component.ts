import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { StorageService } from "../../services/storage/storage.service";
import { AuthService } from "../../services/auth.service";

import { ToastController } from "@ionic/angular";
@Component({
	selector: "app-user-bar",
	templateUrl: "./user-data.component.html",
	styleUrls: ["./user-data.component.scss"],
})
export class UserDataComponent implements OnInit {
	userData: any;

	zipCode: string = "";
	city: string = "";
	cpfcnpj: string = "";
	email: string = "";
	address: string = "";
	specialty: string = "";
	state: string = "";
	name: string = "";
	record: string = "";
	sname: string = "";
	whats: string = "";
	password: string = "";
	cpassword: string = "";

	constructor(
		public modalCtrl: ModalController,
		public auth: AuthService,
		public toastController: ToastController,
		public storage: StorageService
	) {}

	ngOnInit() {
		this.loadUserData();
	}

	loadUserData() {
		console.log("inside");
		this.storage.get("mia_user_data").then((user) => {
			console.log("user here", user);
			this.zipCode = user[0]?.cep;
			this.city = user[0]?.cidade;
			this.cpfcnpj = user[0]?.cpfcnpj;
			this.email = user[0]?.email;
			this.address = user[0]?.endereco;
			this.specialty = user[0]?.especialidade;
			this.state = user[0]?.estado;
			this.name = user[0]?.nome;
			this.record = user[0]?.registro;
			this.sname = user[0]?.snome;
			this.whats = user[0]?.whats;
			this.password = user[0]?.password;
			this.cpassword = user[0]?.password;
			this.userData = user[0];
		});
	}
	closeLoginPop() {
		this.modalCtrl.dismiss();
	}

	editForm() {
		// console.log("zipCode", this.zipCode);
		// console.log("city", this.city);
		// console.log("cpfcnpj", this.cpfcnpj);
		// console.log("email", this.email);
		// console.log("address", this.address);
		// console.log("specialty", this.specialty);
		// console.log("state", this.state);
		// console.log("name", this.name);
		// console.log("record", this.record);
		// console.log("sname", this.sname);
		// console.log("whats", this.whats);
		// console.log("password", this.password);
		// console.log("cpassword", this.cpassword);

		this.auth
			.EditProfile(
				this.zipCode,
				this.city,
				this.cpfcnpj,
				this.email,
				this.address,
				this.specialty,
				this.state,
				this.name,
				this.record,
				this.sname,
				this.whats,
				this.password,
				this.cpassword
			)
			.then(async (response) => {
				console.log("response", response);
				if (response) {
					let token = await this.storage.get("mia_access_token");
					if (token) {
						this.auth
							.getUserInfo(token)
							.then((response) => {
								// console.log("response", response);
								this.storage.set("mia_user_data", response);
								this.closeLoginPop();
							})
							.catch((err) => {
								console.log("err", err);
								this.closeLoginPop();
							});
						this.presentToast(response);
					}
				}
			})
			.catch((err) => {
				console.log("err", err);
			});
	}

	async presentToast(response) {
		const toast = await this.toastController.create({
			message: response,
			duration: 2000,
		});
		toast.present();
	}
}
