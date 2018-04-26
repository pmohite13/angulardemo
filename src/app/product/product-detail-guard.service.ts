import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class ProductDetailGuardService implements CanActivate {
    constructor(private _router: Router){

    }
    canActivate(_route: ActivatedRouteSnapshot) : boolean{
        var id = +_route.url[1].path;
        if(isNaN(id) || id< 1){
            alert('Wrong product Id');
            this._router.navigate(['\product']);
            return false;
        }
        return true;
    }
}