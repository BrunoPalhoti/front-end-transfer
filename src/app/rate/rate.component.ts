import { Component, OnInit } from '@angular/core';
import { Transefer } from '../models/transfer.model'
import { TransfereciaService } from '../services/transfer.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

 transferExtract: Transefer[] = [];

 constructor(private service: TransfereciaService){
}

  ngOnInit(): void {
    this.service.getAll().subscribe((transferencias : Transefer[]) => {
      console.table(transferencias);
      this.transferExtract = transferencias;
    })
  }
}
