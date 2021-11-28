import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component {
  studentInfo: any;
  constructor(public commonService: CommonService) {
    (async () => this.studentInfo = await this.commonService.getUserData())();
  }

}
