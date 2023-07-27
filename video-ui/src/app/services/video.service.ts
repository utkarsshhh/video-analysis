import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }
  server_link = 'http://127.0.0.1:5000/'
  uploadLink(link:any){
    return this.http.post(this.server_link+'upload_link',link)
  }
  uploadVideo(file:File){
    return this.http.post(this.server_link+'upload_video',file)
  }
}
