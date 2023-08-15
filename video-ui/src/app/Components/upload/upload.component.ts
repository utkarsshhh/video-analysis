import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private service: VideoService) { }
  tubeUrl: any = ''
  // file01: File | undefined;
  file01: any 
  finalFile: any
  form1 = new FormData()
  r = new FileReader()
  submitLink(event: Event) {
    console.log("inside submit link")
    if (this.tubeUrl == '') {
      alert("Please enter a video link")
      return
    }
    else {
      this.service.uploadLink({ "link": this.tubeUrl }).subscribe(
        data => {
          console.log(data)
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
      this.form1.set('file1',this.finalFile)
      // console.log(this.form1.get('file1'),"  m")
    
      this.service.uploadVideo(this.form1).subscribe(res => { console.log('respnse   ', res) }
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
