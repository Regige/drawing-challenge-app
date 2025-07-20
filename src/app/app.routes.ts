import { Routes } from '@angular/router';
import { ChallengePage } from './components/challenge-page/challenge-page';
import { ImprintPage } from './components/imprint-page/imprint-page';
import { PrivacyPolicyPage } from './components/privacy-policy-page/privacy-policy-page';
import { StartComponent } from './components/start/start.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'challenge', component: ChallengePage },
  { path: 'imprint', component: ImprintPage },
  { path: 'privacy-policy', component: PrivacyPolicyPage },
];
