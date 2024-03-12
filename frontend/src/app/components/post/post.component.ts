import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { Posts } from '../../utils/interfaces';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule, MatTooltipModule, MatMenuModule, MatCardModule, MatDividerModule, MatBadgeModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  @Input() data: Posts[] = [{
    title: "Post Número 1",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    ",
    likes: 15,
    userId: {
      fullName: "Duvan Javier Avila",
      age: 26,
      email: "javierausaque@gmail.com",
      createdAt: new Date(),
    },
    createdAt: new Date()
  },
  {
    title: "Test",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    ",
    likes: 8,
    userId: {
      fullName: "Pepito perez",
      age: 26,
      email: "javierausaque@gmail.com",
      createdAt: new Date(),
    },
    createdAt: new Date()
  }]


  public addPost(post: Posts) {
    post.likes = parseInt(post.likes!!.toString()) + 1
  }


}
