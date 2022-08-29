import { Component } from '@angular/core';
import { Router }    from "@angular/router";

@Component ( {
  selector    : 'open-space-header',
  templateUrl : './header.component.html',
  styleUrls   : [ './header.component.scss' ],
} )
export class HeaderComponent {
  constructor (private _router: Router) {}

  public loginSupaBase(){
    this._router.navigate(['/login'])
  }

}
