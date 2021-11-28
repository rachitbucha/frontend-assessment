import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.css']
})
export class Part4Component {
  studentInfo: any;
  studentInfoCopy: any;
  searchTerm: any;
  showGrades: any = new Set();
  constructor(public commonService: CommonService) {
    (async () => {
      this.studentInfo = await this.commonService.getUserData();
      this.studentInfoCopy = [...this.studentInfo];
    })();
  }

  searchName() {
    this.studentInfo = [...this.studentInfoCopy];
    if (this.searchTerm && this.searchTerm.length > 0)
      this.studentInfo = this.studentInfo.filter((student: { firstName: any; lastName: any; }) => {
        return ((student.firstName + student.lastName).toLowerCase()).indexOf((this.searchTerm).toLowerCase()) >= 0;
      });
  }

}