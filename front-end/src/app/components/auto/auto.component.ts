import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  constructor(public autoService:AutoService) { }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getAutos();
  }

  getAutos(){
    this.autoService.getAutos().subscribe(
      res => {this.autoService.autos= res;
      console.log(res);
    },
    err => console.log(err)
    )
  }

  createAuto(form:NgForm){
    if(form.value._id){
      alert('actualizando');
      this.autoService.editAuto(form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    }else{//creando
      this.autoService.createAuto(form.value).subscribe(
        res => {
          this.getAutos();
          form.reset();
        },
        err=> console.log(err)
      )}
  }

  deleteAuto(_id:any){
    //alert('Borrando');
    const resp= confirm('Estas seguro de eliminarlo?');
    console.log('eliminando '+_id);
    if(resp){
      this.autoService.deleteAuto(_id).subscribe(
        (res)=>{
          this.getAutos();
        },
        (err)=> console.log(err)
      );
    }
  }

  editAuto(auto:Auto){
    this.autoService.auto = auto;
  }

  formReset(form:NgForm){
    this.autoService.auto=form.value;
    form.reset();
  }
}
