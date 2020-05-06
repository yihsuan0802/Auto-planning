import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  page : any;
  scroll: number;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.scroll = window.pageYOffset;
  }
  
  constructor() { 

  }

  ngOnInit(): void {
  }

  scrollToBlock(classname: string){
    const elementList = document.querySelectorAll('.' + classname);
    const element = elementList[0];
    element.scrollIntoView({behavior: 'smooth'});

  }
}
