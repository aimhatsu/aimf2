import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from "@ionic/angular";

export interface Toast {
  header?: any,
  message: any,
  position?: any,
  buttons?: any,
  closeButtonText?: any,
  duration?: any,
  color?: any,
  cssClass? : any,
  mode?: any,
  
}

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  loading:any;

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, public alertCtrl: AlertController) { }

  async presentAlert(data:any){
    let alert = await this.alertCtrl.create(data);
    return await alert.present()
  }
  async presentErr(hdr: string, msg: string) {
    const alert = await this.alertCtrl.create({
      header: hdr,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentToast(data: Toast){
    let toast = await this.toastCtrl.create({
      duration: (data.duration)? data.duration : 3500, ...data
    });
    return await toast.present()
  }

  async presentLoading(data:any){
    this.loading = await this.loadingCtrl.create(data);
    return await this.loading.present()
  }

  async dismissLoading(){
    if(this.loading)
    return this.loading.dismiss()
  }
}
