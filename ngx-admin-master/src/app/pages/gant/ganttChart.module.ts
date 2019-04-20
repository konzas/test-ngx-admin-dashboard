import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgGanttEditorModule } from './tpl/ng-gantt'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { GanttChartComponent } from './ganttChart.component';
import { GanttChartComponent } from './ganttChart.component';

//import { TextMaskModule } from 'angular2-text-mask';
import { GanttChartService } from "./ganttChartService"
import { ChartModule } from 'angular-highcharts';
import {ProgressBarModule} from "angular-progress-bar"
import { CommonModule } from '@angular/common';

//import { MessageComponent } from '../rabbitMq/message/message.component';

@NgModule({
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgGanttEditorModule,
    ChartModule,
    ProgressBarModule
    ],
  declarations: [GanttChartComponent],
  bootstrap: [GanttChartComponent],
  providers: [GanttChartService]
})
export class GanttChartModule { }
