import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private dataService: DataService) { }

  async getUserData() {
    return (await this.dataService.getUserData()).students;
  }

  getStudentGradeAverage(gradeArray: Array<any>): number {
    return (gradeArray.reduce((a, b) => (Number(a) + Number(b))) / gradeArray.length);
  }

}
