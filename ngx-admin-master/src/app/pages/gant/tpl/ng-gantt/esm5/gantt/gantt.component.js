/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as JSGantt from '../../../jsgantt-improved';
//import * as JSGantt from 'jsgantt-improved';
var GanttEditorComponent = /** @class */ (function () {
    function GanttEditorComponent() {
        this.id = 'anggantteditor' + Math.floor(Math.random() * 1000000);
        this.optionsChanged = false;
        this.options = new GanttEditorOptions();
    }
    Object.defineProperty(GanttEditorComponent.prototype, "data", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        var /** @type {?} */ g = this.editor = new (/** @type {?} */ (JSGantt)).GanttChart(this.ganttEditorContainer.nativeElement, 'week');
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
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ng-gantt',
                    template: '<div [id]="id" #ganttEditorContainer></div>'
                },] },
    ];
    /** @nocollapse */
    GanttEditorComponent.ctorParameters = function () { return []; };
    GanttEditorComponent.propDecorators = {
        ganttEditorContainer: [{ type: ViewChild, args: ['ganttEditorContainer',] }],
        options: [{ type: Input }],
        data: [{ type: Input, args: ['data',] }]
    };
    return GanttEditorComponent;
}());
export { GanttEditorComponent };
function GanttEditorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    GanttEditorComponent.prototype.editor;
    /** @type {?} */
    GanttEditorComponent.prototype.id;
    /** @type {?} */
    GanttEditorComponent.prototype.optionsChanged;
    /** @type {?} */
    GanttEditorComponent.prototype.ganttEditorContainer;
    /** @type {?} */
    GanttEditorComponent.prototype._data;
    /** @type {?} */
    GanttEditorComponent.prototype.options;
}
var GanttEditorOptions = /** @class */ (function () {
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
export { GanttEditorOptions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZ2FudHQvIiwic291cmNlcyI6WyJnYW50dC9nYW50dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQ2hELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sS0FBSyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7O0lBMEIxQztrQkFqQlksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDOzhCQUMxQyxLQUFLO3VCQU1VLElBQUksa0JBQWtCLEVBQUU7S0FZOUQ7SUFYRCxzQkFDSSxzQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7U0FDRjs7O09BQUE7Ozs7SUFNRCx1Q0FBUTs7O0lBQVI7UUFDRSxxQkFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3JDOztRQUVELHFCQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQU0sT0FBTyxFQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBSXpCLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLFVBQVU7O2dCQUN4QixnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixzQkFBc0IsRUFBRSxtQkFBbUI7O2dCQUMzQywwQkFBMEIsRUFBRSxvQkFBb0I7O2dCQUNoRCwyQkFBMkIsRUFBRSxRQUFROztnQkFDckMsaUJBQWlCLEVBQUUsQ0FBQzs7Z0JBQ3BCLGdCQUFnQixFQUFFLENBQUM7O2dCQUNuQixjQUFjLEVBQUUsS0FBSzs7Z0JBRXJCLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUNoRCxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO29CQUNwQixHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDZixDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzFCLENBQUMsQ0FBQTthQUNIO1lBQ0QsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ1Y7S0FDRjs7Ozs7SUFNTSx5Q0FBVTs7OztjQUFDLFVBQThCO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7SUFHWCxzQ0FBTzs7Ozs7OztnQkEzRWYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDZDQUE2QztpQkFDeEQ7Ozs7O3VDQU1FLFNBQVMsU0FBQyxzQkFBc0I7MEJBSWhDLEtBQUs7dUJBQ0wsS0FBSyxTQUFDLE1BQU07OytCQXJCZjs7U0FXYSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7OztBQTJFakMsSUFBQTtJQUVFLHVHQUF1RztJQUN2Ryx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1Qjs7OztLQUlDOzZCQWpHSDtJQW1HQyxDQUFBO0FBYkQsOEJBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEpTR2FudHQgfSBmcm9tICdqc2dhbnR0LWltcHJvdmVkJztcbmltcG9ydCAqIGFzIEpTR2FudHQgZnJvbSAnanNnYW50dC1pbXByb3ZlZCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmctZ2FudHQnLFxuICB0ZW1wbGF0ZTogJzxkaXYgW2lkXT1cImlkXCIgI2dhbnR0RWRpdG9yQ29udGFpbmVyPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgR2FudHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVkaXRvcjogYW55O1xuICBwdWJsaWMgaWQgPSAnYW5nZ2FudHRlZGl0b3InICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIHB1YmxpYyBvcHRpb25zQ2hhbmdlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2dhbnR0RWRpdG9yQ29udGFpbmVyJykgZ2FudHRFZGl0b3JDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfZGF0YTtcblxuICBASW5wdXQoKSBvcHRpb25zOiBHYW50dEVkaXRvck9wdGlvbnMgPSBuZXcgR2FudHRFZGl0b3JPcHRpb25zKCk7XG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKHZhbHVlOiBPYmplY3QpIHtcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG9wdGlvbnNCZWZvcmUgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnNDaGFuZ2VkICYmIHRoaXMuZWRpdG9yKSB7XG4gICAgICBvcHRpb25zQmVmb3JlID0gdGhpcy5lZGl0b3Iub3B0aW9ucztcbiAgICB9XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYmVkZGVkLUdhbnR0JylcbiAgICBjb25zdCBnID0gdGhpcy5lZGl0b3IgPSBuZXcgKDxhbnk+SlNHYW50dCkuR2FudHRDaGFydCh0aGlzLmdhbnR0RWRpdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd3ZWVrJyk7XG5cbiAgICBpZiAoZy5nZXREaXZJZCgpICE9IG51bGwpIHtcblxuICAgICAgLy8gSlNHYW50dC5wYXJzZUpTT04oJy4vZml4ZXMvZGF0YS5qc29uJywgZyk7XG5cbiAgICAgIGcuc2V0T3B0aW9ucyh7XG4gICAgICAgIHZDYXB0aW9uVHlwZTogJ0NvbXBsZXRlJywgIC8vIFNldCB0byBTaG93IENhcHRpb24gOiBOb25lLENhcHRpb24sUmVzb3VyY2UsRHVyYXRpb24sQ29tcGxldGUsXG4gICAgICAgIHZRdWFydGVyQ29sV2lkdGg6IDM2LFxuICAgICAgICB2RGF0ZVRhc2tEaXNwbGF5Rm9ybWF0OiAnZGF5IGRkIG1vbnRoIHl5eXknLCAvLyBTaG93biBpbiB0b29sIHRpcCBib3hcbiAgICAgICAgdkRheU1ham9yRGF0ZURpc3BsYXlGb3JtYXQ6ICdtb24geXl5eSAtIFdlZWsgd3cnLCAvLyBTZXQgZm9ybWF0IHRvIGRpc3BsYXkgZGF0ZXMgaW4gdGhlIFwiTWFqb3JcIiBoZWFkZXIgb2YgdGhlIFwiRGF5XCIgdmlld1xuICAgICAgICB2V2Vla01pbm9yRGF0ZURpc3BsYXlGb3JtYXQ6ICdkZCBtb24nLCAvLyBTZXQgZm9ybWF0IHRvIGRpc3BsYXkgZGF0ZXMgaW4gdGhlIFwiTWlub3JcIiBoZWFkZXIgb2YgdGhlIFwiV2Vla1wiIHZpZXdcbiAgICAgICAgdlNob3dUYXNrSW5mb0xpbms6IDEsIC8vIFNob3cgbGluayBpbiB0b29sIHRpcCAoMC8xKVxuICAgICAgICB2U2hvd0VuZFdlZWtEYXRlOiAwLCAgLy8gU2hvdy9IaWRlIHRoZSBkYXRlIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIHdlZWsgaW4gaGVhZGVyIGZvclxuICAgICAgICB2VXNlU2luZ2xlQ2VsbDogMTAwMDAsXG4gICAgICAgIC8vIEV2ZW4gd2l0aCBzZXRVc2VTaW5nbGVDZWxsIHVzaW5nIEhvdXIgZm9ybWF0IG9uIHN1Y2ggYSBsYXJnZSBjaGFydCBjYW4gY2F1c2UgaXNzdWVzIGluIHNvbWUgYnJvd3NlcnNcbiAgICAgICAgdkZvcm1hdEFycjogWydEYXknLCAnV2VlaycsICdNb250aCcsICdRdWFydGVyJ10sXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuZm9yRWFjaCkge1xuICAgICAgICB0aGlzLl9kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICByb3cucEdhbnR0ID0gZztcbiAgICAgICAgICBnLkFkZFRhc2tJdGVtT2JqZWN0KHJvdyk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBnLkRyYXcoKTtcbiAgICB9XG4gIH1cblxuICAvLyBwdWJsaWMgZ2V0KCk6IEpTT04ge1xuICAvLyAgIHJldHVybiB0aGlzLmVkaXRvci5nZXQoKTtcbiAgLy8gfVxuXG4gIHB1YmxpYyBzZXRPcHRpb25zKG5ld09wdGlvbnM6IEdhbnR0RWRpdG9yT3B0aW9ucykge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9uc0NoYW5nZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgLy8gdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW50dEVkaXRvck9wdGlvbnMge1xuXG4gIC8vIHB1YmxpYyBvbkVkaXRhYmxlOiAobm9kZTogR2FudHRFZGl0b3JUcmVlTm9kZSB8IHt9KSA9PiBib29sZWFuIHwgeyBmaWVsZDogYm9vbGVhbiwgdmFsdWU6IGJvb2xlYW4gfTtcbiAgLy8gcHVibGljIHRoZW1lOiBOdW1iZXI7XG4gIC8vIHB1YmxpYyBsYW5ndWFnZTogU3RyaW5nO1xuICAvLyBwdWJsaWMgbGFuZ3VhZ2VzOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdGhpcy5lc2NhcGVVbmljb2RlID0gZmFsc2U7XG4gICAgLy8gdGhpcy5zb3J0T2JqZWN0S2V5cyA9IGZhbHNlO1xuICAgIC8vIHRoaXMuaGlzdG9yeSA9IHRydWU7XG4gIH1cblxufVxuIl19
