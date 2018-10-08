import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {
  @Input()
    service: any;
  @Input()
    name: string;
  
  data:any[];
  displayedColumns = ['name']

  constructor() { }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    });
  }

  
}
