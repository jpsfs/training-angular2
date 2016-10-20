import {Component, EventEmitter, ContentChild, QueryList, TemplateRef, IterableDiffer, IterableDiffers, DoCheck, DefaultIterableDiffer} from "@angular/core";

@Component({
    selector: "listview",
    inputs: ["items"],
    outputs: ["selectionChange"]
})
export class ListViewComponent implements DoCheck {

    public items: any[];
    public selectionChange: EventEmitter<any> = new EventEmitter<any>();

    @ContentChild(TemplateRef)
    private _itemTemplate: TemplateRef<any>;

    private _renderedItems: any[];

    private _iterableDiffer: IterableDiffer;

    constructor(private _iterableDiffers: IterableDiffers){

    }

    public ngDoCheck() {              
        if (this.items) {
            // Check if the iterable differ is already created. If not create it.
            if (!this._iterableDiffer) this._iterableDiffer = this._iterableDiffers.find(this.items).create(null);

            let changes: DefaultIterableDiffer = this._iterableDiffer.diff(this.items);

            if (changes) {
                this._renderedItems = this.items;
            }
        }        
    }
}