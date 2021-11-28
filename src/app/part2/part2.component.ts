import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {
  studentInfo: any;
  constructor(public commonService: CommonService) {
    (async () => this.studentInfo = await this.commonService.getUserData())();
  }

}
