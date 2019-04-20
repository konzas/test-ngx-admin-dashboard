import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { GanttChart } from '../../jsgantt-improved';
//import { GanttChart } from 'jsgantt-improved';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GanttEditorComponent {
    constructor() {
        this.id = 'anggantteditor' + Math.floor(Math.random() * 1000000);
        this.optionsChanged = false;
        this.options = new GanttEditorOptions();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
        if (this.editor) {
            this.destroy();
            this.ngOnInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ optionsBefore = this.options;
        if (!this.optionsChanged && this.editor) {
            optionsBefore = this.editor.options;
        }
        // document.getElementById('embedded-Gantt')
        const /** @type {?} */ g = this.editor = new GanttChart(this.ganttEditorContainer.nativeElement, 'week');
        if (g.getDivId() != null) {
            // JSGantt.parseJSON('./fixes/data.json', g);
            // g.setOptions({
            //     vCaptionType: 'Complete',
            //     // Set to Show Caption : None,Caption,Resource,Duration,Complete,
            //     vQuarterColWidth: 36,
            //     vDateTaskDisplayFormat: 'day dd month yyyy',
            //     // Shown in tool tip box
            //     vDayMajorDateDisplayFormat: 'mon yyyy - Week ww',
            //     // Set format to display dates in the "Major" header of the "Day" view
            //     vWeekMinorDateDisplayFormat: 'dd mon',
            //     // Set format to display dates in the "Minor" header of the "Week" view
            //     vShowTaskInfoLink: 1,
            //     // Show link in tool tip (0/1)
            //     vShowEndWeekDate: 0,
            //     // Show/Hide the date for the last day of the week in header for
            //     vUseSingleCell: 10000,
            //     // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers
            //     vFormatArr: ['Day', 'Week', 'Month', 'Quarter'],
            // });

            g.setOptions(this.options);
            
            if (this._data && this._data.forEach) {
                this._data.forEach(row => {
                    row.pGantt = g;
                    g.AddTaskItemObject(row);
                });
            }
            g.Draw();
        }
    }
    /**
     * @param {?} newOptions
     * @return {?}
     */
    setOptions(newOptions) {
        if (this.editor) {
            this.destroy();
        }
        this.optionsChanged = true;
        this.options = newOptions;
        this.ngOnInit();
    }
    /**
     * @return {?}
     */
    destroy() {
        // this.editor.destroy();
    }
}
GanttEditorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ng-gantt',
                template: '<div [id]="id" #ganttEditorContainer></div>'
            },] },
];
/** @nocollapse */
GanttEditorComponent.ctorParameters = () => [];
GanttEditorComponent.propDecorators = {
    ganttEditorContainer: [{ type: ViewChild, args: ['ganttEditorContainer',] }],
    options: [{ type: Input }],
    data: [{ type: Input, args: ['data',] }]
};
class GanttEditorOptions {
    constructor() {
        // this.escapeUnicode = false;
        // this.sortObjectKeys = false;
        // this.history = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgGanttEditorModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgGanttEditorModule,
            providers: []
        };
    }
}
NgGanttEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    GanttEditorComponent
                ],
                exports: [
                    GanttEditorComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgGanttEditorModule, GanttEditorComponent, GanttEditorOptions };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ2FudHQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWdhbnR0L2dhbnR0L2dhbnR0LmNvbXBvbmVudC50cyIsIm5nOi8vbmctZ2FudHQvbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEpTR2FudHQgfSBmcm9tICdqc2dhbnR0LWltcHJvdmVkJztcbmltcG9ydCAqIGFzIEpTR2FudHQgZnJvbSAnanNnYW50dC1pbXByb3ZlZCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmctZ2FudHQnLFxuICB0ZW1wbGF0ZTogJzxkaXYgW2lkXT1cImlkXCIgI2dhbnR0RWRpdG9yQ29udGFpbmVyPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgR2FudHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVkaXRvcjogYW55O1xuICBwdWJsaWMgaWQgPSAnYW5nZ2FudHRlZGl0b3InICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIHB1YmxpYyBvcHRpb25zQ2hhbmdlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2dhbnR0RWRpdG9yQ29udGFpbmVyJykgZ2FudHRFZGl0b3JDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfZGF0YTtcblxuICBASW5wdXQoKSBvcHRpb25zOiBHYW50dEVkaXRvck9wdGlvbnMgPSBuZXcgR2FudHRFZGl0b3JPcHRpb25zKCk7XG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKHZhbHVlOiBPYmplY3QpIHtcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG9wdGlvbnNCZWZvcmUgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnNDaGFuZ2VkICYmIHRoaXMuZWRpdG9yKSB7XG4gICAgICBvcHRpb25zQmVmb3JlID0gdGhpcy5lZGl0b3Iub3B0aW9ucztcbiAgICB9XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYmVkZGVkLUdhbnR0JylcbiAgICBjb25zdCBnID0gdGhpcy5lZGl0b3IgPSBuZXcgKDxhbnk+SlNHYW50dCkuR2FudHRDaGFydCh0aGlzLmdhbnR0RWRpdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd3ZWVrJyk7XG5cbiAgICBpZiAoZy5nZXREaXZJZCgpICE9IG51bGwpIHtcblxuICAgICAgLy8gSlNHYW50dC5wYXJzZUpTT04oJy4vZml4ZXMvZGF0YS5qc29uJywgZyk7XG5cbiAgICAgIGcuc2V0T3B0aW9ucyh7XG4gICAgICAgIHZDYXB0aW9uVHlwZTogJ0NvbXBsZXRlJywgIC8vIFNldCB0byBTaG93IENhcHRpb24gOiBOb25lLENhcHRpb24sUmVzb3VyY2UsRHVyYXRpb24sQ29tcGxldGUsXG4gICAgICAgIHZRdWFydGVyQ29sV2lkdGg6IDM2LFxuICAgICAgICB2RGF0ZVRhc2tEaXNwbGF5Rm9ybWF0OiAnZGF5IGRkIG1vbnRoIHl5eXknLCAvLyBTaG93biBpbiB0b29sIHRpcCBib3hcbiAgICAgICAgdkRheU1ham9yRGF0ZURpc3BsYXlGb3JtYXQ6ICdtb24geXl5eSAtIFdlZWsgd3cnLCAvLyBTZXQgZm9ybWF0IHRvIGRpc3BsYXkgZGF0ZXMgaW4gdGhlIFwiTWFqb3JcIiBoZWFkZXIgb2YgdGhlIFwiRGF5XCIgdmlld1xuICAgICAgICB2V2Vla01pbm9yRGF0ZURpc3BsYXlGb3JtYXQ6ICdkZCBtb24nLCAvLyBTZXQgZm9ybWF0IHRvIGRpc3BsYXkgZGF0ZXMgaW4gdGhlIFwiTWlub3JcIiBoZWFkZXIgb2YgdGhlIFwiV2Vla1wiIHZpZXdcbiAgICAgICAgdlNob3dUYXNrSW5mb0xpbms6IDEsIC8vIFNob3cgbGluayBpbiB0b29sIHRpcCAoMC8xKVxuICAgICAgICB2U2hvd0VuZFdlZWtEYXRlOiAwLCAgLy8gU2hvdy9IaWRlIHRoZSBkYXRlIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIHdlZWsgaW4gaGVhZGVyIGZvclxuICAgICAgICB2VXNlU2luZ2xlQ2VsbDogMTAwMDAsXG4gICAgICAgIC8vIEV2ZW4gd2l0aCBzZXRVc2VTaW5nbGVDZWxsIHVzaW5nIEhvdXIgZm9ybWF0IG9uIHN1Y2ggYSBsYXJnZSBjaGFydCBjYW4gY2F1c2UgaXNzdWVzIGluIHNvbWUgYnJvd3NlcnNcbiAgICAgICAgdkZvcm1hdEFycjogWydEYXknLCAnV2VlaycsICdNb250aCcsICdRdWFydGVyJ10sXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuZm9yRWFjaCkge1xuICAgICAgICB0aGlzLl9kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICByb3cucEdhbnR0ID0gZztcbiAgICAgICAgICBnLkFkZFRhc2tJdGVtT2JqZWN0KHJvdyk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBnLkRyYXcoKTtcbiAgICB9XG4gIH1cblxuICAvLyBwdWJsaWMgZ2V0KCk6IEpTT04ge1xuICAvLyAgIHJldHVybiB0aGlzLmVkaXRvci5nZXQoKTtcbiAgLy8gfVxuXG4gIHB1YmxpYyBzZXRPcHRpb25zKG5ld09wdGlvbnM6IEdhbnR0RWRpdG9yT3B0aW9ucykge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9uc0NoYW5nZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgLy8gdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW50dEVkaXRvck9wdGlvbnMge1xuXG4gIC8vIHB1YmxpYyBvbkVkaXRhYmxlOiAobm9kZTogR2FudHRFZGl0b3JUcmVlTm9kZSB8IHt9KSA9PiBib29sZWFuIHwgeyBmaWVsZDogYm9vbGVhbiwgdmFsdWU6IGJvb2xlYW4gfTtcbiAgLy8gcHVibGljIHRoZW1lOiBOdW1iZXI7XG4gIC8vIHB1YmxpYyBsYW5ndWFnZTogU3RyaW5nO1xuICAvLyBwdWJsaWMgbGFuZ3VhZ2VzOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdGhpcy5lc2NhcGVVbmljb2RlID0gZmFsc2U7XG4gICAgLy8gdGhpcy5zb3J0T2JqZWN0S2V5cyA9IGZhbHNlO1xuICAgIC8vIHRoaXMuaGlzdG9yeSA9IHRydWU7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHYW50dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZ2FudHQvZ2FudHQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHYW50dEVkaXRvckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgR2FudHRFZGl0b3JDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0dhbnR0RWRpdG9yTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nR2FudHRFZGl0b3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiKC8qKiBAdHlwZSB7P30gKi8gKEpTR2FudHQpKS5HYW50dENoYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBOEJFO2tCQWpCWSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7OEJBQzFDLEtBQUs7dUJBTVUsSUFBSSxrQkFBa0IsRUFBRTtLQVk5RDs7Ozs7SUFYRCxJQUNJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtLQUNGOzs7O0lBTUQsUUFBUTtRQUNOLHFCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdkMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3JDOztRQUVELHVCQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlBLFVBQXlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV2RyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLEVBQUU7O1lBSXhCLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLFVBQVU7O2dCQUN4QixnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixzQkFBc0IsRUFBRSxtQkFBbUI7O2dCQUMzQywwQkFBMEIsRUFBRSxvQkFBb0I7O2dCQUNoRCwyQkFBMkIsRUFBRSxRQUFROztnQkFDckMsaUJBQWlCLEVBQUUsQ0FBQzs7Z0JBQ3BCLGdCQUFnQixFQUFFLENBQUM7O2dCQUNuQixjQUFjLEVBQUUsS0FBSzs7Z0JBRXJCLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUNoRCxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUc7b0JBQ3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDMUIsQ0FBQyxDQUFBO2FBQ0g7WUFDRCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNGOzs7OztJQU1NLFVBQVUsQ0FBQyxVQUE4QjtRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR1gsT0FBTzs7Ozs7WUEzRWYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLDZDQUE2QzthQUN4RDs7Ozs7bUNBTUUsU0FBUyxTQUFDLHNCQUFzQjtzQkFJaEMsS0FBSzttQkFDTCxLQUFLLFNBQUMsTUFBTTs7O0lBd0ViOzs7O0tBSUM7Q0FFRjs7Ozs7O0FDbkdEOzs7O0lBaUJTLE9BQU8sT0FBTztRQUVuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUM7Ozs7WUFuQkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7aUJBQ3JCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7OzsifQ==
