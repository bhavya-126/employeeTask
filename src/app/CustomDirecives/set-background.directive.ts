import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  constructor(private element: ElementRef) { //private element will generate a private property named as  element and assigned with the value of the parameter
  }
  
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'grey';
    
  }
  
}
