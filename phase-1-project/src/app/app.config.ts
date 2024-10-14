import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SchedulePageComponent } from './schedule-page/schedule-page.component'


import { routes } from './app.routes';


export const appConfig: ApplicationConfig =  
{ path: 'schedule-page', component: SchedulePageComponent };
