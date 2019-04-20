import { ElementRef, OnInit } from '@angular/core';
export declare class GanttEditorComponent implements OnInit {
    private editor;
    id: string;
    optionsChanged: boolean;
    ganttEditorContainer: ElementRef;
    private _data;
    options: GanttEditorOptions;
    data: Object;
    constructor();
    ngOnInit(): void;
    setOptions(newOptions: GanttEditorOptions): void;
    destroy(): void;
}
export declare class GanttEditorOptions {
    constructor();
}
