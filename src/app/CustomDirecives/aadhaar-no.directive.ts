import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appAadhaarNo]',
})
export class AadhaarNoDirective {
  regexAadhaar = '^[0-9][0-9]{0,11}$';
  regexPan = '^[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}$'
  str = '';
  constructor(private element: ElementRef) {}
  //  HostListener for keypress and paste eventx
  @Input() elementId:string;
  @HostListener('keypress', ['$event']) onInputChange(event: any) {
    console.log(this.elementId);
    if(this.element.nativeElement.id === 'aadhaar'){
      if (
        this.element.nativeElement.value.length !== 0 &&
        this.element.nativeElement.value.length < 14 &&
        (this.element.nativeElement.value.length + 1) % 5 === 0
      ) {
        this.element.nativeElement.value = this.element.nativeElement.value + '-';
      }
      this.str = this.element.nativeElement.value.replaceAll('-', '');

      if (!new RegExp(this.regexAadhaar).test(this.str + event?.key)) {
        event.preventDefault();
        return false;
      }
      return true;
    }
    // validation for pan card 
    else{
      if(! new RegExp(this.regexPan).test(this.element.nativeElement.value + event.key)){
        event.preventDefault();
        return false;
      }
      return true;
      // if(this.element.nativeElement.value.length <= 5){
      //   if(! new RegExp('^[A-Z]{0, 5}$').test(this.element.nativeElement.value+event.key)){
      //     event.preventDefault()
      //     return false;
      //   }
      //   else {return true}
      // }
      // else if(this.element.nativeElement.value.length <= 9 ){
      //   if(! new RegExp('^[A-Z]{5}[0-9]{0, 4}$').test(this.element.nativeElement.value+event.key)){
      //     event.preventDefault()
      //     return false;
      //   }
      //   else {return true}
      // }
      // else{
      //   if(! new RegExp('^[A-Z]{5}[0-9]{4}[A-Z]{1}$').test(this.element.nativeElement.value+event.key)){
      //     event.preventDefault()
      //     return false;
      //   }
      //   else {return true;}
      // }
    }
  }

  // @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
  //   this.validateFields(event);
  // }

  // //  Function for validate fields (basically for )
  // validateFields(event: ClipboardEvent) {
  //   event.preventDefault();

  //   const clipboardData = event.clipboardData;
  //   if (clipboardData) {
  //     const pastedText = clipboardData
  //       .getData('text/plain')
  //       .replace(/[^a-zA-Z]/g, '');

  //     const selection = window.getSelection();
  //     if (selection) {
  //       const range = selection.getRangeAt(0);
  //       range.deleteContents();
  //       range.insertNode(document.createTextNode(pastedText));
  //     }
  //   }
  // }
}
