import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  displayTable: boolean = false;
  username: any;
  public rowdata: [];
  title_name: String;
  ww_set:any = [];
  modalRef: BsModalRef | null;

  public milestone: string;
  public items: string;
  public requestConfirm: number;
  public develop: number;
  public UAT: number;
  public startDate: Date=new Date();
  public progress: number;
  public updateTime: Date=new Date();
  model: NgbDateStruct;


  
  
  constructor(private modalService: BsModalService, private apiService: ApiService, private toastrService : ToastrService ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
    this.apiService.getData().subscribe(
      (response: any) => {
          this.rowdata = response;
          this.processData(response)
      },
      (error) => console.log(error)
    );
  }

  processData(response: any){
    this.dtOptions = {
      paging: false,
    };
    this.displayTable = true;
   }

   openModal(template: TemplateRef<any>, data: any) {
     
    this.apiService.getScheduleData(data.Project, data.Title).subscribe(
      (response: any) => {
        if(response.length > 0){
          this.ww_set = response;
        }else{
          this.ww_set = [{
            "Facility" : data.Facility,
            "Department" : data.Department,
            "Project" : data.Project,
            "Title" : data.Title,
            "Items" : null,
            "Request_Confirm" : null,
            "Develop" : null,
            "UAT" : null,
            "StartDate" : null,
            "Progress" : null,
            "MileStone" : null,
            "UpdateTime" : new Date()
          }];
        }
    },
      (error) => console.log(error)
    );
 
    this.title_name = data.Title;
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
   }

   addInput(item) {
    let id = this.ww_set.length + 1;
    this.ww_set.push(
      {
      "Facility" : item[0].Facility,
      "Department" : item[0].Department,
      "Project" : item[0].Project,
      "Title" : item[0].Title,
      "Items" : null,
      "RequestConfirm" : null,
      "Develop" : null,
      "UAT" : null,
      "StartDate" : null,
      "Progress" : null,
      "MileStone" : null,
      "UpdateTime" : new Date()
      }
    );
  }

  removeInput(item) {
    let i = this.ww_set.indexOf(item);
    this.ww_set.splice(i, 1);
  }

  save(){
    var obj = {
      Items : this.items,
      RequestConfirm: this.requestConfirm,
      Develop: this.develop,
      UAT: this.UAT,
      StartDate: this.startDate,
      Progress: this.progress,
      MileStone: this.milestone,
      UpdateTime: this.updateTime
    };
       this.apiService.postScheduleData(this.ww_set).subscribe(
      (response: any) => {
        if(response === 'Success'){
          this.toastrService.success('Submit successful.', 'Congratulations!')
          this.modalRef.hide();
        }
      },
      (error) => console.log(error)
    );
  
    console.log(this.items)
  }
}
