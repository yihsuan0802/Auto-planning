import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  announce_images : String[];
  intro_object : any;
  svg: any;
  constructor(private sanitizer: DomSanitizer, public ApiService: ApiService) { }

  ngOnInit(): void {


    this.announce_images = ['./assets/image/Carousel_Moveins.png', './assets/image/Carousel_Auto-planning structure.png'];
    
    this.intro_object = [
    {
      img: this.sanitizer.bypassSecurityTrustHtml('<svg class="bi bi-bell bi-news-c" width="150px" height="150px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z"/><path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z" clip-rule="evenodd"/></svg>'),
      title: "News",
      content: "The latest news",
      scroll: "news_block"
    },
    {
      img: this.sanitizer.bypassSecurityTrustHtml('<svg class="bi bi-window bi-news-c" width="150px" height="150px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15 6H1V5h14v1z" clip-rule="evenodd"/><path d="M3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0z"/></svg>'),
      title: "System",
      content: "The introduction of each system",
      scroll: "web_block"
    },
    {
      img: this.sanitizer.bypassSecurityTrustHtml('<svg class="bi bi-calendar bi-news-c" width="150px" height="150px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>'),
      title: "Schedule",
      content: "Development schedule",
      scroll: "schedule_block"
    }]
      
  }
  scrollToBlock(classname: string){
    const elementList = document.querySelectorAll('.' + classname);
    const element = elementList[0];
    element.scrollIntoView({behavior: 'smooth'});

  }
}
