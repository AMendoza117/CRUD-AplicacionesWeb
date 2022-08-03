import { Auto } from '../models/auto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutoService {
  URL_API= 'http://localhost:3000/autos/';
  public auto:Auto=
  {marca:'',modelo:'',precio:0,transmision:'',accesorios:''};

  autos: Auto[]=[];

  constructor(private http:  HttpClient){}
  
  
  getAutos(){
    return this.http.get<Auto[]>(this.URL_API)
    //return this.empleados;
  }

  createAuto(auto:Auto){
    return this.http.post(this.URL_API,auto);
  }

  deleteAuto(_id:any){
  
    return this.http.delete(this.URL_API+_id);
  }

  editAuto(auto:Auto){
    return this.http.put(this.URL_API+auto._id,auto);
  }
}
