import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  //element ref là giá trị html của directive
  //$event.target là giá trị html mà mình click vào
  constructor(private elementRef: ElementRef) {}
  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    // Check if the clicked element or any of its ancestors have the ID 'buttonMenu'
    const isInsideButtonMenu = target.closest('#buttonMenu') !== null;

    if (!clickedInside && !isInsideButtonMenu) {
      this.clickOutside.emit();
    }
  }
}
