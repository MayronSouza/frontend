import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
