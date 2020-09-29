import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tmp_files: ListFile[] = [];
 
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.loadEmployes();
     // debugger;
  }

  loadEmployes(){    
     this.http.get<ListFile[]>("../../assets/htmlFile/1.txt").subscribe(
      data=>{
        console.log(data);
        this.tmp_files = data;

      }, err=>{
        
        console.log(err);
        this.tmp_files = err.error.text; 
      }
    );

  }

}
export class ListFile {
  constructor( public name?: string,
    public path?: string){}
 
}


