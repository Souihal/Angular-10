import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../service/appareil-service.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name : string ="Appareil";
  status : string ="statut";

  constructor(private appareilService : AppareilService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilParId(+id).name;
    this.status = this.appareilService.getAppareilParId(+id).status;
  }

}
