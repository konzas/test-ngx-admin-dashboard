import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { GanttEditorComponent, GanttEditorOptions } from "./tpl/ng-gantt";
import { GanttChartService } from "./ganttChartService"
import {Plan} from "./plan"
// import * as $ from "jquery";
import { Chart } from 'angular-highcharts';
//import * as stomp from 'stompts';
//import { MessageQueueService } from '../rabbitMq/message-queue.service';

//import { Queue, AmqpQueue, AmqpClient  } from 'coconspirators';
// import { Rabbit } from 'rabbit-queue';
import * as signalR from "@aspnet/signalr";


@Component({
  selector: 'ngx-gantt',
    templateUrl: './ganttChart.component.html',
    styleUrls:['./ganttChart.component.scss'],
  providers: [GanttChartService]
})
export class GanttChartComponent implements OnInit {
 
  public editorOptions: any = {};
    public data: any;
  public progress: any;
  public quality: any;
  public generation: any;
  public isGoodPlan: boolean;

  @ViewChild('editor') editor: GanttEditorComponent;
  @ViewChild('burndown') BurnDownChart: any;
  @ViewChild('chart') chart: Chart;

  constructor( public fb: FormBuilder
             , private ganttChartService: GanttChartService
           //  , private messageQueue: MessageQueueService
             ) {
     
  }

  ngOnInit() {
     //this.data = this.ganttChartService.getLocalPlan();
     this.subscribeUpdatePlan();

     this.ganttChartService.getPLan().subscribe((res: any) => {
       var d: Plan = res.gantt;
       this.data = d.tasks.map<any>(pl => {

         //console.log(pl.title + " " + this.getLocalDateString(pl.startDate) + " " + this.getLocalDateString(pl.finishDate));
         //console.log(pl.title + " " + (pl.requiredTaskIds == null ? '0' : pl.requiredTaskIds[0]));
         //console.log(`time1: ${this.getLocalDateString(pl.startDate)}`);
         //console.log(`time2: ${pl.startDate}`);

         var a = {
           'pID': pl.id,
           'pName': pl.title.concat(" | ", pl.description),
           'pStart': pl.startDate, //this.getLocalDateString(pl.startDate),
           'pEnd': pl.finishDate, //this.getLocalDateString(pl.finishDate),
           'pClass': this.getColorByResource(pl.username),
           'pLink': '',
           'pMile': 0,
           'pRes': pl.username,
           'pComp': 0,
           'pGroup': 0,
           'pParent': 0,
           'pOpen': 1,
           'pDepend': pl.requiredTaskIds == null ? '' : (pl.requiredTaskIds /*+ "SS"*/),
           'pCaption': '',
           'pNotes': pl.description/* + " Deadline: " + this.getLocalDateString(pl.deadlineDate)*/
         }
         return a;
       });

     //  this.drawBurnDown(res.burndawn.days, res.burndawn.data1, res.burndawn.data2);
 });

   }

  getPlanButton(event: Event) {
    console.log(`click`);

    this.ganttChartService.startPLan().subscribe((_:any) => {
      console.log(`ok`);

    });
   }
  getColorByResource(name: string) {
    if (name == 'konzas') return 'gtaskblue';
    if (name == 'mzzziry') return 'gtaskpurple';
    if (name == 'sagrafa') return 'gtaskgreen';
    if (name == 'anyarik') return 'gtaskred';
    //if (name == 'konzas') return 'myColor1';
    //if (name == 'mzzziry') return 'myColor2';
    //if (name == 'sagrafa') return 'myColor3';
    //if (name == 'anyarik') return 'myColor4';
    //gtaskblue gtaskpurple gtaskgreen gtaskpink
  }

  getLocalDateString(d: Date): string {
    var a = new Date(d);

    //console.log(a.toLocaleTimeString("ru")); 

    return a.getFullYear().toString().concat( "-").concat((a.getMonth() + 1).toString()).concat( "-").concat(a.getDate().toString()).concat( " ").concat(a.toLocaleTimeString("ru")) /*+ a.getHours().toString() + ":" + a.getMinutes().toString()*/;
  }

   subscribeUpdatePlan() {
    //const subscription = await this.messageQueue.subscribe('/topic/test.#', this.onMessage.bind(this));
      //console.log(`Subscribed: ${subscription.id}`);
      var connection = new signalR.HubConnectionBuilder()
                                  .withUrl("http://84.201.154.141/main/plan_page")
                                  .build();
          
       connection.start().catch(err => document.write(err));
       //console.log(`Subscribed: ${subscription.id}`);

       connection.on("StartPlanningEvent", (plan: any) => {
          console.log(`Plan: ${plan}`);
     });
       connection.on("test", (plan: any) => {
         console.log(`test message: ${plan}`);
       });

        connection.on("PlanProgressEvent", (plan: any) => {
          console.log(`Plan: ${plan}`);
          console.log(`progress: ${plan.progress}`);
          console.log(`quality: ${plan.quality}`);

          this.isGoodPlan = plan.progress > 90;
          this.progress = plan.progress;
          this.quality = plan.quality;
          this.generation = plan.generation;

          var d: Plan = plan.gantt;
          this.data = d.tasks.map<any>(pl => {

            //console.log(pl.title + " " + this.getLocalDateString(pl.startDate) + " " + this.getLocalDateString(pl.finishDate));
            //console.log(pl.title + " " + (pl.requiredTaskIds == null ? '0' : pl.requiredTaskIds[0]));
            //console.log(`time1: ${this.getLocalDateString(pl.startDate)}`);
            //console.log(`time2: ${pl.startDate}`);

            var a = {
              'pID': pl.id,
              'pName': pl.title.concat(" | ", pl.description),
              'pStart': pl.startDate, //this.getLocalDateString(pl.startDate),
              'pEnd': pl.finishDate, //this.getLocalDateString(pl.finishDate),
              'pClass': this.getColorByResource(pl.username),
              'pLink': '',
              'pMile': 0,
              'pRes': pl.username,
              'pComp': 0,
              'pGroup': 0,
              'pParent': 0,
              'pOpen': 1,
              'pDepend': pl.requiredTaskIds == null ? '' : (pl.requiredTaskIds /*+ "SS"*/),
              'pCaption': '',
              'pNotes': pl.description/* + " Deadline: " + this.getLocalDateString(pl.deadlineDate)*/
            }
            return a;
          });


          //this.drawBurnDown(plan.burndawn.days, plan.burndawn.data1, plan.burndawn.data2);

       });
  }

  // onMessage(frame: stomp.Frame) {
  //   console.log("new message" + frame.body);
  // }

  drawBurnDown(xArray: Array<string>, dataArray1: Array<number>, dataArray2: Array<number>) {
    this.chart = new Chart({
      title: {
        text: 'Burndown Chart',
        x: -20 //center
      },
      colors: ['blue', 'red'],
      plotOptions: {
        line: {
          lineWidth: 3
        }
      },
      subtitle: {
        text: 'Sprint 1',
        x: -20
      },
      xAxis: {
        categories: xArray
        //['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
        //             'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12']
      },
      yAxis: {
        title: {
          text: 'Hours'
        },
        plotLines: [{
          value: 0,
          width: 1
        }]
      },
      tooltip: {
        valueSuffix: ' hrs',
        crosshairs: true,
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        type:"line",
        name: 'Plan Burn',
        color: 'rgba(255,0,0,0.25)',
        lineWidth: 2,
        data: dataArray1
          //[110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]
      }, {
        type: "line",
        name: 'Ideal Burn',
          color: 'rgba(0,0,255,0.25)',
        lineWidth: 2,
        data: dataArray2
        //[110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]
      } ]});
   
    // add point to chart serie
    // add() {
    //   this.chart.addPoint(Math.floor(Math.random() * 10));
    // }
  }

  getTotalTime(d:Date): number {
    return d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds();
  }
}
