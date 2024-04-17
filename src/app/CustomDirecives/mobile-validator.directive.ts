import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMobileValidator]',
})
export class MobileValidatorDirective {
  regexStr = '^[0-9][0-9]{0,9}$';
  constructor(private element: ElementRef) {}

  //  HostListener for keypress and paste eventx
  @HostListener('keypress', ['$event']) onInputChange(event: any) {
    if (
      !new RegExp(this.regexStr).test(
        this.element.nativeElement.value + event?.key
      )
    ) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  //  Function for validate fields (basically for )
  validateFields(event: ClipboardEvent) {
    event.preventDefault();

    const clipboardData = event.clipboardData;
    if (clipboardData) {
      const pastedText = clipboardData
        .getData('text/plain')
        .replace(/[^a-zA-Z]/g, '');

      const selection = window.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(pastedText));
      }
    }
  }
}
