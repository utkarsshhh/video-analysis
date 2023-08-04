import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  constructor(private service:VideoService) { }
  tubeUrl: any = ''
  file01:File | undefined;
  submitLink(event:Event){
    console.log("inside submit link")
    if (this.tubeUrl==''){
      alert("Please enter a video link")
      return
    }
    else{
      this.service.uploadLink({"link":this.tubeUrl}).subscribe(
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

  submitVideo(event:Event){
    console.log("upload video ",this.file01)
    if (this.file01?.type.includes('video')){
      console.log('video')
      this.service.uploadVideo(this.file01).subscribe( res=> {console.log(res)}
      ,err => {console.log("error  ",err)})
    }
    else{
      alert("Please upload a video")
    }
  }
  fileUpload(event:any){
    console.log(" file 1 ",event?.target?.files[0].type)
    this.file01 = event?.target?.files[0]
    if (event?.target?.files[0].type.includes('video')){
      console.log('video')
    }
    else{
      alert("Please upload a video")
    }
  }
  ngOnInit(): void {
  }

}
