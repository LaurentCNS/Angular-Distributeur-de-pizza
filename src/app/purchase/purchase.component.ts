import { Component, OnInit } from '@angular/core';
import { pizzaChoice } from '../class/pizzaChoice';
import { Pizza } from '../class/pizzas';
import { PizzaChoiceService } from '../pizzaChoice.service';
import { faPlusMinus, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  pizzaPurchase : pizzaChoice[] = this.pizzaChoiceService.command;
  priceTotal : number = this.pizzaChoiceService.priceTotal;
  faPlusMinus = faPlusMinus;
  faSad = faSadCry;
  deleteValidation = false;

  constructor(private pizzaChoiceService : PizzaChoiceService,
              private activatedRoute : ActivatedRoute,
              private router : Router,
              private toastr : ToastrService) { }

  ngOnInit(): void {
  console.log(this.deleteValidation);
  
  }


  removeAll(){
    this.pizzaChoiceService.removeAll();
    this.toastr.success('Le panier est vide!')
    this.router.navigate(['/purchase/empty']);
    
  }

 
}
