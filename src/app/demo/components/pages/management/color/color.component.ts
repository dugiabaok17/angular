import { map } from 'rxjs/operators';
import { Color } from 'src/app/demo/api/color';
import { ColorService } from './../../../../service/color.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { error } from 'console';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
})
export class ColorComponent implements OnInit {

  public colors?: Color[];
  colorDialog: boolean = false;
  deleteColorDialog: boolean = false;
  submitted: boolean = false;
  color: Color = {
    name: '',
    id: ''
  };


  ngOnInit(): void {
    this.getColor()
  }
  constructor(private colorService: ColorService, private messageService: MessageService) {
  }

  public getColor(): void {
    this.colorService.getData().subscribe(
      (response) => {
        this.colors = response
        console.log(response, "check content")
      },
      error => {
        console.log("check api error",error)
      }

    )
  }

  showModelColor() {
    this.colorDialog = true
    this.submitted = false;
    this.color = {
      id: "",
      name: ""
    }
  }

  showDeleteModelColor(color: Color) {
    this.color = {
      id: color.id,
      name: color.name
    }
    this.deleteColorDialog = true
  }

  handleCancel() {
    this.colorDialog = false
  }

  handleUpdate(color: Color) {
    this.colorDialog = true
    this.color = {
      id: color.id,
      name: color.name
    }
  }

  confirmDelete() {
    console.log("check delete")
    this.colorService.deleteColor(Number(this.color.id)).subscribe(
      (response) => {
        this.getColor()
      }
    )
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Color Deleted', life: 3000 });
    this.deleteColorDialog = false;
  }

  saveColor() {
    this.submitted = true
    if (this.color.name?.trim()) {
      if (this.color.id) {
        this.colorService.updateColor(this.color).subscribe(
          (response: Color) => {
            this.getColor()
          }
        )
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Color Updated', life: 3000 });
      } else {
        this.colorService.addColor(this.color).subscribe(
          (response: Color) => {
            this.getColor()
          }
        )
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Color Created', life: 3000 });
      }
      this.color = {
        name: "",
        id: ''
      }
      this.colorDialog = false
    }
  }

  handleClick() {
    alert("hello")
  }



}
