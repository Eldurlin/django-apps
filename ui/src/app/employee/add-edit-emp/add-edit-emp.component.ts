import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() employee:any;
  EmployeeID:string;
  EmployeeName:string;
  Department:string;
  DateOfJoin:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  department_list:any = [];

  ngOnInit(): void {
    this.load_department_list();
  }

  load_department_list() {
    this.service.get_all_departments_names().subscribe((data:any) => {
      this.department_list = data;
      this.EmployeeID = this.employee.EmployeeID;
      this.EmployeeName = this.employee.EmployeeName;
      this.Department = this.employee.Department;
      this.DateOfJoin = this.employee.DateOfJoin;
      this.PhotoFileName = this.employee.PhotoFileName;
      this.PhotoFilePath = this.service.photo_url + this.PhotoFileName;
    });
  }

  addEmployee() {
    var value = {EmployeeID:this.EmployeeID, 
                EmployeeName:this.EmployeeName,
                Department:this.Department,
                DateOfJoin:this.DateOfJoin,
                PhotoFileName:this.PhotoFileName};
    this.service.add_employee(value).subscribe(res => {alert(res.toString());
    });
  }

  updateEmployee() {
    var value = {EmployeeID:this.EmployeeID, 
                EmployeeName:this.EmployeeName,
                Department:this.Department,
                DateOfJoin:this.DateOfJoin,
                PhotoFileName:this.PhotoFileName};
    this.service.update_employee(value).subscribe(res => {alert(res.toString());
    });
  }

  uploadPhoto(event) {
    var file = event.target.files[0];
    const form_data:FormData = new FormData();
    form_data.append('uploaded_file', file, file.name);

    this.service.upload_photo(form_data).subscribe((data:any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photo_url + this.PhotoFileName;
    });
  }
}