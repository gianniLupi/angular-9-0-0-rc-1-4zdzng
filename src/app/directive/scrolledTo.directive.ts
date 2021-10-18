import {
  Directive,
  ContentChildren,
  ElementRef,
  QueryList,
  HostListener,
  Output,
  EventEmitter,
  Input
} from "@angular/core";

@Directive({
  selector: "[scrolledTo]",
  exportAs: "scrolledTo"
})
export class ScrolledToDirective {
  @Input() offsetElement: number;
  @Output() reachedIndex: EventEmitter<number> = new EventEmitter();

  @ContentChildren("scrolledToElement") scrolledToElements = new QueryList<
    ElementRef
  >();

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    const hashes = this.scrolledToElements.toArray();
    while (hashes.length) {
      const el = hashes.pop();
      const elementPosition = el.nativeElement.offsetTop;
      const elementHeight = el.nativeElement.clientHeight;
      const scrollPosition = window.pageYOffset;

      if (
        scrollPosition + this.offsetElement >=
        elementPosition + elementHeight
      ) {

        this.reachedIndex.emit(hashes.length);
        return;
      }
    }

    this.reachedIndex.emit(0);
  }
}
