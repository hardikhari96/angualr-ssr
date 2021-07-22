import { Component, OnInit } from '@angular/core';
import { Title,Meta ,} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private metaTagService: Meta,private title:Title) { }


  ngOnInit(): void {
    this.title.setTitle('Login Page');
    this.metaTagService.addTag({name:'description',content:'hsfhasfhakjsfh asfhksj fkasf'});
    this.metaTagService.updateTag({name:'description',content:'hsfhasfhakjsfh asfhksj fkasf'});

  }

}
