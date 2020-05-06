import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  public getData(): Observable<any> {
    const URL = 'http://webtest.tatw.micron.com/MUIWEB/api/autoplanning/getAllRequirments';
    return this.http.get<any>(URL);
  }

  public postData(obj: any): Observable<any> {
    const URL = 'http://webtest.tatw.micron.com/MUIWEB/api/autoplanning/InerstRequirment';
    return this.http.post<any>(URL, obj);
  }

  public getProjectData(): Observable<any> {
    const URL = 'http://webtest.tatw.micron.com/MUIWEB/api/projectoption/getProjectOptions';
    return this.http.get<any>(URL);
  }
  public getDepartmentData(): Observable<any> {
    const URL = 'http://webtest.tatw.micron.com/MUIWEB/api/department/getDepartment';
    return this.http.get<any>(URL);
  }
  public getFacilityData(): Observable<any> {
    const URL = 'http://webtest.tatw.micron.com/MUIWEB/api/facility/getfacility';
    return this.http.get<any>(URL);
  }
  public getScheduleData(project: string, title: string): Observable<any> {
    const URL = "http://webtest.tatw.micron.com/MUIWEB/api/schedule/getSchedule/" + project + "/" + title + "";
    return this.http.get<any>(URL);
  }
  public postScheduleData(obj: any): Observable<any> {
    const URL = "http://webtest.tatw.micron.com/MUIWEB/api/schedule/inerstSchedule";
    return this.http.post<any>(URL, obj);
  }
}
