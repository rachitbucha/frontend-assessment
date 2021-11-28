import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css']
})
export class Part3Component {
  studentInfo: any;
  studentInfoCopy: any;
  searchTerm: any;
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
