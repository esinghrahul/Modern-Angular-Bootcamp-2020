import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

   modalFlag = false;
   items = [
     {title: 'What is a dog?', content: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'},
     {title: 'What kinds of dogs are there?', content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'},
     {title: 'How do you acquire a dog?', content: 'hree common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'}
   ];

  constructor() { }

  ngOnInit(): void {
  }

  onModalClick(){
    this.modalFlag = !this.modalFlag;
  }

}
