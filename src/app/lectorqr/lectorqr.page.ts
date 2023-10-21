import { Component, OnInit } from '@angular/core';
import { ZBar } from '@ionic-native/zbar/ngx';
import { ZBarOptions} from '@ionic-native/zbar/ngx';


@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage{

  optionZBar:any;
  scannedOutput:any;

  constructor(
    private zbarPlugin: ZBar
  ) {
    this.optionZBar = {
      flash: 'off',
      drawSight: false
    }
  }
  barcodeScanner(){
    this.zbarPlugin.scan(this.optionZBar)
    .then(respone =>{
      console.log(respone);
      this.scannedOutput = respone;
    })
    .catch(error=>{
      alert(error);
    })
  }


  ngOnInit() {
  }

}
