import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() : void {
    this.postService.getAll().subscribe((data : Post[]) => {
      this.posts = data;
    })
  }

  deletePost(id: number) {
    this.postService.delete(id).subscribe((response: any) => {
      this.posts = this.posts.filter(p => p.id != id);
    })

  }
}
