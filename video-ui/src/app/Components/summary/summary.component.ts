import { Component, OnInit } from '@angular/core';
import { TranscriptService } from 'src/app/transcript.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private service:TranscriptService) { }
  summary = ''
  ngOnInit(): void {
    this.service.getSummary().subscribe(data => {
      this.summary = data['summary']

    })

  }

}
