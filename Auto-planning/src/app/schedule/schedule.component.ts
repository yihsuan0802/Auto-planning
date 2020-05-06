import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  container: any;
  public data: Object[];
  public taskfield: Object; 
 
  public title: string;
  public purpose: string;
  public requirement: string;
  public justification: string;
  public workingDay_before: number;
  public workingDay_after: number;
  public frequency_before: number;
  public frequency_after: number;
  public judgeMethod_before: string;
  public judgeMethod_after: string;
  public trackingTime_before: string;
  public trackingTime_after: string;
  public referenceFile: string;
  public detail: string;
  public user: string;
  public updateTime: Date=new Date();
  public status: string='Future task';
  public project: string;
  public department: string;
  public facility: string;

  modalRef: BsModalRef | null;
  public projectOption: [];
  public departmentOption: [];
  public facilityOption: [];

  constructor(private modalService: BsModalService, private ApiService : ApiService, private toastrService : ToastrService ) { }

  ngOnInit(): void {
    this.data = [{
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        Duration: 19,
        Progress: 10,
        UAT: 5
        // subtasks: [
        //   { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 1 },
        //   { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
        //   { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'),
        //   Duration: 3, Predecessor: '2', Progress: 1
        //   },
        // ]
        }, 
        // { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4' },
      ]; 
        this.taskfield = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        child: 'subtasks',
        progress: 'Progress'
        };
  }

  openModal(template: TemplateRef<any>) {
    this.getFacilityData();
    this.getDepartmentData();
    this.getProjectData();
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });

  }

  getFacilityData(): void{
    this.ApiService.getFacilityData().subscribe(
      (response: any) => {
      this.facilityOption = response;
      console.log(response)
      },
      (error) => console.log(error)
    );
  }
  getDepartmentData(): void{
    this.ApiService.getDepartmentData().subscribe(
      (response: any) => {
      this.departmentOption = response;
      console.log(response)
      },
      (error) => console.log(error)
    );
  }
  getProjectData(): void{
    this.ApiService.getProjectData().subscribe(
      (response: any) => {
      this.projectOption = response;
      console.log(response)
      },
      (error) => console.log(error)
    );
  }

  

  save(){
    var obj = {
      Title : this.title,
      Purpose: this.purpose,
      Requirement: this.requirement,
      Justification: this.justification,
      WD_Before: this.workingDay_before,
      WD_After: this.workingDay_after,
      Frequency_Before: this.frequency_before,
      Frequency_After: this.frequency_after,
      Method_Before: this.judgeMethod_after,
      Method_After: this.judgeMethod_after,
      Tracking_Before: this.trackingTime_before,
      Tracking_After: this.trackingTime_after,
      Detail: this.detail,
      User: this.user,
      Update_Time: this.updateTime,
      Status: this.status,
      Project: this.project,
      Department: this.department,
      Facility: this.facility
    };
       this.ApiService.postData(obj).subscribe(
      (response: any) => {
        if(response === 'Success'){
          this.toastrService.success('Submit successful.', 'Congratulations!')
          this.modalRef.hide();
        }
      },
      (error) => console.log(error)
    );

    console.log(this.department)
  }
}
