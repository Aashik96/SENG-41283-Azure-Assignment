import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message : string;
  text = "Hello! Welcome";
  
  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessage().subscribe(res=>{
      this.message = res
      console.log(res)
    }) 
  }

  
}
