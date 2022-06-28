import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router : Router,
              private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  cbProcess(){
    this.toastr.success('Votre paiement a été accepté!')
    this.router.navigate(['/process']);
  }

}
