import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { UtilService } from "../services/util/util.service";
import { ApiService } from "../services/api/api.service";
import { StorageService } from "../services/storage/storage.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isLoading: boolean = false;
  isMatch: boolean = false;

  info = {
    especialidade: '',
    registro: '',
    cpf: '',
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    cep: '',
    estado: '',
    cidade: '',
    endereco: '',
    password: '',
    confirm_password: ''
  }

  constructor(public navCtrl: NavController, public util: UtilService,
    public auth: AuthService, public api: ApiService) { }

  ngOnInit() {
  }

  cepInput(cep) {
    console.log("Entered CEP ", cep);
    var cep = cep.replace(/\D/g, '');
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        setTimeout(() => {
          this.api.viaCEP(this.info.cep).then((res: any) => {
            if (res) {
              res.subscribe((data) => {
                console.log("CEP API  > ", data);
                this.info.cidade = data.localidade;
                this.info.estado = data.uf;
              }, (err) => {
                console.log(err);
                this.api.proccessError(err)
              });
            }
          });
        }, 2000);
      } else {
        console.log("CEP not valid");
      }
    }
  }

  doRegister() {
    if(this.info.confirm_password != this.info.password){
      this.isMatch = true;
    } else {
      this.isMatch = false;
      this.isLoading = true;
      this.auth.register(this.info).then((res)=>{
        this.isLoading = false;
        console.log("Register API ", res);
        this.navCtrl.navigateRoot(['/tabs/dashboard'])
      }).catch((err)=>{
        this.isLoading = false;
        this.util.presentToast({header: 'Ops!', message: err})
        console.log(err);
      });
    }
    // if (this.info.especialidade != '' && this.info.registro != '' && this.info.cpf != '' && this.info.nome != '' && this.info.sobrenome != '' && this.info.whatsapp != '' && this.info.email != '' && this.info.cep != '' && this.info.estado != '' && this.info.endereco != '' && this.info.password != '' && this.info.confirm_password != '') {
      
    // }
  }
}
