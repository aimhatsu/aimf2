import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { }

  set(key, value){
    return this.storage.set(key, value)
  }

  get(key){
    return this.storage.get(key)
  }

  remove(key){
    return this.storage.remove(key)
  }
}
