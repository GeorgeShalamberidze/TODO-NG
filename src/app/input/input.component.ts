import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../model/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  inputForm!: FormGroup
  todo!: FormControl
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.todo = new FormControl()
    this.inputForm = new FormGroup({
      todo: this.todo 
    })
  }

  addEvent(value: Item) {
    const newItem = {
      todo: value.todo,
      done: false
    }
    this.itemService.addItem(newItem)
    this.todo.setValue('')
  }
}