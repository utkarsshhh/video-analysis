import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
// import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {
  transcripts$ = new BehaviorSubject<string>('')
  selectedTranscript$ = this.transcripts$.asObservable()
  server_link = 'http://127.0.0.1:5000/'



  constructor(private http: HttpClient) { 

  }
  // setTranscript(transcript:any){
    
  //   console.log("inside set transcript")
  //   this.transcripts$ = transcript
  // }
  getTranscript():Observable<any>{
   return this.http.get(this.server_link+'get_transcript')
  }
  getSummary():Observable<any>{
    return this.http.get(this.server_link+'get_summary')
  }
}
