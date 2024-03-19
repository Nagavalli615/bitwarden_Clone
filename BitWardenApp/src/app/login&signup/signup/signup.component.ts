import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  ngOnInit() {
 
  }
  formgroup = new FormGroup({
    Email : new FormControl ('', Validators.required),
    Name:new FormControl('',Validators.required),
    Masterpassword: new FormControl('',Validators.required),
    ReMasterpassword: new FormControl ('',Validators.required),
    MasterpasswordHint:new FormControl('',Validators.required)
  });
    
  


  submitdata(){
    try{
      var formdata = this.formgroup.value;

      console.log(formdata.value[0])
       console.log(formdata);
      // localStorage.setItem('userdata',JSON.stringify(formdata));
      this.formgroup.reset();
    }
    catch(ex){
      console.log("form data not fetch",ex)
    }
  }
}
