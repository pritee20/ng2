import {Component} from '@angular/core';


@Component({
    selector: 'pannel',
    template: `
      <div class="panel-group">
        <div class="panel panel-default">
          <div class="panel-heading"  (click)="toggle()">
            <span class="glyphicon" [ngStyle]="{'float': 'right'}" [ngClass]="{
            'glyphicon-menu-down': !isDisplay,
            'glyphicon-menu-up': isDisplay
          }"></span>
            <ng-content select=".panel-title"></ng-content>
          </div>
          <div class="panel-collapse" *ngIf="isDisplay">
            <ng-content select=".panel-body"></ng-content>
          </div>
        </div>
      </div>
    `
})

export class BootstrapPannel{
   isDisplay: boolean = false;
   toggle(){
    this.isDisplay = !this.isDisplay;
   }
    
}