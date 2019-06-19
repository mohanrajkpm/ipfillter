import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor( private _router: Router) { }

  subscriptionArrayArray = [
    {
      "text": "Basic",
      "isSelect": true
    },
    {
      "text": "Premium",
      "isSelect": false
    }
  ]
  ngOnInit() {
  }

  onSUbscriptionChangeOnEdit(sub){
    // alert("we have subscription " +  sub);
    // this._router.navigate(['addIp', sub]);

    for(let i=0;i<this.subscriptionArrayArray.length;i++){
      if(this.subscriptionArrayArray[i].text == sub){
        this.subscriptionArrayArray[i].isSelect = true;
      }else{
        this.subscriptionArrayArray[i].isSelect = false;
      }
    }
  }

  redirecToNextPage(){
    let tempText;
    for(let i=0;i<this.subscriptionArrayArray.length;i++){
      if(this.subscriptionArrayArray[i].isSelect == true){
        tempText = this.subscriptionArrayArray[i].text;
      }

      console.log(this.subscriptionArrayArray[i].isSelect)
    }

    this._router.navigate(['addIp', tempText]);
  }
}
