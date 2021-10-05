import { Component, OnInit, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import { StorageService } from "../services/storage/storage.service";
import { ApiService } from "../services/api/api.service";
import { IonSlides } from "@ionic/angular";
import Chart from "chart.js";

declare var google: any;

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  date: any;
  year: any;
  monthIndex: any;
  userData: any;
  slideDate: any;
  slide_Uid: any;
  slideLength: any = [];
  slideCount: any = 0;
  slidePatology: any;
  totalpati: any;
  geralpoint: any;
  globalpoint: any;
  estaveis: any;
  instaveis: any;
  bioconectados: any;
  inativos: any;

  // map: any;
  heatmap: any;

  months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  @ViewChild("slider") slider: IonSlides;
  // Slides option start
  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(
          `${swiper.params.containerModifierClass}coverflow`
        );
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          $wrapperEl,
          slidesSizesGrid,
          $,
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal
          ? -transform$$1 + swiperWidth / 2
          : -transform$$1 + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier =
            ((center - slideOffset - slideSize / 2) / slideSize) *
            params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
          let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-left")
              : $slideEl.find(".swiper-slide-shadow-top");
            let $shadowAfterEl = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-right")
              : $slideEl.find(".swiper-slide-shadow-bottom");
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "left" : "top"
                }"></div>`
              );
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "right" : "bottom"
                }"></div>`
              );
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length)
              $shadowBeforeEl[0].style.opacity =
                offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length)
              $shadowAfterEl[0].style.opacity =
                -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }

        // Set correct perspective for IE10
        if (
          swiper.support.pointerEvents ||
          swiper.support.prefixedPointerEvents
        ) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(duration);
      },
    },
  };

  // Slides option End
  graph: any;

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
    this.loadSlides();
    this.loadRiskFactor();
    this.loadAudience();
    this.createChart();
  }

  ngOnInit() {
    // this.initMap();
  }

  // initMap() {
  //   this.map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 13,
  //     center: { lat: 37.775, lng: -122.434 }
  //   });

  //   this.heatmap = new google.maps.visualization.HeatmapLayer({
  //     data: this.getPoints(),
  //     map: this.map
  //   });
  // }

  // getPoints() {
  //   return [
  //     new google.maps.LatLng(37.782551, -122.445368),
  //     new google.maps.LatLng(37.782745, -122.444586),
  //     new google.maps.LatLng(37.782842, -122.443688),
  //     new google.maps.LatLng(37.782919, -122.442815),
  //     new google.maps.LatLng(37.782992, -122.442112),
  //     new google.maps.LatLng(37.7831, -122.441461),
  //     new google.maps.LatLng(37.783206, -122.440829),
  //     new google.maps.LatLng(37.783273, -122.440324),
  //     new google.maps.LatLng(37.783316, -122.440023),
  //     new google.maps.LatLng(37.783357, -122.439794),
  //   ]
  // }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  slideChanged(slides: IonSlides) {}

  openAtendimento() {
    this.navCtrl.navigateForward("atendimento");
  }

  openProntuario(category) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        patientId: this.slide_Uid,
        category: category,
        year: this.year,
        month: this.monthIndex,
      },
    };
    this.navCtrl.navigateForward("prontuario", navigationExtras);
  }

  ionViewDidEnter() {
    this.loadHistoricoGeral();
  }

  nextYear() {
    this.year = this.year + 1;
    this.loadHistoricoGeral();
    this.loadRiskFactor();
  }

  prevYear() {
    this.year = this.year - 1;
    this.loadHistoricoGeral();
    this.loadRiskFactor();
  }

  loadHistoricoGeral() {
    //get /totalpati
    this.api.get(`grafhista/${this.year}`).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("grafhista/{year} > ", data);

            let meses = [];
            let corpo = [];
            let mente = [];
            let emocoes = [];

            data.forEach((el) => {
              meses.push(this.months[el._id - 1]);
              corpo.push(el.corpo);
              mente.push(el.mente);
              emocoes.push(el.emocoes);
            });

            setTimeout(() => {
              let dataset = {
                labels: meses,
                datasets: [
                  {
                    label: "corpo",
                    fill: false,
                    data: corpo,
                    borderWidth: 2,
                    borderColor: "#2694a3",
                    backgroundColor: "#2694a3",
                  },
                  {
                    label: "mente",
                    fill: false,
                    data: mente,
                    borderWidth: 2,
                    borderColor: "#ffce00",
                    backgroundColor: "#ffce00",
                  },
                  {
                    label: "emoções",
                    fill: false,
                    data: emocoes,
                    borderWidth: 2,
                    borderColor: "#F1B4AE",
                    backgroundColor: "#F1B4AE",
                  },
                ],
              };

              this.renderChartHistoricoGeral(dataset);
            }, 150);
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  async loadAudience() {
    this.api.get("audiency/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Audience Year > ", data);
          },
          (err) => {
            // console.log("Audience API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  async audienceMonthly() {
    this.api
      .get("audiency/" + this.year + "/" + this.months[this.monthIndex])
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Audience monthly > ", data);
            },
            (err) => {
              // console.log("Audience API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
  }

  async audienceChart(data) {
    var ctx = document.getElementById("audienceChart");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  async radarChart(corpo, emot, mente) {
    var ctx = document.getElementById("radarChart");
    var radarOptions = {
      legend: {
        position: "bottom",
        display: false,
      },
    };
    var radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Corpo", "Mente", "Emoções"],
        datasets: [
          {
            backgroundColor: "#F1B4AE",
            borderColor: "#2694a3",
            pointBackgroundColor: "#2694a3",
            data: [corpo, emot, mente],
          },
        ],
      },
      options: radarOptions,
    });
  }

  createChart() {

    this.graph = {
      data: [
        {
          y: [
            10, 0, -10, -10, 0, 10, 10, 0, -10, -8, 0, 10, 10, 0, -10, -10, 0,
            10,
          ],
          x: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
          z: [
            -5, -10, -5, 5, 10, 5, -5, -10, -5, 4, 2, 5, -5, -10, -5, 5, 10, 5,
          ],
          type: "scatter3d",
        },
      ],
      layout: {
        autosize: true,
        scene: { xaxis: { autorange: "reversed" } },
      },
    };

    setTimeout(() => {
      let scene = document.getElementById('scene')
      console.log(scene)
      scene.style.width = '850px';
      scene.style.height = '500px';
      scene.style.left = '0px';
      scene.style.right = 'auto';
      scene.style.margin = '0px';
      scene.style.top = '5px';
    }, 500);

  }

  renderChartHistoricoGeral(data) {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  loadUserData() {
    this.storage.get("mia_user_data").then((user) => {
      this.userData = user;
    });
  }

  nextSlide() {
    if (this.slideCount == 0 || this.slideCount > 0) {
      this.slideCount++;
      this.loadSlides();
    }
  }

  prevSlide() {
    if (this.slideCount < 0) {
    } else {
      if (this.slideCount != 0) {
        this.slideCount--;
        this.loadSlides();
      }
    }
  }

  async loadSlides() {
    this.api.get("flowscientist/" + this.slideCount).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            console.log(data);
            // console.log("Scientist > ", data);
            this.slideLength = data;
            if (this.slideLength.length != 0) {
              this.slideDate = data[0].date;
              this.slide_Uid = data[0]._id;
              this.slidePatology = data[0].patology;
              //this.radarChart(data[0].corpo, data[0].emocoes, data[0].mente);
            } else {
              //this.radarChart(1, 1, 1);
            }
          },
          (err) => {
            // console.log("Scientist API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  get_corpo() {
    this.api.get("prontuario/today/corpo").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Corpo > ", data);
          },
          (err) => {
            // console.log("Corpo API error -> ", err);
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
            // console.log("Mente > ", data);
          },
          (err) => {
            // console.log("Mente API error -> ", err);
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
            // console.log("Emot > ", data);
          },
          (err) => {
            // console.log("Emot API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  loadTotals() {
    //get /totalpati
    this.api.get("totalpati").then((res: any) => {
      // console.log("Total pati API -> ", res);
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("totalpati > ", data);
            this.totalpati =
              data && data[0] && data[0].totalpatients
                ? data[0].totalpatients
                : "0";
          },
          (err) => {
            // console.log("Total pati API error -> ", err);
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
            // console.log("geralpoint > ", data);
            this.geralpoint =
              data && data[0] && data[0].mediafinal
                ? data[0].mediafinal.$numberDecimal
                : "0";
          },
          (err) => {
            // console.log(err);
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
            // console.log("globalpoint > ", data);
            this.globalpoint =
              data && data[0] && data[0].mediafinal ? data[0].mediafinal : "0";
            this.globalpoint = this.globalpoint.toFixed(2);
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    // bios
    this.api.get("bios").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Bios > ", data);
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });

    // totalglobal
    this.api.get("totalglobal").then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("total global > ", data);
          },
          (err) => {
            // console.log(err);
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
            // console.log("instaveis > ", data);
            this.instaveis =
              data && data[0] && data[0].PacientesInstaveis
                ? data[0].PacientesInstaveis
                : "0";
          },
          (err) => {
            // console.log(err);
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
            // console.log("estaveis > ", data);
            this.estaveis =
              data && data[0] && data[0].PacientesEstaveis
                ? data[0].PacientesEstaveis
                : "0";
          },
          (err) => {
            // console.log(err);
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
            // console.log("inativos > ", data);

            this.inativos =
              data && data[0] && data[0].PacientesEstaveis
                ? data[0].PacientesEstaveis
                : "0";
          },
          (err) => {
            // console.log(err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  async loadRiskFactor() {
    this.api.get("grafrisk/food/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor food > ", data);
          },
          (err) => {
            // console.log("Risk factor food API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });

    this.api.get("grafrisk/activie/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor activie > ", data);
          },
          (err) => {
            // console.log("Risk factor activie API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });

    this.api.get("grafrisk/content/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor content > ", data);
          },
          (err) => {
            // console.log("Risk factor content API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });

    this.api.get("grafrisk/treatm/" + this.year).then((res: any) => {
      if (res) {
        res.subscribe(
          (data) => {
            // console.log("Risk factor treatm > ", data);
          },
          (err) => {
            // console.log("Risk factor treatm API error -> ", err);
            this.api.proccessError(err);
          }
        );
      }
    });
  }

  mensal_RiskFactor() {
    this.api
      .get("grafrisk/food/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF food > ", data);
            },
            (err) => {
              // console.log("Mensal RF food API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

    this.api
      .get("grafrisk/activie/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF activie > ", data);
            },
            (err) => {
              // console.log("Mensal RF activie API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

    this.api
      .get("grafrisk/content/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF content > ", data);
            },
            (err) => {
              console.log("Mensal RF content API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });

    this.api
      .get("grafrisk/treatm/" + this.year + "/" + this.monthIndex)
      .then((res: any) => {
        if (res) {
          res.subscribe(
            (data) => {
              // console.log("Mensal RF treatm > ", data);
            },
            (err) => {
              console.log("Mensal RF treatm API error -> ", err);
              this.api.proccessError(err);
            }
          );
        }
      });
  }
}
