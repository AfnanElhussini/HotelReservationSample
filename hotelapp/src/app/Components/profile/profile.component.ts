import { Component ,OnInit } from '@angular/core';
import {UserService} from '../../Services/User.service';
import { User } from 'src/app/Models/UserModel';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId : string ="e156548c-dded-4e6d-ad39-1dcf98ba5269";
  user:User=new User("das", "sss", "FirstNamess", "LastNamess", "Emails", "Address", "PhoneNumber",  new Date())
  sss:string = "SDSDSD";
  constructor(private service:UserService){}

  ngOnInit(): void {
    this.service.GetUserById(this.userId).subscribe(data=>{
      this.user=data?.data;
      this.sss="DADADA"
    })
  }

}
