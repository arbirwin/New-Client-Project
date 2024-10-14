import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';  


@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [FormsModule,RouterModule, RouterOutlet,RouterLink,RouterLinkActive], 
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'] 
})

export class YourComponent {
  fname: string = ''; 
  lname: string = '';
  email: string = '';
  pnumber: string = '';
  bday: string = '';

  constructor(private router: Router) {} 
 
  onSubmit() {
    if (!this.validateForm()) {
      return;
    } else {
      RouterLinkActive=(['/schedule-page.component.html']);
    }
  }

  validateForm() {
    if (!this.fname) {
      alert("First Name must be filled out");
      return false;
    }
    if (!this.lname) {
      alert("Last Name must be filled out");
      return false;
    }
    if (!this.email) {
      alert("Email must be filled out");
      return false;
    }
    if (!this.pnumber) {
      alert("Phone number must be filled out");
      return false;
    }
    if (!this.bday) {
      alert("Birthday must be filled out");
      return false;
    }
    return true;
  }
}