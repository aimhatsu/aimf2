import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageService } from "../storage/storage.service";
import { environment } from "../../../environments/environment";
import { AlertController, NavController } from "@ionic/angular";
const { apiURL } = environment;

@Injectable({
	providedIn: "root",
})
export class ApiService {
	constructor(public navCtrl: NavController, public storage: StorageService, public http: HttpClient,
		private alertController:AlertController) {}

	async get(url) {
		let token = await this.getToken();
		// console.log(token);
		return await this.http.get(`${apiURL}/${url}`, { headers: { Bearer: token } });
	}

	async post(url) {
		let token = await this.getToken();
		return await this.http.post(`${apiURL}/${url}`, { headers: { Bearer: token } });
	}

	async post_params(url, formData) {
	
		let token = await this.getToken();
		return await this.http.post(`${apiURL}/${url}`, formData, { headers: { Bearer: token }, });
	}

	async viaCEP(cep) {
		return await this.http.get("https://viacep.com.br/ws/" + cep + "/json/");
	}

	getToken() {
		return this.storage.get("mia_access_token");
	}

	proccessError(err) {
		console.log("err", err);
		console.log("Proccess Error", err?.error?.message);
		this.alertController.dismiss();
		// localStorage.removeItem("userToken");
		if (err && err?.error && err?.error?.message == "Token inválido! Por gentileza, verifique o seu login!") {
		
			this.navCtrl.navigateRoot(["/login"]);
			return this.storage.remove("mia_access_token");
		}
	}
}
