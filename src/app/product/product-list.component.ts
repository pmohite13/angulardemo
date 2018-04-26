import { Component } from "@angular/core";
import { IProduct } from "./Iproduct";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ProductService } from "./product-services";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class AppProductListComponent implements OnInit{

   
    showImage: boolean = false;
    imageWidth: number = 50;
  
    constructor(private _productService: ProductService){

    }
    
   
    _filteredCriteria :string;
    get filteredCriteria() : string {
        return this._filteredCriteria;
    }

    
    set filteredCriteria(value : string) {
        this._filteredCriteria = value;
        this.filteredProduct = this.filteredCriteria ? this.performFilter(this.filteredCriteria) : this.products;
    }
    
   

performFilter(criteria : string) : IProduct[] {
    criteria = criteria.toLocaleLowerCase();
    return this.products.filter((c) => c.productName.toLocaleLowerCase().indexOf(criteria) !== -1);
}
pageTitle:string;
starRatingClicked(rating: string) : void{
    this.pageTitle = 'Product List ' + rating;
}
products: IProduct[];
filteredProduct:IProduct[];

ngOnInit(): void {
   this._productService.getProducts()
   .subscribe(products => {
       this.products = products
       this.filteredProduct = this.products;
    }); 
}

  
   toggleImage(): void{
       this.showImage = !this.showImage;
   }
}