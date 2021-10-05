import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import { StorageService } from "../services/storage/storage.service";
import { ApiService } from "../services/api/api.service";
import Chart from "chart.js";

@Component({
  selector: "app-pacientes",
  templateUrl: "./pacientes.page.html",
  styleUrls: ["./pacientes.page.scss"],
})
export class PacientesPage implements OnInit {
  date: any;
  year: any;
  monthIndex: any;
  userData: any;
  pacientes: any = [];
  totalpati: any;
  geralpoint: any;
  globalpoint: any;
  estaveis: any;
  instaveis: any;
  bioconectados: any;
  inativos: any;
  pacientesOrig: any = [];
  paginationStart = 0;
  paginationEnd = 20;
  constructor(
    public api: ApiService,
    public storage: StorageService,
    public navCtrl: NavController
  ) {
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.monthIndex = this.date.getMonth();

    this.loadUserData();
    this.loadTotals();
    this.loadPacientes();
  }

  ngOnInit() {}

  ionViewDidEnter() {}

  loadUserData() {
    this.storage.get("mia_user_data").then((user) => {
      this.userData = user;
    });
  }

  loadPacientes(infiniteScroll?) {
    //get /totalpati
    this.api
      .get(`seepati/${this.paginationStart}/${this.paginationEnd}`)
      .then((res: any) => {
        console.log(`seepati/${this.paginationStart}/${this.paginationEnd}`);

        if (res) {
          res.subscribe(
            (data) => {
              console.log("pacientes > ", data);

              if (this.paginationStart > 0) {
                this.pacientes.push(data);
                this.pacientesOrig.push(data);
              } else {
                this.pacientes = data;
                this.pacientesOrig = data;
              }
              console.log(this.pacientes);

              if (infiniteScroll) {
                infiniteScroll.target.complete();
              }
              this.pacientes.forEach((el) => {
                //this.loadChart(el._id, dataset)
                setTimeout(() => {
                  if (el._id.$oid) {
                    this.loadChart("id" + el._id.$oid, {
                      labels: ["Corpo", "Mente", "Emoções"],
                      datasets: [
                        {
                          backgroundColor: "#F1B4AE",
                          borderColor: "#2694a3",
                          pointBackgroundColor: "#2694a3",
                          data: [el.corpo, el.mente, el.emocoes],
                        },
                        // {
                        //   label: 'Corpo',
                        //   data: el.corpo,
                        //   backgroundColor: "#F1B4AE",
                        //   borderColor: "#2694a3",
                        //   pointBackgroundColor: "#2694a3",
                        // },
                        // {
                        //   label: 'Mente',
                        //   data: el.mente,
                        //   backgroundColor: "#F1B4AE",
                        //   borderColor: "#2694a3",
                        //   pointBackgroundColor: "#2694a3",
                        // },
                        // {
                        //   label: 'Emoções',
                        //   data: el.emocoes,
                        //   backgroundColor: "#F1B4AE",
                        //   borderColor: "#2694a3",
                        //   pointBackgroundColor: "#2694a3",
                        // }]
                      ],
                    });
                  }
                }, 1000);
              });
            },
            (err) => {
              console.log(err);
              this.api.proccessError(err);
            }
          );
        }
      });
  }

  loadNextPage(infiniteScroll) {
    console.log(event);
    this.paginationStart += 20;
    this.paginationEnd += 20;
    setTimeout(() => {
      infiniteScroll.target.complete();
    }, 1000);
  //this.loadPacientes(infiniteScroll)
  }

  async searchPatient(event) {
    console.log(event.target.value);

    let result;

    if (event.target.value.length > 0) {
      if (/^\d/.test(event.target.value)) {
        /**/
        result = this.pacientesOrig.filter((x) =>
          x.cpf.toLowerCase().includes(event.target.value.toLowerCase())
        );

        if (result.length === 0 && event.target.value.length >= 4) {
          try {
            this.api.get(`seepati/${event.target.value}`).then((res) => {
              res.subscribe((data) => {
                if (data) {
                  result = data;
                  console.log(data);
                  this.pacientes = data;

                  this.pacientes.forEach((el) => {
                    //this.loadChart(el._id, dataset)
                    setTimeout(() => {
                      this.loadChart("id" + el._id.$oid, {
                        labels: ["Corpo", "Mente", "Emoções"],
                        datasets: [
                          {
                            backgroundColor: "#F1B4AE",
                            borderColor: "#2694a3",
                            pointBackgroundColor: "#2694a3",
                            data: [el.corpo, el.mente, el.emocoes],
                          },
                        ],
                      });
                    }, 200);
                  });
                }
              });
            });
          } catch (error) {}
        } else {
          this.pacientes = result;
        }
      } else {
        result = this.pacientesOrig.filter((x) =>
          x.nome.toLowerCase().includes(event.target.value.toLowerCase())
        );
        this.pacientes = result;
      }

      console.log(await result);
      if ((await this.pacientes) && (await this.pacientes.length) > 0) {
        this.pacientes.forEach((el) => {
          //this.loadChart(el._id, dataset)
          setTimeout(() => {
            this.loadChart("id" + el._id.$oid, {
              labels: ["Corpo", "Mente", "Emoções"],
              datasets: [
                {
                  backgroundColor: "#F1B4AE",
                  borderColor: "#2694a3",
                  pointBackgroundColor: "#2694a3",
                  data: [el.corpo, el.mente, el.emocoes],
                },
              ],
            });
          }, 200);
        });
      }
    } else {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.pacientes = this.pacientesOrig;

    this.pacientes.forEach((el) => {
      //this.loadChart(el._id, dataset)
      setTimeout(() => {
        this.loadChart("id" + el._id.$oid, {
          labels: ["Corpo", "Mente", "Emoções"],
          datasets: [
            {
              backgroundColor: "#F1B4AE",
              borderColor: "#2694a3",
              pointBackgroundColor: "#2694a3",
              data: [el.corpo, el.mente, el.emocoes],
            },
          ],
        });
      }, 200);
    });
  }

  get_corpo() {
    this.api.get("prontuario/today/corpo").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("Corpo > ", data);
          },
          (err) => {
            console.log("Corpo API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  get_mente() {
    this.api.get("prontuario/today/mente").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("Mente > ", data);
          },
          (err) => {
            console.log("Mente API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  get_emot() {
    this.api.get("prontuario/today/emocoes").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("Emot > ", data);
          },
          (err) => {
            console.log("Emot API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }
  loadChart(canvas, data) {
    var ctx = document.getElementById(canvas);
    new Chart(ctx, {
      type: "radar",
      data: data,
      options: {
        legend: {
          position: "bottom",
          display: false,
        },
        maintainAspectRatio: true,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001,
          },
        },
        plugins: {
          filler: {
            propagate: false,
          },
          "samples-filler-analyser": {
            target: "chart-analyser",
          },
        },
      },
    });
  }

  loadTotals() {
    //get /totalpati
    this.api.get("totalpati").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("totalpati > ", data);
            this.totalpati =
              data && data[0] && data[0].totalpatients
                ? data[0].totalpatients
                : "0";
          },
          (err) => {
            console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /geralpoint
    this.api.get("geralpoint").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("geralpoint > ", data);
            this.geralpoint =
              data && data[0] && data[0].mediafinal
                ? data[0].mediafinal.$numberDecimal
                : "0";
          },
          (err) => {
            console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /globalpoint
    this.api.get("globalpoint").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("globalpoint > ", data);

            this.globalpoint =
              data && data[0] && data[0].mediafinal ? data[0].mediafinal : "0";
          },
          (err) => {
            console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /instaveis
    this.api.get("instavel").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("instaveis > ", data);

            this.instaveis =
              data && data[0] && data[0].PacientesInstaveis
                ? data[0].PacientesInstaveis
                : "0";
          },
          (err) => {
            console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /estaveis
    this.api.get("estavel").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("estaveis > ", data);

            this.estaveis =
              data && data[0] && data[0].PacientesEstaveis
                ? data[0].PacientesEstaveis
                : "0";
          },
          (err) => {
            console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    //get /inativos
    this.api.get("inativo").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log("inativos > ", data);

            this.inativos =
              data && data[0] && data[0].PacientesEstaveis
                ? data[0].PacientesEstaveis
                : "0";
          },
          (err) => {
            console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  openProntuario(item, category) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        patientId: item._id.$oid,
        category: category,
        year: this.year,
        month: this.monthIndex,
      },
    };
    this.navCtrl.navigateForward("prontuario", navigationExtras);
  }
}
