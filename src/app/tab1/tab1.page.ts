import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  longitude;
  latitude;
  constructor(private geolocation: Geolocation) {}

  ngOnInit(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.longitude);
      console.log(resp.coords.latitude);
      
    this.longitude = resp.coords.longitude;       
    this.latitude = resp.coords.latitude;       
      
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      });
  }
  

}
