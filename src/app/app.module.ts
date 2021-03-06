import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//NgRx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';

//Services
import { HeroService } from './services/hero.service';

//Components
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { AppComponent } from './app.component';

//Enviroment
import { environment } from '../enviroments/enviroment';

//Routes
import { APP_ROUTES } from './app-routing.module';

//Pipes.
import { HeightConversionPipe} from './pipes/heightConversion.pipe';
import { IdConversionPipe } from './pipes/idConversion.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroEditComponent,
    HeightConversionPipe,
    IdConversionPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot( effectsArr ),
    APP_ROUTES
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
