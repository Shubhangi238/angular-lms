import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /** Show Mobile Menu */
  showMenu(){
    let MenuClass= document.getElementById("mobile");
    MenuClass.className += " open";
  }

   /** Close Mobile Menu */
   closeMenu(){
    document.getElementById("mobile").classList.remove("open"); 
  }

}
