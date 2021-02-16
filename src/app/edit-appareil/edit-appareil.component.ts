import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../service/appareil-service.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  statusDefault = 'étient';

  constructor(private AppareilService:AppareilService,
              private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
const name = form.value['name'];
const status=form.value['status'];
this.AppareilService.addAppareil(name,status);
this.router.navigate(['/appareils']);
  }
}
