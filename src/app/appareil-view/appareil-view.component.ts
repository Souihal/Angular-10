import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil-service.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  @Input() appareileName : string;
  @Input() appareileStatus : string;
  @Input() appareileIndex : number;
  @Input() id : number;
   

  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
  }
  statusAppareile(){
    return this.appareileStatus;
  }

  getColor(){
    if(this.appareileStatus === 'étient'){
      return 'red';
    }
      else if (this.appareileStatus === 'allumé'){
        return 'green';
      }
  }
  onSwitchOne(){
    this.appareilService.switchOneOn(this.appareileIndex);
  }
  offSwitchOne(){
    this.appareilService.switchOneOff(this.appareileIndex);
  }
}
