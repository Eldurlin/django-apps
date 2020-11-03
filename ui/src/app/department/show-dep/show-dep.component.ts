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

  modal_title:string;

  activate_add_edit_department_component:boolean = false;

  department:any;

  ngOnInit(): void {
    this.refresh_department_list();
  }

  addClick() {
    this.department = {
      DepartmentID: 0,
      DepartmentName: "",
    }
    this.modal_title = "Add Department";
    this.activate_add_edit_department_component = true;
  }

  closeClick() {
    this.activate_add_edit_department_component = false;
    this.refresh_department_list();
  }

  refresh_department_list() {
    this.service.get_department_list().subscribe(
      data => {this.department_list = data}
    );
  }

}
