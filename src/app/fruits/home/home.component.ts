import { Component } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allFruits: Fruits[] = [];
  
  constructor(private fruitService: FruitsService) { }

  ngOnInit() : void {
    this.fruitService.getAll('fruits').subscribe((data) => {
      this.allFruits = data;
    })
  }
  delete(id: number) {
    this.fruitService.delete('fruits', id).subscribe(
      (data) => {
        this.allFruits = this.allFruits.filter(o => o.id != id);
      }
    )
  }
}
