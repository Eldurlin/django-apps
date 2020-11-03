import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  department_list:any = [];

  ngOnInit(): void {
    this.refresh_department_list();
  }

  refresh_department_list() {
    this.service.get_department_list().subscribe(
      data => {this.department_list = data}
    );
  }

}
