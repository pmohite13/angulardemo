import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./Iproduct";

@Component({
    templateUrl:'./product-detail.component.html'    
})
export class AppProductDetail implements OnInit {
    
    constructor(private _route: ActivatedRoute, private _router: Router){}
    pageTitle:string = 'Product Detail';
    product: IProduct;

    ngOnInit(): void{
        var id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`;
this.product = {
    "productId": id,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
};
    }

    onBack():void{
            this._router.navigate(['\product']);
    }

}