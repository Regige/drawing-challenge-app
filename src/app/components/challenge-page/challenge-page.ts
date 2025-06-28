import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Import RouterLink

@Component({
  selector: 'app-challenge-page',
  standalone: true,
  imports: [CommonModule, RouterLink], // Add RouterLink here
  templateUrl: './challenge-page.html',
  styleUrl: './challenge-page.scss'
})
export class ChallengePage {
  showMotiveCard: boolean = false;
  showTechnicCard: boolean = false;
  showTimeCard: boolean = false;
  showMaterialCard: boolean = false;

  toggleMotiveCard() {
    this.showMotiveCard = !this.showMotiveCard;
  }

  toggleTechnicCard() {
    this.showTechnicCard = !this.showTechnicCard;
  }

  toggleTimeCard() {
    this.showTimeCard = !this.showTimeCard;
  }

  toggleMaterialCard() {
    this.showMaterialCard = !this.showMaterialCard;
  }
}
