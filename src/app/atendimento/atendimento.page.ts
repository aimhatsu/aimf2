import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api/api.service";

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.page.html',
  styleUrls: ['./atendimento.page.scss'],
})
export class AtendimentoPage implements OnInit {

  view:any = 'prontuario';
  subview:any = 'hoje';
  totalpati:any; atendidos:any; atender:any;
  prontuarios:any;

  constructor(public api: ApiService) { 
    this.loadTotals();
    this.loadProntuarios()
  }

  ngOnInit() {
  }

  loadProntuarios(){
    this.api.get('prontuarios').then((sub)=>{
      console.log(sub);
      
      if(sub){
        sub.subscribe((res:any)=>{
          this.prontuarios = [];
          console.log("Prontuarios/ ", this.prontuarios);

          res.forEach(element => {
            this.api.get(`prontuario/historic/${element.paciente}/0/300`).then((sub)=>{
              if (sub) {
                sub.subscribe((h)=>{
                  this.prontuarios.push({
                    historico: h, seg: 'prontuario', ...element,
                  })
                })
              }
            })
          });
        })
      }
    }, (err)=>{
      console.log(err);
    })
  }


  loadTotals(){
    //get /totalpati
    this.api.get('totalpati').then((res:any)=>{
      
      if(res){
        res.subscribe((data)=>{
          console.log("totalpati > ", data);
          this.totalpati = (data && data[0] && data[0].totalpatients)? data[0].totalpatients : '0'

        }, (err)=>{
          console.log(err);
          
        })
      }
    })

    //get /atendidos
    this.api.get('atendidos').then((res:any)=>{
      
      if(res){
        res.subscribe((data)=>{
          console.log("atendimentos > ", data);
          this.atendidos = (data && data[0] && data[0].atendidos)? data[0].atendidos : '0'
        }, (err)=>{
          console.log(err);
        })
      }
    })


    //get /totalpati
    this.api.get('atender').then((res:any)=>{
      
      if(res){
        res.subscribe((data)=>{
          console.log("atender > ", data);

          this.atender = (data && data[0] && data[0].atender)? data[0].atender : '0'
        }, (err)=>{
          console.log(err);
          
        })
      }
    })


  }

}
