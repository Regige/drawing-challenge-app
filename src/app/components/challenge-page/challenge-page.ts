import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-challenge-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './challenge-page.html',
  styleUrl: './challenge-page.scss'
})
export class ChallengePage implements OnDestroy {
  selectedMotive: string = '';
  showTimeCard: boolean = false;
  showTechnicCard: boolean = false;
  showMaterialCard: boolean = false;

  technics: string[] = [
    'Draw only lines',
    'Draw only the shadows',
    'Draw only the highlights',
    'Draw only with one color but diffrent shades',
    'Draw with two complementary colors',
    'Draw with two contrasting colors',
    'Draw with two colors that are next to each other on the color wheel',
    'Draw with two colors that are opposite each other on the color wheel',
    'Draw with two colors that are similar but not the same',
    'Draw with two colors that are similar but not the same',
  ];

  materials: string[] = [
    'Pencil',
    'Pen',
    'Marker',
    'Paint',
    'Watercolor',
    'Charcoal',
    'Pastel',
    'Oil',
    'Acrylic',
    'Gouache',
    'Ink',
    'Digital',
    'Mixed Media',
    'Collage',
    'Photography',
    'Sculpture',
    '3D',
  ];

  // Timer properties
  timeRemaining: number = 0;
  timerSubscription?: Subscription;
  isTimerRunning: boolean = false;
  displayTime: string = '';

  // Available time options in seconds
  private timeOptions: number[] = [60, 180, 300, 600, 900, 1800]; // 1min, 3min, 5min, 10min, 15min, 30min

  toggleTechnicCard() {
    this.showTechnicCard = !this.showTechnicCard;
  }

  toggleTimeCard() {
    this.showTimeCard = !this.showTimeCard;
    if (this.showTimeCard) {
      this.startNewTimer();
    } else {
      this.stopTimer();
    }
  }

  toggleMaterialCard() {
    this.showMaterialCard = !this.showMaterialCard;
  }

  private startNewTimer() {
    // Stop any existing timer
    this.stopTimer();
    
    // Generate random time from options
    const randomIndex = Math.floor(Math.random() * this.timeOptions.length);
    this.timeRemaining = this.timeOptions[randomIndex];
    
    // Start countdown
    this.isTimerRunning = true;
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.updateDisplayTime();
      } else {
        this.stopTimer();
      }
    });
    
    // Set initial display time
    this.updateDisplayTime();
  }

  private stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }
    this.isTimerRunning = false;
  }

  private updateDisplayTime() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    this.displayTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  changeMotive(){

  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
