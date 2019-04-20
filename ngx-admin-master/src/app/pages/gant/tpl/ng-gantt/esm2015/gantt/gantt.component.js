/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
//import * as JSGantt from 'jsgantt-improved';
import * as JSGantt from '../../../jsgantt-improved';

export class GanttEditorComponent {
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
        const /** @type {?} */ g = this.editor = new (/** @type {?} */ (JSGantt)).GanttChart(this.ganttEditorContainer.nativeElement, 'week');
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
export class GanttEditorOptions {
    constructor() {
        // this.escapeUnicode = false;
        // this.sortObjectKeys = false;
        // this.history = true;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZ2FudHQvIiwic291cmNlcyI6WyJnYW50dC9nYW50dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQ2hELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sS0FBSyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7QUFPNUMsTUFBTTtJQW1CSjtrQkFqQlksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDOzhCQUMxQyxLQUFLO3VCQU1VLElBQUksa0JBQWtCLEVBQUU7S0FZOUQ7Ozs7O0lBWEQsSUFDSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7S0FDRjs7OztJQU1ELFFBQVE7UUFDTixxQkFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3JDOztRQUVELHVCQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQU0sT0FBTyxFQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBSXpCLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLFVBQVU7O2dCQUN4QixnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixzQkFBc0IsRUFBRSxtQkFBbUI7O2dCQUMzQywwQkFBMEIsRUFBRSxvQkFBb0I7O2dCQUNoRCwyQkFBMkIsRUFBRSxRQUFROztnQkFDckMsaUJBQWlCLEVBQUUsQ0FBQzs7Z0JBQ3BCLGdCQUFnQixFQUFFLENBQUM7O2dCQUNuQixjQUFjLEVBQUUsS0FBSzs7Z0JBRXJCLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUNoRCxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3ZCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDMUIsQ0FBQyxDQUFBO2FBQ0g7WUFDRCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNGOzs7OztJQU1NLFVBQVUsQ0FBQyxVQUE4QjtRQUM5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR1gsT0FBTzs7Ozs7WUEzRWYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLDZDQUE2QzthQUN4RDs7Ozs7bUNBTUUsU0FBUyxTQUFDLHNCQUFzQjtzQkFJaEMsS0FBSzttQkFDTCxLQUFLLFNBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQWlFZixNQUFNO0lBT0o7Ozs7S0FJQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBKU0dhbnR0IH0gZnJvbSAnanNnYW50dC1pbXByb3ZlZCc7XG5pbXBvcnQgKiBhcyBKU0dhbnR0IGZyb20gJ2pzZ2FudHQtaW1wcm92ZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25nLWdhbnR0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IFtpZF09XCJpZFwiICNnYW50dEVkaXRvckNvbnRhaW5lcj48L2Rpdj4nXG59KVxuZXhwb3J0IGNsYXNzIEdhbnR0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcbiAgcHVibGljIGlkID0gJ2FuZ2dhbnR0ZWRpdG9yJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICBwdWJsaWMgb3B0aW9uc0NoYW5nZWQgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdnYW50dEVkaXRvckNvbnRhaW5lcicpIGdhbnR0RWRpdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX2RhdGE7XG5cbiAgQElucHV0KCkgb3B0aW9uczogR2FudHRFZGl0b3JPcHRpb25zID0gbmV3IEdhbnR0RWRpdG9yT3B0aW9ucygpO1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YSh2YWx1ZTogT2JqZWN0KSB7XG4gICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBvcHRpb25zQmVmb3JlID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICghdGhpcy5vcHRpb25zQ2hhbmdlZCAmJiB0aGlzLmVkaXRvcikge1xuICAgICAgb3B0aW9uc0JlZm9yZSA9IHRoaXMuZWRpdG9yLm9wdGlvbnM7XG4gICAgfVxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWJlZGRlZC1HYW50dCcpXG4gICAgY29uc3QgZyA9IHRoaXMuZWRpdG9yID0gbmV3ICg8YW55PkpTR2FudHQpLkdhbnR0Q2hhcnQodGhpcy5nYW50dEVkaXRvckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnd2VlaycpO1xuXG4gICAgaWYgKGcuZ2V0RGl2SWQoKSAhPSBudWxsKSB7XG5cbiAgICAgIC8vIEpTR2FudHQucGFyc2VKU09OKCcuL2ZpeGVzL2RhdGEuanNvbicsIGcpO1xuXG4gICAgICBnLnNldE9wdGlvbnMoe1xuICAgICAgICB2Q2FwdGlvblR5cGU6ICdDb21wbGV0ZScsICAvLyBTZXQgdG8gU2hvdyBDYXB0aW9uIDogTm9uZSxDYXB0aW9uLFJlc291cmNlLER1cmF0aW9uLENvbXBsZXRlLFxuICAgICAgICB2UXVhcnRlckNvbFdpZHRoOiAzNixcbiAgICAgICAgdkRhdGVUYXNrRGlzcGxheUZvcm1hdDogJ2RheSBkZCBtb250aCB5eXl5JywgLy8gU2hvd24gaW4gdG9vbCB0aXAgYm94XG4gICAgICAgIHZEYXlNYWpvckRhdGVEaXNwbGF5Rm9ybWF0OiAnbW9uIHl5eXkgLSBXZWVrIHd3JywgLy8gU2V0IGZvcm1hdCB0byBkaXNwbGF5IGRhdGVzIGluIHRoZSBcIk1ham9yXCIgaGVhZGVyIG9mIHRoZSBcIkRheVwiIHZpZXdcbiAgICAgICAgdldlZWtNaW5vckRhdGVEaXNwbGF5Rm9ybWF0OiAnZGQgbW9uJywgLy8gU2V0IGZvcm1hdCB0byBkaXNwbGF5IGRhdGVzIGluIHRoZSBcIk1pbm9yXCIgaGVhZGVyIG9mIHRoZSBcIldlZWtcIiB2aWV3XG4gICAgICAgIHZTaG93VGFza0luZm9MaW5rOiAxLCAvLyBTaG93IGxpbmsgaW4gdG9vbCB0aXAgKDAvMSlcbiAgICAgICAgdlNob3dFbmRXZWVrRGF0ZTogMCwgIC8vIFNob3cvSGlkZSB0aGUgZGF0ZSBmb3IgdGhlIGxhc3QgZGF5IG9mIHRoZSB3ZWVrIGluIGhlYWRlciBmb3JcbiAgICAgICAgdlVzZVNpbmdsZUNlbGw6IDEwMDAwLFxuICAgICAgICAvLyBFdmVuIHdpdGggc2V0VXNlU2luZ2xlQ2VsbCB1c2luZyBIb3VyIGZvcm1hdCBvbiBzdWNoIGEgbGFyZ2UgY2hhcnQgY2FuIGNhdXNlIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzXG4gICAgICAgIHZGb3JtYXRBcnI6IFsnRGF5JywgJ1dlZWsnLCAnTW9udGgnLCAnUXVhcnRlciddLFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLmZvckVhY2gpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgcm93LnBHYW50dCA9IGc7XG4gICAgICAgICAgZy5BZGRUYXNrSXRlbU9iamVjdChyb3cpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZy5EcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHVibGljIGdldCgpOiBKU09OIHtcbiAgLy8gICByZXR1cm4gdGhpcy5lZGl0b3IuZ2V0KCk7XG4gIC8vIH1cblxuICBwdWJsaWMgc2V0T3B0aW9ucyhuZXdPcHRpb25zOiBHYW50dEVkaXRvck9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIC8vIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FudHRFZGl0b3JPcHRpb25zIHtcblxuICAvLyBwdWJsaWMgb25FZGl0YWJsZTogKG5vZGU6IEdhbnR0RWRpdG9yVHJlZU5vZGUgfCB7fSkgPT4gYm9vbGVhbiB8IHsgZmllbGQ6IGJvb2xlYW4sIHZhbHVlOiBib29sZWFuIH07XG4gIC8vIHB1YmxpYyB0aGVtZTogTnVtYmVyO1xuICAvLyBwdWJsaWMgbGFuZ3VhZ2U6IFN0cmluZztcbiAgLy8gcHVibGljIGxhbmd1YWdlczogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMuZXNjYXBlVW5pY29kZSA9IGZhbHNlO1xuICAgIC8vIHRoaXMuc29ydE9iamVjdEtleXMgPSBmYWxzZTtcbiAgICAvLyB0aGlzLmhpc3RvcnkgPSB0cnVlO1xuICB9XG5cbn1cbiJdfQ==
