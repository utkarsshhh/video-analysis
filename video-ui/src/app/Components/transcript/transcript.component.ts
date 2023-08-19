import { Component, OnInit } from '@angular/core';
import { TranscriptService } from 'src/app/transcript.service';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {
transcript = this.transc.getTranscript()
  constructor(private transc: TranscriptService) {
   }
  transcript1: any
  
  ngOnInit(): void {
    this.transc.getTranscript().subscribe(data => {
      this.transcript1 = data['transcript']
    })
    
    
    // subscribe(data => {
    //   console.log("data "+data)
    //   this.transcript = data
    //   console.log("transcript "+this.transcript)
    // })
  }
  downloadTranscript(event:Event){
    var FileSaver = require('file-saver');
var blob = new Blob([this.transcript1], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "transcript.txt");

  }

}
