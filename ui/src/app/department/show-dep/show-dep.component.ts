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

  department_id_filter:string="";
  department_name_filter:string="";
  department_list_without_filter:any=[];

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

  editClick(item) {
    this.department = item;
    this.modal_title = "Edit Department";
    this.activate_add_edit_department_component = true;
  }

  deleteClick(item) {
    if(confirm('Are you sure?')) {
      this.service.delete_department(item.DepartmentID).subscribe(data => {alert(data.toString());
        this.refresh_department_list();
      })
    }
  }

  closeClick() {
    this.activate_add_edit_department_component = false;
    this.refresh_department_list();
  }

  refresh_department_list() {
    this.service.get_department_list().subscribe(data => {
        this.department_list = data;
        this.department_list_without_filter = data;
      }
    );
  }

  filter_function() {
    var department_id_filter = this.department_id_filter;
    var department_name_filter = this.department_name_filter;

    this.department_list = this.department_list_without_filter.filter(function (el) {
      return el.DepartmentID.toString().toLowerCase().includes(department_id_filter.toString().trim().toLowerCase())&&
        el.DepartmentName.toString().toLowerCase().includes(department_name_filter.toString().trim().toLowerCase())
    });
  }

  sort_result(property, ascending) {
    this.department_list = this.department_list_without_filter.sort(function (a, b) {
      if(ascending) {
        return (a[property] > b[property])?1 : ((a[property] < b[property]) ?-1 : 0);
      } else {
        return (b[property] > a[property])?1 : ((b[property] < a[property]) ?-1 : 0);
      }
    })
  }
}