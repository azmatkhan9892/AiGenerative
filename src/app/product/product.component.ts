// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product.component.html',
//   styleUrl: './product.component.scss'
// })
// export class ProductComponent {
//   tableview:boolean = false;
//   listview:boolean = false;
//   GridView:boolean = true;

//   constructor(){}

//   ngOnInit(){
//     this.gridView();
//   }
//   gridView(){
//     this.tableview = false;
//     this.listview = false;
//     this.GridView = true;
//     console.log("grid Button clicked")
//   }
//   listView(){
//     this.tableview = false;
//     this.listview = true;
//     this.GridView = false;
//     console.log("list Button clicked")
//   }
//   tableView(){
//     this.tableview = true;
//     this.listview = false;
//     this.GridView = false;
//     console.log("table Button clicked")
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import {
//   HttpClient,
//   HttpClientModule,
//   HttpHeaders,
// } from '@angular/common/http';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule],
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.scss'],
// })
// export class ProductComponent {
//   tableview: boolean = false;
//   listview: boolean = false;
//   GridView: boolean = true;
//   products: any[] = [];
//   selectedCategories: string[] = [];
//   selectedToolProperties: string[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.loadProducts(); // Call the API on initialization
//     this.gridView();
//   }

//   loadProducts() {
//     const apiUrl = 'https://generativetools.ai/connect/products/list/all/';
//     const categoryString = this.selectedCategories.join(','); // Join selected categories with a comma
//     const toolPropString = this.selectedToolProperties.join(','); // Join selected tool properties with a comma

//     const fullUrl = `${apiUrl}?category=${categoryString}&toolprop=${toolPropString}&offset=0&total=25&fetchField=permalink,ImageLogo,ToolName,ToolShortInfo,Rating,CategoryIds,ToolLink,ToolProperty,logoDarkMode&alternetProduct=&orderBy=`;

//     const headers = new HttpHeaders({
//       Authorization:
//         'Basic dXNlcjk4NzU0NTo2ZzVmZDY0ZzU0ZzVmNGY1NXNhNWZldDV0NHV1b2k1dW80',
//     });

//     this.http.get(fullUrl, { headers }).subscribe(
//       (response: any) => {
//         console.log('API Response:', response);
//         this.products = response.data;
//       },
//       (error) => {
//         console.error('API Error:', error);
//       }
//     );
//   }

//   onCategoryChange(event: Event) {
//     const target = event.target as HTMLInputElement;
//     if (target.checked) {
//       this.selectedCategories.push(target.value);
//     } else {
//       this.selectedCategories = this.selectedCategories.filter(
//         (category) => category !== target.value
//       );
//     }
//     this.loadProducts(); // Call API when filter changes
//   }

//   onToolPropertyChange(event: Event) {
//     const target = event.target as HTMLInputElement;
//     if (target.checked) {
//       this.selectedToolProperties.push(target.value);
//     } else {
//       this.selectedToolProperties = this.selectedToolProperties.filter(
//         (toolProp) => toolProp !== target.value
//       );
//     }
//     this.loadProducts(); // Call API when filter changes
//   }

//   gridView() {
//     this.tableview = false;
//     this.listview = false;
//     this.GridView = true;
//     console.log('Grid Button clicked');
//   }

//   listView() {
//     this.tableview = false;
//     this.listview = true;
//     this.GridView = false;
//     console.log('List Button clicked');
//   }

//   tableView() {
//     this.tableview = true;
//     this.listview = false;
//     this.GridView = false;
//     console.log('Table Button clicked');
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  tableview: boolean = false;
  listview: boolean = false;
  GridView: boolean = true;
  products: any[] = [];
  selectedCategories: string[] = [];
  selectedToolProperties: string[] = [];
  offset: number = 0; // Initialize offset
  total: number = 15; // Initial total count
  loading: boolean = true;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts(); // Call the API on initialization
    this.gridView();
  }

  loadProducts() {
    const apiUrl = 'https://generativetools.ai/connect/products/list/all/';
    const categoryString = this.selectedCategories.join(','); // Join selected categories with a comma
    const toolPropString = this.selectedToolProperties.join(','); // Join selected tool properties with a comma
    this.loading = true;
    // const fullUrl = `${apiUrl}?category=${categoryString}&toolprop=${toolPropString}&offset=${this.offset}&total=${this.total}&fetchField=permalink,ImageLogo,ToolName,ToolShortInfo,Rating,CategoryIds,ToolLink,ToolProperty,logoDarkMode&alternetProduct=&orderBy=`;
    const fullUrl = 'https://b189-103-152-101-63.ngrok-free.app/api/products';

    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Basic dXNlcjk4NzU0NTo2ZzVmZDY0ZzU0ZzVmNGY1NXNhNWZldDV0NHV1b2k1dW80',
    // });
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'any-value',
    });
    this.http.get(fullUrl, { headers }).subscribe(
      (response: any) => {
        console.log(response);
        // const parsedResponse = JSON.parse(response); // Manually parse the response
        // console.log('Parsed API Response:', parsedResponse);
        this.products.push(...response.data); // Push new products to existing array
        debugger;
        console.log(this.products);
        this.offset += 8; // Increase offset by 15 after loading new products
        this.loading = false;
      },
      (error) => {
        console.error('API Error:', error);
        this.loading = false;
      }
    );
  }

  // HostListener to detect scroll events
  // @HostListener('window:scroll', [])
  // onScroll() {
  //   const productList = document.getElementById('prdt-list');

  //   if (productList) {
  //     const rect = productList.getBoundingClientRect();
  //     // Check if we've scrolled to the bottom of the div
  //     if (rect.bottom <= window.innerHeight) {
  //       this.loadProducts(); // Call the loadProducts method to fetch more data
  //     }
  //   }
  // }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectedCategories.push(target.value);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (category) => category !== target.value
      );
    }
    this.offset = 0; // Reset offset on category change
    this.products = []; // Reset products to avoid duplication
    this.loadProducts(); // Call API when filter changes
  }

  onToolPropertyChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectedToolProperties.push(target.value);
    } else {
      this.selectedToolProperties = this.selectedToolProperties.filter(
        (toolProp) => toolProp !== target.value
      );
    }
    this.offset = 0; // Reset offset on tool property change
    this.products = []; // Reset products to avoid duplication
    this.loadProducts(); // Call API when filter changes
  }

  gridView() {
    this.tableview = false;
    this.listview = false;
    this.GridView = true;
    console.log('Grid Button clicked');
  }

  listView() {
    this.tableview = false;
    this.listview = true;
    this.GridView = false;
    console.log('List Button clicked');
  }

  tableView() {
    this.tableview = true;
    this.listview = false;
    this.GridView = false;
    console.log('Table Button clicked');
  }
}
