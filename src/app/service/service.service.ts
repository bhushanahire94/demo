import { Injectable } from '@angular/core';  
import { HttpClient,HttpHeaders }    from '@angular/common/http';  
@Injectable({  
  providedIn: 'root'  
})  
  
export class ServiceService {
  baseUrl = 'https://localhost:44339'  //webapi host url
  constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
  getData(){  
       
    return this.http.get(this.baseUrl + '/api/Employee');   
  }  
  postData(formData){  
    return this.http.post(this.baseUrl + '/api/Employee',formData);  
  } 
  putData(id,formData){  
    return this.http.put(this.baseUrl + '/api/Employee/'+id,formData);  
  }  
  deleteData(id){  
    return this.http.delete(this.baseUrl + '/api/Employee/'+id);  
  }  
}
