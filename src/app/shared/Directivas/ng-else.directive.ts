import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input()
   set ngElse(condition:boolean){
    if (condition) {
      this.viewcontenier.clear();
    } else {
      this.viewcontenier.createEmbeddedView(this.templateRef);
    }
   };

  constructor(private templateRef: TemplateRef<any> , private viewcontenier: ViewContainerRef) { }



}
