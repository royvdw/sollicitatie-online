import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from "./store/reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import { DefaultHeaderComponent } from './layout/default-header/default-header.component';
import { DefaultFooterComponent } from './layout/default-footer/default-footer.component';
import { DefaultMainComponent } from './layout/default-main/default-main.component';
import { DefaultNavComponent } from './blocks/default-nav/default-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AccountDropdownComponent } from './components/account-dropdown/account-dropdown.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginPromptComponent} from "./blocks/login-prompt/login-prompt.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {AuthService} from "./_services/auth/auth.service";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {UserEffects} from "./store/effects/user.effects";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DefaultMainComponent,
    DefaultNavComponent,
    SearchBarComponent,
    AccountDropdownComponent,
    MainNavigationComponent,
    LoginPageComponent,
    LoginPromptComponent,
    DashboardPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      UserEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
