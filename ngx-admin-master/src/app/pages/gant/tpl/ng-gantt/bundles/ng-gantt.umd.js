(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('../../jsgantt-improved'), require('@angular/common')) :
      typeof define === 'function' && define.amd ? define('ng-gantt', ['exports', '@angular/core', '../../jsgantt-improved', '@angular/common'], factory) :
    (factory((global['ng-gantt'] = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,core,JSGantt,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GanttEditorComponent = (function () {
        function GanttEditorComponent() {
            this.id = 'anggantteditor' + Math.floor(Math.random() * 1000000);
            this.optionsChanged = false;
            this.options = new GanttEditorOptions();
        }
        Object.defineProperty(GanttEditorComponent.prototype, "data", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._data = value;
                if (this.editor) {
                    this.destroy();
                    this.ngOnInit();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GanttEditorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ optionsBefore = this.options;
                if (!this.optionsChanged && this.editor) {
                    optionsBefore = this.editor.options;
                }
                // document.getElementById('embedded-Gantt')
                var /** @type {?} */ g = this.editor = new JSGantt.GanttChart(this.ganttEditorContainer.nativeElement, 'week');
                if (g.getDivId() != null) {
                    // JSGantt.parseJSON('./fixes/data.json', g);
                    //g.setOptions({
                    //    vCaptionType: 'Complete',
                    //    // Set to Show Caption : None,Caption,Resource,Duration,Complete,
                    //    vQuarterColWidth: 36,
                    //    vDateTaskDisplayFormat: 'day dd month yyyy',
                    //    // Shown in tool tip box
                    //    vDayMajorDateDisplayFormat: 'mon yyyy - Week ww',
                    //    // Set format to display dates in the "Major" header of the "Day" view
                    //    vWeekMinorDateDisplayFormat: 'dd mon',
                    //    // Set format to display dates in the "Minor" header of the "Week" view
                    //    vShowTaskInfoLink: 1,
                    //    // Show link in tool tip (0/1)
                    //    vShowEndWeekDate: 0,
                    //    // Show/Hide the date for the last day of the week in header for
                    //    vUseSingleCell: 10000,
                    //    // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers
                    //    vFormatArr: ['Day', 'Week', 'Month', 'Quarter'],
                    //});

                  g.setOptions(this.options);
                    if (this._data && this._data.forEach) {
                        this._data.forEach(function (row) {
                            row.pGantt = g;
                            g.AddTaskItemObject(row);
                        });
                    }
                    g.Draw();
                }
            };
        /**
         * @param {?} newOptions
         * @return {?}
         */
        GanttEditorComponent.prototype.setOptions = /**
         * @param {?} newOptions
         * @return {?}
         */
            function (newOptions) {
                if (this.editor) {
                    this.destroy();
                }
                this.optionsChanged = true;
                this.options = newOptions;
                this.ngOnInit();
            };
        /**
         * @return {?}
         */
        GanttEditorComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                // this.editor.destroy();
            };
        GanttEditorComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ng-gantt',
                        template: '<div [id]="id" #ganttEditorContainer></div>'
                    },] },
        ];
        /** @nocollapse */
        GanttEditorComponent.ctorParameters = function () { return []; };
        GanttEditorComponent.propDecorators = {
            ganttEditorContainer: [{ type: core.ViewChild, args: ['ganttEditorContainer',] }],
            options: [{ type: core.Input }],
            data: [{ type: core.Input, args: ['data',] }]
        };
        return GanttEditorComponent;
    }());
    var GanttEditorOptions = (function () {
        // public onEditable: (node: GanttEditorTreeNode | {}) => boolean | { field: boolean, value: boolean };
        // public theme: Number;
        // public language: String;
        // public languages: Object;
        function GanttEditorOptions() {
            // this.escapeUnicode = false;
            // this.sortObjectKeys = false;
            // this.history = true;
        }
        return GanttEditorOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgGanttEditorModule = (function () {
        function NgGanttEditorModule() {
        }
        /**
         * @return {?}
         */
        NgGanttEditorModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: NgGanttEditorModule,
                    providers: []
                };
            };
        NgGanttEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            GanttEditorComponent
                        ],
                        exports: [
                            GanttEditorComponent
                        ]
                    },] },
        ];
        return NgGanttEditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.NgGanttEditorModule = NgGanttEditorModule;
    exports.GanttEditorComponent = GanttEditorComponent;
    exports.GanttEditorOptions = GanttEditorOptions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ2FudHQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1nYW50dC9nYW50dC9nYW50dC5jb21wb25lbnQudHMiLCJuZzovL25nLWdhbnR0L2xpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBKU0dhbnR0IH0gZnJvbSAnanNnYW50dC1pbXByb3ZlZCc7XG5pbXBvcnQgKiBhcyBKU0dhbnR0IGZyb20gJ2pzZ2FudHQtaW1wcm92ZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25nLWdhbnR0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IFtpZF09XCJpZFwiICNnYW50dEVkaXRvckNvbnRhaW5lcj48L2Rpdj4nXG59KVxuZXhwb3J0IGNsYXNzIEdhbnR0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcbiAgcHVibGljIGlkID0gJ2FuZ2dhbnR0ZWRpdG9yJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICBwdWJsaWMgb3B0aW9uc0NoYW5nZWQgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdnYW50dEVkaXRvckNvbnRhaW5lcicpIGdhbnR0RWRpdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX2RhdGE7XG5cbiAgQElucHV0KCkgb3B0aW9uczogR2FudHRFZGl0b3JPcHRpb25zID0gbmV3IEdhbnR0RWRpdG9yT3B0aW9ucygpO1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YSh2YWx1ZTogT2JqZWN0KSB7XG4gICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBvcHRpb25zQmVmb3JlID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICghdGhpcy5vcHRpb25zQ2hhbmdlZCAmJiB0aGlzLmVkaXRvcikge1xuICAgICAgb3B0aW9uc0JlZm9yZSA9IHRoaXMuZWRpdG9yLm9wdGlvbnM7XG4gICAgfVxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWJlZGRlZC1HYW50dCcpXG4gICAgY29uc3QgZyA9IHRoaXMuZWRpdG9yID0gbmV3ICg8YW55PkpTR2FudHQpLkdhbnR0Q2hhcnQodGhpcy5nYW50dEVkaXRvckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnd2VlaycpO1xuXG4gICAgaWYgKGcuZ2V0RGl2SWQoKSAhPSBudWxsKSB7XG5cbiAgICAgIC8vIEpTR2FudHQucGFyc2VKU09OKCcuL2ZpeGVzL2RhdGEuanNvbicsIGcpO1xuXG4gICAgICBnLnNldE9wdGlvbnMoe1xuICAgICAgICB2Q2FwdGlvblR5cGU6ICdDb21wbGV0ZScsICAvLyBTZXQgdG8gU2hvdyBDYXB0aW9uIDogTm9uZSxDYXB0aW9uLFJlc291cmNlLER1cmF0aW9uLENvbXBsZXRlLFxuICAgICAgICB2UXVhcnRlckNvbFdpZHRoOiAzNixcbiAgICAgICAgdkRhdGVUYXNrRGlzcGxheUZvcm1hdDogJ2RheSBkZCBtb250aCB5eXl5JywgLy8gU2hvd24gaW4gdG9vbCB0aXAgYm94XG4gICAgICAgIHZEYXlNYWpvckRhdGVEaXNwbGF5Rm9ybWF0OiAnbW9uIHl5eXkgLSBXZWVrIHd3JywgLy8gU2V0IGZvcm1hdCB0byBkaXNwbGF5IGRhdGVzIGluIHRoZSBcIk1ham9yXCIgaGVhZGVyIG9mIHRoZSBcIkRheVwiIHZpZXdcbiAgICAgICAgdldlZWtNaW5vckRhdGVEaXNwbGF5Rm9ybWF0OiAnZGQgbW9uJywgLy8gU2V0IGZvcm1hdCB0byBkaXNwbGF5IGRhdGVzIGluIHRoZSBcIk1pbm9yXCIgaGVhZGVyIG9mIHRoZSBcIldlZWtcIiB2aWV3XG4gICAgICAgIHZTaG93VGFza0luZm9MaW5rOiAxLCAvLyBTaG93IGxpbmsgaW4gdG9vbCB0aXAgKDAvMSlcbiAgICAgICAgdlNob3dFbmRXZWVrRGF0ZTogMCwgIC8vIFNob3cvSGlkZSB0aGUgZGF0ZSBmb3IgdGhlIGxhc3QgZGF5IG9mIHRoZSB3ZWVrIGluIGhlYWRlciBmb3JcbiAgICAgICAgdlVzZVNpbmdsZUNlbGw6IDEwMDAwLFxuICAgICAgICAvLyBFdmVuIHdpdGggc2V0VXNlU2luZ2xlQ2VsbCB1c2luZyBIb3VyIGZvcm1hdCBvbiBzdWNoIGEgbGFyZ2UgY2hhcnQgY2FuIGNhdXNlIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzXG4gICAgICAgIHZGb3JtYXRBcnI6IFsnRGF5JywgJ1dlZWsnLCAnTW9udGgnLCAnUXVhcnRlciddLFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLmZvckVhY2gpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgcm93LnBHYW50dCA9IGc7XG4gICAgICAgICAgZy5BZGRUYXNrSXRlbU9iamVjdChyb3cpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZy5EcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHVibGljIGdldCgpOiBKU09OIHtcbiAgLy8gICByZXR1cm4gdGhpcy5lZGl0b3IuZ2V0KCk7XG4gIC8vIH1cblxuICBwdWJsaWMgc2V0T3B0aW9ucyhuZXdPcHRpb25zOiBHYW50dEVkaXRvck9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIC8vIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FudHRFZGl0b3JPcHRpb25zIHtcblxuICAvLyBwdWJsaWMgb25FZGl0YWJsZTogKG5vZGU6IEdhbnR0RWRpdG9yVHJlZU5vZGUgfCB7fSkgPT4gYm9vbGVhbiB8IHsgZmllbGQ6IGJvb2xlYW4sIHZhbHVlOiBib29sZWFuIH07XG4gIC8vIHB1YmxpYyB0aGVtZTogTnVtYmVyO1xuICAvLyBwdWJsaWMgbGFuZ3VhZ2U6IFN0cmluZztcbiAgLy8gcHVibGljIGxhbmd1YWdlczogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMuZXNjYXBlVW5pY29kZSA9IGZhbHNlO1xuICAgIC8vIHRoaXMuc29ydE9iamVjdEtleXMgPSBmYWxzZTtcbiAgICAvLyB0aGlzLmhpc3RvcnkgPSB0cnVlO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR2FudHRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2dhbnR0L2dhbnR0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR2FudHRFZGl0b3JDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEdhbnR0RWRpdG9yQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdHYW50dEVkaXRvck1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0dhbnR0RWRpdG9yTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIigoSlNHYW50dCkpLkdhbnR0Q2hhcnQiLCJDb21wb25lbnQiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUE4QkU7c0JBakJZLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQztrQ0FDMUMsS0FBSzsyQkFNVSxJQUFJLGtCQUFrQixFQUFFO1NBWTlEO1FBWEQsc0JBQ0ksc0NBQUk7Ozs7Z0JBRFIsVUFDUyxLQUFhO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7OztXQUFBOzs7O1FBTUQsdUNBQVE7OztZQUFSO2dCQUNFLHFCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN2QyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ3JDOztnQkFFRCxxQkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJQSxrQkFBeUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUV2RyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLEVBQUU7O29CQUl4QixDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUNYLFlBQVksRUFBRSxVQUFVOzt3QkFDeEIsZ0JBQWdCLEVBQUUsRUFBRTt3QkFDcEIsc0JBQXNCLEVBQUUsbUJBQW1COzt3QkFDM0MsMEJBQTBCLEVBQUUsb0JBQW9COzt3QkFDaEQsMkJBQTJCLEVBQUUsUUFBUTs7d0JBQ3JDLGlCQUFpQixFQUFFLENBQUM7O3dCQUNwQixnQkFBZ0IsRUFBRSxDQUFDOzt3QkFDbkIsY0FBYyxFQUFFLEtBQUs7O3dCQUVyQixVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7cUJBQ2hELENBQUMsQ0FBQztvQkFDSCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs0QkFDcEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUMxQixDQUFDLENBQUE7cUJBQ0g7b0JBQ0QsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNWO2FBQ0Y7Ozs7O1FBTU0seUNBQVU7Ozs7c0JBQUMsVUFBOEI7Z0JBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2hCO2dCQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztRQUdYLHNDQUFPOzs7Ozs7O29CQTNFZkMsY0FBUyxTQUFDOzt3QkFFVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDZDQUE2QztxQkFDeEQ7Ozs7OzJDQU1FQyxjQUFTLFNBQUMsc0JBQXNCOzhCQUloQ0MsVUFBSzsyQkFDTEEsVUFBSyxTQUFDLE1BQU07O21DQXJCZjs7UUFzRkE7Ozs7O1FBT0U7Ozs7U0FJQztpQ0FqR0g7UUFtR0M7Ozs7OztBQ25HRDs7Ozs7O1FBaUJnQiwyQkFBTzs7OztnQkFFbkIsT0FBTztvQkFDTCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUUsRUFDVjtpQkFDRixDQUFDOzs7b0JBbkJMQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osb0JBQW9CO3lCQUNyQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1Asb0JBQW9CO3lCQUNyQjtxQkFDRjs7a0NBZEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
