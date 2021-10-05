import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from "../components/components.module";

import { NgCircleProgressModule } from 'ng-circle-progress';

import * as PlotlyJS from 'plotly.js-dist';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PlotlyModule,
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
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
