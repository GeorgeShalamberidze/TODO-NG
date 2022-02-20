import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item
  @Input() index!: number

  constructor(private itemService: ItemService) {
   }

  ngOnInit(): void {
  }

  onClickDone() {
    this.itemService.onClickDone(this.index)
  }

  deleteItem(idx: number) {
    this.itemService.deleteItem(idx)
  }
}
