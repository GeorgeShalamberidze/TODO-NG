import { Injectable } from "@angular/core";
import { Item } from "../model/item.model";

@Injectable({
    providedIn: "root"
}) 

export class ItemService {
    private items: Item[] = [
        {todo: "test1", done: true},
        {todo: "test2", done: false},
        {todo: "test3", done: true},
        {todo: "test4", done: false},
        {todo: "test5", done: true},
    ]

    constructor() {
        
    }

    getItems(): Item[] {
        return this.items
    }

    addItem(item: Item) {
        this.items.push(item)
    }

    deleteItem(idx: number) {
        this.items.splice(idx, 1)
    }

    onClickDone(idx: number) {
        this.items[idx].done = !this.items[idx].done
    }
}