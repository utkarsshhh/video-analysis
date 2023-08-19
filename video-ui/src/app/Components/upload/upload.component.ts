import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import { TranscriptService } from 'src/app/transcript.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private service: VideoService,private transc:TranscriptService,private router:Router) { }
  tubeUrl: any = ''
  // file01: File | undefined;
  file01: any 
  finalFile: any
  form1 = new FormData()
  r = new FileReader()
  transcript:any
  submitLink(event: Event) {
    console.log("inside submit link")
    if (this.tubeUrl == '') {
      alert("Please enter a video link")
      return
    }
    else {
      this.service.uploadLink({ "link": this.tubeUrl }).subscribe(
        data => {
          // this.transcript = data
          // console.log(this.transcript)
          // this.transc.setTranscript(this.transcript['transcript'])
//           var FileSaver = require('file-saver');
// var blob = new Blob([this.transcript['transcript']], {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "transcript.txt");
//           console.log(this.transcript['transcript'])
          this.router.navigate(['transcript'])
          
        },
        err => {
          console.log(err)
        }
      )

    }


    console.log(this.tubeUrl)
  }

  submitVideo(event: Event) {
    console.log("upload video ", this.finalFile)
    if (this.file01?.type.includes('video')) {
      // if (true){
      console.log('video')
      this.finalFile = this.r.result

      this.form1.append('video',this.file01)

      console.log(this.form1.get('fil1'),"  m")
    
      this.service.uploadVideo(this.form1).subscribe(res => { this.router.navigate(['transcript']) }
        // , err => { console.log("error  ", err.message) }
        )
    }
    else {
      alert("Please upload a video")
    }
  }
  fileUpload(event: any) {
    console.log(" file 1 ", event?.target?.files[0].type)
    this.file01 = event?.target?.files[0]
    this.r.readAsArrayBuffer(this.file01)
    
    // const promi = new Promise((resolve,reject) =>{
    //   console.log("inside       ")
    //   resolve(r.readAsArrayBuffer(this.file01))
    // })
    // promi.then((resolve)=>{
    //   console.log("inside promise")
    //   
    // })
    // r.readAsArrayBuffer(this.file01);
    // this.file01 = r.result
    if (event?.target?.files[0].type.includes('video')) {
      console.log('video')
  }
    else {
      alert("Please upload a video")
    }
  }
  ngOnInit(): void {
  }

}
