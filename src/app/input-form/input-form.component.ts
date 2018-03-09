import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  
  constructor(private inputInfo: InputinfoService) { }
  
  onClick(): void {
    this.inputInfo.showInfo();
  }

  ngOnInit() {
  }

}
