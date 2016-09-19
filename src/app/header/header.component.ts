import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls : [
    './header.Component.css',
     '../../public/concise-v3.4.0-UI-dist/concise.min.css', 
     '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
     ]
})
export class HeaderComponent implements OnInit {

  model = 'abc';
  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    console.log('clicked: ', event);
  }

  ngAfterViewInit() {
        // $('.btn-test').on('click',function() {
        //   alert('hello');
        // });
    }

}
