import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  employee_list:any = [];

  modal_title:string;

  activate_add_edit_employee_component:boolean = false;

  employee:any;

  ngOnInit(): void {
    this.refresh_employee_list();
  }

  addClick() {
    this.employee = {
      EmployeeID: 0,
      EmployeeName: "",
      Department: "",
      DateOfJoin: "",
      PhotoFileName: "blank_profile.jpg"
    }
    this.modal_title = "Add Employee";
    this.activate_add_edit_employee_component = true;
  }

  editClick(item) {
    this.employee = item;
    this.modal_title = "Edit Employee";
    this.activate_add_edit_employee_component = true;
  }

  deleteClick(item) {
    if(confirm('Are you sure?')) {
      this.service.delete_employee(item.EmployeeID).subscribe(data => {alert(data.toString());
        this.refresh_employee_list();
      })
    }
  }

  closeClick() {
    this.activate_add_edit_employee_component = false;
    this.refresh_employee_list();
  }

  refresh_employee_list() {
    this.service.get_employee_list().subscribe(
      data => {this.employee_list = data}
    );
  }
}