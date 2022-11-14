import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransfereciaService } from '../services/transfer.service';

@Component({
  selector    : 'app-nova-transferencia',
  templateUrl : './new-transfer.component.html',
  styleUrls   : ['./new-transfer.component.scss']
})

export class NewTransferComponent{
  @Output() aoTransferir = new EventEmitter<any>();

  transferInterface: FormGroup | any = null;

  constructor(private service: TransfereciaService, private router: Router){}

  ngOnInit(){
    this.accountTransferForme();

  }
  accountTransferForme(){
    this.transferInterface =  new FormGroup({
      accountOring: new FormControl(null,[Validators.required]),
      accountDestin: new FormControl(null,[Validators.required]),
      velue: new FormControl(null,[Validators.required]),
      dateScheduled: new FormControl(null,[Validators.required]),
      period: new FormControl(null,[Validators.required])
  })
}

  transfer(){
    this.service.save(this.transferInterface.value).subscribe(result => {
      console.log(result);
      this.transferInterface.reset();
      this.router.navigateByUrl('rate');
    },
      (error) => {
        alert('Erro ao fazer o agentamento');
      }
    );
  }
}
