import { Component, OnInit , Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-doc-workspace',
  templateUrl: './doc-workspace.component.html',
  styleUrls: ['./doc-workspace.component.css']
})
export class DocWorkspaceComponent implements OnInit {

  theHtmlString : string;
  name: string;
  constructor(private http: HttpClient,  private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    //debugger;
     this.route.queryParams.subscribe(params => {
       debugger;
        this.name = params['name'];
     
        this.http.get('../../assets/htmlFile/' +  this.name).subscribe(
          data => {  
          //debugger;
          
          console.log('json standard lode file');
          this.theHtmlString =data.toString();
        },(err) => {
        
        console.log("error json standard lode file ")
        this.theHtmlString = err.error.text; 
       }
      );
    
    });
  }

}
