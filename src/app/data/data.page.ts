import { UtilService } from './../services/util/util.service';
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import {
  NavController,
  AlertController,
  ModalController,
  LoadingController,
} from "@ionic/angular";
import { ApiService } from "../services/api/api.service";
import { FormModalPage } from "../../app/form-modal/form-modal.page";

@Component({
  selector: "app-data",
  templateUrl: "./data.page.html",
  styleUrls: ["./data.page.scss"],
})
export class DataPage implements OnInit {
  tab: string = "forms";
  filterArray: any = [];
  allFilters: any = [];
  status_biomark: any = [];
  filterInputs_alert = [];
  moreOptions: boolean = true;

  @ViewChildren("formIndex") formIndex: QueryList<ElementRef>;

  constructor(
    public api: ApiService,
    public alertController: AlertController,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private util:UtilService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadForms();
  }

  ionViewDidLeave() {
    this.allFilters = [];
    this.filterArray = [];
  }

  segmentChange($event) {
    if (this.tab == "forms") {
      this.filterArray = [];
      this.loadForms();
    }

    if (this.tab == "status") {
      this.filterArray = [];
      this.status_biomark = [];
      this.filterArray = [
        {
          checked: true,
          form: "corpo",
          nform: "Corpo",
        },
        {
          checked: true,
          form: "mente",
          nform: "Mente",
        },
        {
          checked: true,
          form: "emocoes",
          nform: "Emocoes",
        },
      ];

      this.filterInputs_alert = [];
      this.filterInputs_alert = this.fillAlertInputs();

      for (var i = 0; i < this.filterArray.length; i++) {
        this.loadStatus(this.filterArray[i].form, this.filterArray[i].checked);
      }
    }

    if (this.tab == "rec") {
      this.filterArray = [];
      this.loadForms();
    }
  }

  async loadForms() {
    this.presentLoading();
    this.allFilters = [];
    this.filterArray = [];
    this.api.get("forms").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("Forms API > ", data);
            this.filterArray = data;

            for (var i = 0; i < this.filterArray.length; i++) {
              this.filterArray[i].checked = true;
              if (this.tab == "forms") {
                this.loadFormFilters(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );

                if (i + 1 === this.filterArray.length) {
                  setTimeout(() => {
                    console.log("dismiss load forms");
                    this.loadingController
                      .getTop()
                      .then((v) =>
                        v ? this.loadingController.dismiss() : null
                      );
                  }, 2000);
                }
              }

              if (this.tab == "rec") {
                this.loadRecomen(
                  this.filterArray[i].form,
                  this.filterArray[i].checked,
                  i
                );
              }
            }
            this.filterInputs_alert = this.fillAlertInputs();
          },
          (err) => {
            this.alertController.dismiss();
            console.log("API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Aguarde...",
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }

  async loadRecomen(form, checked, index?) {
    if (checked) {
      this.api.get("recomen/" + form).then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              console.log("Recomen API > ", data);
              this.allFilters.push(data);

              console.log("Recomen filter > ", this.allFilters);
            },
            (err) => {
              console.log("API error -> ", err);
              this.loadingController.dismiss();
              this.api.proccessError(err);
            }
          );
        }
        (error) => {
          console.log("API error -> ", error);
          this.loadingController.dismiss();
          this.api.proccessError(error);
        };

        if (index + 1 === this.filterArray.length) {
          setTimeout(() => {
            console.log("dismiss rec loader");
            this.loadingController
              .getTop()
              .then((v) => (v ? this.loadingController.dismiss() : null));
          }, 2000);
        }
      });
    }
  }

  async loadStatus(form, checked, index?) {
    this.allFilters = [];
    if (checked) {
      this.api.get("pato/status/" + form).then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              console.log("Status API > ", data);
              this.allFilters.push(data);
            },
            (err) => {
              console.log("API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

      this.api.get("biomark/" + form).then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              console.log("Status biomark API > ", data);
              this.status_biomark.push(data.status);
              console.log("Status biomark filter > ", this.status_biomark);
              this.loadingController
                .getTop()
                .then((v) => (v ? this.loadingController.dismiss() : null));
            },
            (err) => {
              console.log("API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
    }
  }

  async del_multiple(item,index) {
    let fd = new FormData();
console.log("delquest/" + item.formularios[0].form + "/" + item.questoes[index].ordem)

    const alert = await this.alertController.create({
      header: `Deseja deletar a questão,${item.questoes[index].pergunta}`,
      message: "Digite 'Sim' para deletar a questão selecionada",
      inputs: [
        {
          name: 'inputOK',
          type: 'text',
          placeholder: "Digite 'Sim' aqui."
        },],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Delete",
          handler: (value) => {
            console.log(value.inputOK)

            if (value.inputOK === 'Sim') {
              fd.append("yes", "Sim");
              this.api
              .post_params("delquest/" + item.formularios[0].form + "/" + item.questoes[index].ordem, fd)
              .then((res: any) => {
                if (res) {
                  res.subscribe(
                    (data) => {
                      console.log("Multiple del API > ", data);
                      this.util.presentToast({ header: "", message: data });
                      this.loadForms();
                   
                    },
                    (err) => {
                      console.log("API error -> ", err);
                      this.api.proccessError(err);
                    }
                  );
                }
              });
            } else {
        return
            }
         
          },
        },
      ],
    });

    await alert.present();
  }

  async delStatus() {
    const alert = await this.alertController.create({
      header: "Are you sure",
      message: "Are you sure, you want to delete this status",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Delete",
          handler: () => {
            this.api.get("delpato").then((res: any) => {
              if (res) {
                res.subscribe(
                  (data) => {
                    console.log("Status del API > ", data);
                  },
                  (err) => {
                    console.log("API error -> ", err);
                    this.api.proccessError(err);
                  }
                );
              }
            });
          },
        },
      ],
    });

    await alert.present();
  }

  async delBiomark(biomark) {
    const alert = await this.alertController.create({
      header: "Are you sure",
      message: "Are you sure, you want to delete this Biomark",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Delete",
          handler: () => {
            this.api.post("delbiomark/" + biomark).then((res: any) => {
              if (res) {
                res.subscribe(
                  (data) => {
                    console.log("Status Biomark del API > ", data);
                  },
                  (err) => {
                    console.log("API error -> ", err);
                    this.api.proccessError(err);
                  }
                );
              }
            });
          },
        },
      ],
    });

    await alert.present();
  }

  async loadFormFilters(form, checked) {
    if (checked) {
      this.api.get("forms/" + form).then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              console.log(form + " filter > ", data);

              this.allFilters.push(data);

              console.log("filter > ", this.allFilters);
            },
            (err) => {
              this.loadingController.dismiss();
              console.log("API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
    }
  }

  queryFormIndex(item, index) {
    const height = item.questoes.length * 75;
    console.log(item);

    if (item.show) {
      item.show = false;
    } else {
      item.show = true;
    }
    console.log(item.show);
  }

  fillAlertInputs() {
    const theNewInputs = [];
    for (let i = 0; i < this.filterArray.length; i++) {
      theNewInputs.push({
        type: "checkbox",
        label: this.filterArray[i].nform,
        value: this.filterArray[i],
        checked: this.filterArray[i].checked,
      });
    }
    return theNewInputs;
  }

  async openFilter() {
    this.allFilters = [];
    const alert = await this.alertController.create({
      header: "Filtros",
      inputs: this.filterInputs_alert,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log("Confirm Ok", data);

            let isMatch = false;
            for (let i = 0; i < this.filterArray.length; i++) {
              for (let j = 0; j < data.length; j++) {
                if (data[j].form == this.filterArray[i].form) {
                  isMatch = true;
                  break;
                } else {
                  isMatch = false;
                }
              }

              if (isMatch) {
                // To make filter true again
                if (this.filterArray[i].checked == false) {
                  this.filterArray[i].checked = true;
                }
              } else {
                this.filterArray[i].checked = false;
                isMatch = false;
              }
            }
            console.log("Filter array -> ", this.filterArray);

            // Call to API according to selected filters
            if (this.tab == "forms") {
              this.allFilters = [];
              for (var i = 0; i < this.filterArray.length; i++) {
                this.loadFormFilters(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }
            }

            if (this.tab == "status") {
              for (var i = 0; i < this.filterArray.length; i++) {
                this.loadStatus(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }
            }

            if (this.tab == "rec") {
              for (var i = 0; i < this.filterArray.length; i++) {
                this.loadRecomen(
                  this.filterArray[i].form,
                  this.filterArray[i].checked
                );
              }
            }

            // Filling alert array
            this.filterInputs_alert = [];
            this.filterInputs_alert = this.fillAlertInputs();
          },
        },
      ],
    });

    await alert.present();
  }

  async open_patologia() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "patologia",
        title: "Inserir novo Estado Clínico / Patologia",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("patologia Modal Dismiss ", data);
  }

  async editStatus(item) {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "patologia",
        title: "EEstado Clínico / Patologia",
        item: item,
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Edit patologia Modal Dismiss ", data);
  }

  async open_biomarcador() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "biomark",
        title: "Inserior novo Biomarcador",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("biomark Modal Dismiss ", data);
  }

  async open_tratamento() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "tratamento",
        title: "Inserir novo Tratamento",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Tratamento Modal Dismiss ", data);
  }

  async open_content() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "content",
        title: "Inserir novo Conteúdo",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Content Modal Dismiss ", data);
  }

  async open_food() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "food",
        title: "Inserir nova Alimentação",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Food Modal Dismiss ", data);
  }

  async open_activity() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "activity",
        title: "Inserir nova Atividade",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Activity Modal Dismiss ", data);
  }

  async open_multiple() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "multiple",
        title: "Inserir Questão de Múltipla Escolha",
      },
    });
    await modal.present();

    await modal.onWillDismiss().then((data) => {
      if (data.data) {
        this.loadForms();
      } else {
        return;
      }
      console.log("Edit multiple Modal Dismiss ", data);
    });
  }

  async edit_multiple(item,index?) {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "multiple",
        title: "Editar Questão de Múltipla Escolha",
        item: item,
        index:index
      },
    });
    await modal.present();

    await modal.onWillDismiss().then((data) => {
      if (data.data) {
        this.loadForms();
      } else {
        return;
      }

      console.log("Edit multiple Modal Dismiss ", data);
    });
  }

  async open_gestalt() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "gestalt",
        title: "Inserir Questão de Gestalt",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Gestalt Modal Dismiss ", data);
  }

  async open_binaria() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "binaria",
        title: "Inserir Questão de SIM ou NÃO",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Binaria Modal Dismiss ", data);
  }

  async open_levels() {
    const modal = await this.modalController.create({
      component: FormModalPage,
      componentProps: {
        form_type: "levels",
        title: "Inserir Questão de Níveis",
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("Level Modal Dismiss ", data);
  }
}
