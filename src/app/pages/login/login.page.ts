import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  person:Person ={name:'',password:''}
  themeName:string='';
  public personName:string="";
  public personPassword:string="";
  

  constructor(private storage:StorageService) {

  }
  setStorage()
  {
    let person:Person={name:this.personName,password:this.personPassword}

    this.storage.create("person", JSON.stringify(person));

    this.storage.create("theme","dark");
  }
  async getStorage(){

    await this.storage.read("theme").then((data:any)=>{
      if(data.value)
        this.themeName=data.value;
      else
        this.themeName="";
      });

    await this.storage.read("person").then((data:any)=>{
      if(data.value)
      {
        let p=JSON.parse(data.value);
        this.person=p;
      }
        this.person={name:"",password:""};
    })
  }

  async updateStorage(){

    let person:Person={name:this.personName, password:this.personPassword}

      await this.storage.update("person", JSON.stringify(person));

      await this.storage.create("theme","light");
  }
  async deleteFromStorage()
  {
      await this.storage.delete("theme");
  }
  async clearStorage()
  {
      await this.storage.clear();
  }
  ngOnInit() {
  }

}
