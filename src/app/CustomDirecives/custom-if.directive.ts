import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  constructor(private view: TemplateRef<any>, private template: ViewContainerRef) { }
  @Input() set appCustomIf(condition:boolean){
    
    if(condition){
      this.template.createEmbeddedView(this.view);
    }
    else{
      this.template.clear();
    }
  }
}
