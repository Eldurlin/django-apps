import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() department:any;
  DepartmentID:string;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentID = this.department.DepartmentID;
    this.DepartmentName = this.department.DepartmentName;
  }

  addDepartment() {
    var value = {DepartmentID:this.DepartmentID, DepartmentName:this.DepartmentName};
    this.service.add_department(value).subscribe(res => {alert(res.toString());
    });
  }

  updateDepartment() {
    var value = {DepartmentID:this.DepartmentID, DepartmentName:this.DepartmentName};
    this.service.update_department(value).subscribe(res => {alert(res.toString());
    });
  }

}
