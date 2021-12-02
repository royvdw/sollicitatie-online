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
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
