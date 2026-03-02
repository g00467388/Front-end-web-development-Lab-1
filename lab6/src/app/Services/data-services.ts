import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  // Use DI to inject httpclient
  constructor(private httpclient :HttpClient) {
        
  }
  // url for student api
  jsonBlobUrl :string = "https://api.jsonblob.com/019caf2c-cc8f-76a8-b65f-9eb6994c1fc1"
  
  // return data from jsobBlobUrl
  GetStudentData() :Observable<any> {
    return this.httpclient.get(this.jsonBlobUrl)
  }

}
