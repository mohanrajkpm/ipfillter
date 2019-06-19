import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addip',
  templateUrl: './addip.component.html',
  styleUrls: ['./addip.component.css']
})
export class AddipComponent implements OnInit {
  subscrption;
  userIp: string = '';
  premiusIpArray = [];
  basicIpArray = [];
  constructor(private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.getSubscriptionFromUrl();
  }

  getSubscriptionFromUrl() {
    this._activatedRouter.params.subscribe((data) => {
      this.subscrption = data.subs;
      // alert("we have subscription here" + this.subscrption)
    });

  }

  addIpIntoArray() {

    if (this.userIp != '') {
      if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this.userIp)) {
        console.log("we have proper ip");
        if (this.subscrption == 'Basic') {
          this.addBasicIpIntoArray();
        } else {
          this.addPremiumIpIntoArray();
        }
      } else {
        alert("Please enter proper ip address");
      }
    } else {
      alert('Please enter ip address');
    }

  }

  addBasicIpIntoArray() {
    if (this.basicIpArray.length == 5) {
      alert("Basic subscription user can add only five ip address! You have reached your limit!");
    } else {
      this.basicIpArray.push(this.userIp)
      this.userIp = '';
      alert("IP address is successfully added");
    }
  }

  addPremiumIpIntoArray() {
    if (this.premiusIpArray.length == 10) {
      alert("Premium subscription user can add only ten ip address! You have reached your limit!");
    } else {
      this.premiusIpArray.push(this.userIp)
      this.userIp = '';
      alert("IP address is successfully added");
    }
  }

  removeIpFromArray() {
    if(this.userIp != ''){
      if (this.subscrption == 'Basic') {
        this.removeBasicIPFromArray();
      } else {
        this.removePremiumIPFromArray();
      }
    }else{
      alert('Please enter ip address to remove');
    }
    
  }

  removeBasicIPFromArray() {
    let isIpFound = this.basicIpArray.filter(data => data == this.userIp);

    if (Object.values(isIpFound).length == 0) {
      alert("Please add proper ip address to remove");
    } else {
      this.basicIpArray = this.basicIpArray.filter(data => data != this.userIp)
      alert("IP address is successfully removed");
      this.userIp = '';
    }
    console.log("we try to check isIpFound here", isIpFound);
    console.log("we try to check basic ip array here", this.basicIpArray);
  }

  removePremiumIPFromArray() {
    let isIpFound = this.premiusIpArray.filter(data => data == this.userIp);

    if (Object.values(isIpFound).length == 0) {
      alert("Please add proper ip address to remove");
    } else {
      this.premiusIpArray = this.premiusIpArray.filter(data => data != this.userIp)
      alert("IP address is successfully removed");
      this.userIp = '';
    }
    console.log("we try to check isIpFound here", isIpFound);
    console.log("we try to check premius ip array here", this.premiusIpArray);
  }

  storeIPIntoLocalStorage() {
    if (this.subscrption == 'Basic') {
      if(this.basicIpArray.length == 0){
        alert("We have nothing to store in localstorage");
      }else{
        localStorage.setItem('basicIpFilter', JSON.stringify(this.basicIpArray));
        alert("We stored data in localstorage");
      }
    } else {
      if(this.premiusIpArray.length == 0){
        alert("We have nothing to store in localstorage");
      }else{
        localStorage.setItem('premiusIpFilter', JSON.stringify(this.premiusIpArray));
        alert("We stored data in localstorage");
      }
      
    }
  }
}
