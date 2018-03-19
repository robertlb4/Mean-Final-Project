import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private inputInfo: InputinfoService) { }

  ngOnInit() {
  }

}
