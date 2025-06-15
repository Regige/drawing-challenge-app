import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page';
import { ChallengePageComponent } from './components/challenge-page/challenge-page';
import { ImprintPageComponent } from './components/imprint-page/imprint-page';
import { PrivacyPolicyPageComponent } from './components/privacy-policy-page/privacy-policy-page';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'challenge', component: ChallengePageComponent },
  { path: 'imprint', component: ImprintPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
];
