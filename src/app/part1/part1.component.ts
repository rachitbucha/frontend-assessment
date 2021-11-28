import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component {
  studentInfo: any;
  constructor(private dataService: DataService) {
    this.dataService.getUserData().subscribe((response) => this.studentInfo = response.students);
  }

  getStudentGradeAverage(gradeArray: Array<any>): number {
    return (gradeArray.reduce((a, b) => (Number(a) + Number(b))) / gradeArray.length);
  }

}
