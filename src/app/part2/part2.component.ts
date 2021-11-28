import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {
  studentInfo: any;
  constructor(private dataService: DataService) {
    this.dataService.getUserData().subscribe((response) => this.studentInfo = response.students);
  }

  getStudentGradeAverage(gradeArray: Array<any>): number {
    return (gradeArray.reduce((a, b) => (Number(a) + Number(b))) / gradeArray.length);
  }

}
