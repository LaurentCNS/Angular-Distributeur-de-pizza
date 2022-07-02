import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../class/pizzas';
import { PizzasService } from '../pizzas.service';
import { faCircleInfo, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  pizza !: Pizza;
  deleteVal : boolean = false
  faPen = faPenToSquare;
  faInfo = faCircleInfo;
  faTrash = faTrash;
  

  constructor(private pizzasService : PizzasService,
              private activatedRoute : ActivatedRoute,
              private router : Router,
              private toastr : ToastrService) { }

  ngOnInit(): void{
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizza = this.pizzasService.choiceById(id);
    // console.log(this.pizza);
    
  }


  deleteValidation(){
    if(this.deleteVal === false){
      this.deleteVal = true;
    }else{
      this.deleteVal = false;
    }
  }

  deleteChoice(){
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.pizzasService.removeOne(id);
    this.router.navigate(['/list']);
    this.toastr.success('La pizza est supprimée !');    
  }

}
