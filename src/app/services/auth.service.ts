import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageService } from "./storage/storage.service";
import { environment } from "../../environments/environment";

const { apiURL } = environment;
@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(public storage: StorageService, public http: HttpClient) {}

	login(email, password) {
		return new Promise((resolve, reject) => {
			let headers = new HttpHeaders();
			//headers.append("Content-Type", "multipart/form-data");

			let fd = new FormData();
			fd.append("cpfcnpj", email);
			fd.append("password", password);

			this.http.post(`${apiURL}/login`, fd, { headers: headers }).subscribe(
				(res: any) => {
					if (res && res.token) {
						console.log("login Auth -> ", res);
						this.storage
							.set("mia_access_token", res.token)
							.then(() => {
								//call /profile to request user data

								setTimeout(() => {
									this.http
										.get(`${apiURL}/perfil`, {
											headers: {
												Bearer: res.token,
											},
										})
										.subscribe(
											(user: any) => {
												this.storage
													.set("mia_user_data", user)
													.then(() => {
														// console.log("user", user);
														resolve(true);
													})
													.catch((err) => {
														// console.log("user", user);
														reject(err);
													});
											},
											(err) => {
												console.log(err);
											}
										);
								}, 100);
								resolve(res);
							})
							.catch((err) => {
								reject(err);
							});
					} else {
						reject({ error: "no token" });
					}
				},
				(err) => {
					reject(err);
				}
			);
		});
	}

	register(info) {
		return new Promise((resolve, reject) => {
			let headers = new HttpHeaders();
			//headers.append("Content-Type", "multipart/form-data");

			let fd = new FormData();
			fd.append("especialidade", info.especialidade);
			fd.append("registro", info.registro);
			fd.append("cpfcnpj", info.cpf);
			fd.append("nome", info.nome);
			fd.append("snome", info.sobrenome);
			fd.append("whats", info.whatsapp);
			fd.append("email", info.email);
			fd.append("cep", info.cep);
			fd.append("estado", info.estado);
			fd.append("cidade", info.cidade);
			fd.append("endereco", info.endereco);
			fd.append("password", info.password);
			fd.append("cpassword", info.confirm_password);

			this.http.post(`${apiURL}/register`, fd, { headers: headers }).subscribe(
				(res: any) => {
					if (res && res.token) {
						console.log("Register Auth -> ", res.token);
						this.storage
							.set("mia_access_token", res.token)
							.then(() => {
								//call /profile to request user data

								setTimeout(() => {
									this.http
										.get(`${apiURL}/perfil`, {
											headers: {
												Bearer: res.token,
											},
										})
										.subscribe(
											(user: any) => {
												this.storage
													.set("mia_user_data", user)
													.then(() => {
														resolve(true);
													})
													.catch((err) => {
														reject(err);
													});
											},
											(err) => {
												console.log(err);
											}
										);
								}, 100);
								resolve(res);
							})
							.catch((err) => {
								reject(err);
							});
					} else {
						reject({ error: "no token" });
					}
				},
				(err) => {
					reject(err);
				}
			);
		});
	}

	async EditProfile(
		zipCode,
		city,
		cpfcnpj,
		email,
		address,
		specialty,
		state,
		name,
		record,
		sname,
		whats,
		password,
		cpassword
	) {
		const formData = new FormData();

		formData.append("nome", name);
		formData.append("snome", sname);
		formData.append("email", email);
		formData.append("whats", whats);
		formData.append("especialidade", specialty);
		formData.append("registro", record);
		formData.append("cpfcnpj", cpfcnpj);
		formData.append("cep", zipCode);
		formData.append("estado", state);
		formData.append("cidade", city);
		formData.append("endereco", address);
		formData.append("password", password);
		formData.append("cpassword", cpassword);

		let endPoint = "https://aimscientist.herokuapp.com/editprof";

		let token = await this.storage.get("mia_access_token");

		return this.http
			.post(endPoint, formData, {
				headers: {
					Bearer: token,
				},
				responseType: "text",
			})
			.toPromise();
	}

	getUserInfo(token) {
		return this.http
			.get(`${apiURL}/perfil`, {
				headers: {
					Bearer: token,
				},
			})
			.toPromise();
	}
}
