import { Component, OnInit } from '@angular/core';
import { StorageService } from "../services/storage/storage.service";

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent implements OnInit {

  userData:any;
  constructor(public storage: StorageService) { 
    this.loadUserData()
  }

  ngOnInit() {}

  loadUserData(){
    this.storage.get('mia_user_data').then((user)=>{
      this.userData = user
    })
  }

}
