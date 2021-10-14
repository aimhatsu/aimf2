import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  public agenda = [
    {
      name: 'Seguda-feira',
      date: 'OCTOBRO 3',
      morning: '08:00 - 11:30',
      night: '01:30 - 19:00',
      morningSlots: ['08:00', '09:00', '10:50'],
      nightSlots: ['13:30', '14:10', '14:50', '15:30', '16:10', '16:50', '17:30', '18:10'],

    },
    {
      name: 'Terça-feira',
      date: 'OCTOBRO 4',
      morning: '08:00 - 11:30',
      night: '01:30 - 19:00',
      morningSlots: ['08:00', '09:00', '10:50'],
      nightSlots: ['13:30', '14:10', '14:50', '15:30', '16:10', '16:50', '17:30', '18:10'],

    },
    {
      name: 'Quinta-feira',
      date: 'OCTOBRO 5',
      morning: '08:00 - 11:30',
      night: '01:30 - 19:00',
      morningSlots: ['08:00', '09:00', '10:50'],
      nightSlots: ['13:30', '14:10', '14:50', '15:30', '16:10', '16:50', '17:30', '18:10'],

    },
    {
      name: 'Sábado',
      date: 'OCTOBRO 6',
      morning: '08:00 - 11:30',
      night: '01:30 - 19:00',
      morningSlots: ['08:00', '09:00', '10:50'],
      nightSlots: ['13:30', '14:10', '14:50', '15:30', '16:10', '16:50', '17:30', '18:10'],

    },
    {
      name: 'Sábado',
      date: 'OCTOBRO 7',
      morning: '08:00 - 11:30',
      night: '01:30 - 19:00',
      morningSlots: ['08:00', '09:00', '10:50'],
      nightSlots: ['13:30', '14:10', '14:50', '15:30', '16:10', '16:50', '17:30', '18:10'],

    },
    {
      name: 'Seguda-feira',
      date: 'OCTOBRO 8',
      morning: '08:00 - 11:30',
      night: '01:30 - 19:00',
      morningSlots: ['08:00', '09:00', '10:50'],
      nightSlots: ['13:30', '14:10', '14:50', '15:30', '16:10', '16:50', '17:30', '18:10'],

    },
    {
      name: 'Seguda-feira',
      date: 'OCTOBRO 9',
      morning: '08:00 - 11:30',
      night: '01:30 - 19:00',
      morningSlots: ['08:00', '09:00', '10:50'],
      nightSlots: ['13:30', '14:10', '14:50', '15:30', '16:10', '16:50', '17:30', '18:10'],

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
