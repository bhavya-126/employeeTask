import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.element.nativeElement, 'display', 'inline');
    this.renderer.addClass(this.element.nativeElement, 'container');
  }
  @HostBinding('style.background') background: string = 'transparent';
  @HostListener('mouseenter') mouseEnter() {
    this.background = 'grey';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.background = 'transparent';
  }
}
