import { Component ,OnInit } from '@angular/core';
import {UserService} from '../../../Services/User.service';
import { User } from 'src/app/Models/UserModel';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  userId : string ="e156548c-dded-4e6d-ad39-1dcf98ba5269";
  user:User=new User("das", "sss", "FirstNamess", "LastNamess", "Emails", "Address", "PhoneNumber",  new Date())
  constructor(private service:UserService){}

  ngOnInit(): void {
    this.service.GetUserById(this.userId).subscribe(data=>{
      console.log(this.user)
      this.user=data?.data;
      console.log(this.user)
    })
  }
}
