import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.css']
})
export class Part5Component {
  studentInfo: any;
  studentInfoCopy: any;
  searchTerm: any;
  searchTermTag: any;
  tags: any = [];
  showGrades: any = new Set();
  constructor(public commonService: CommonService) {
    (async () => {
      this.studentInfo = await this.commonService.getUserData();
      this.studentInfoCopy = [...this.studentInfo];
    })();
  }

  searchByNameAndTag() {
    this.studentInfo = [...this.studentInfoCopy];
    if (!this.searchTerm && !this.searchTermTag) return;
    this.studentInfo = this.studentInfo.filter((student: { id: string | number; firstName: any; lastName: any; }) => {
      if (this.searchTermTag && this.searchTermTag.length > 0) {
        const index = this.tags.findIndex((list: { id: string | number; }) => list.id == student.id);
        if (index > -1) {
          return this.tags[index].tags.includes(this.searchTermTag);
        }
      }
      if (this.searchTerm && this.searchTerm.length > 0) {
        return (((student.firstName + student.lastName).toLowerCase()).indexOf((this.searchTerm).toLowerCase()) >= 0);
      }
    });
  }

  addTagToStudentId(studentId: string | number, event: any) {
    const tag = event.target.value;
    event.currentTarget.value = '';
    const index = this.tags.findIndex((list: { id: string | number; }) => list.id == studentId);
    if (index > -1) {
      this.tags[index] = ({ id: studentId, tags: [...this.tags[index].tags, tag] });
    } else {
      this.tags.push({ id: studentId, tags: [tag] });
    }
  }

  getTags(studentId: string | number): Array<string> {
    const index = this.tags.findIndex((list: { id: string | number; }) => list.id == studentId);
    if (index > -1) {
      return this.tags[index].tags;
    }
    return [];
  }

}
