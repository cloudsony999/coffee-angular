import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-servicelayer',
  templateUrl: './servicelayer.component.html',
  styleUrls: ['./servicelayer.component.css']
})
export class ServicelayerComponent implements OnInit{
  posts:any;
constructor(private ps:PostService)
{
alert('service layer injected....')
}

  ngOnInit() {
    alert('NGINIT called!!!!....')
    this.ps.getAmitava()
      .subscribe(response => {
        this.posts = response;
      });

}
}
