import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ChallengePage } from './components/challenge-page/challenge-page';
import { ImprintPage } from './components/imprint-page/imprint-page';
import { PrivacyPolicyPage } from './components/privacy-policy-page/privacy-policy-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'challenge', component: ChallengePage },
  { path: 'imprint', component: ImprintPage },
  { path: 'privacy-policy', component: PrivacyPolicyPage },
];
