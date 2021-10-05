import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from "../components/components.module";
import { PacientesPage } from './pacientes.page';

import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: PacientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 35,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      outerStrokeColor: "#2694A3",
      innerStrokeColor: "#2694A3",
      animationDuration: 300,
    })
  ],
  declarations: [PacientesPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PacientesPageModule {}
