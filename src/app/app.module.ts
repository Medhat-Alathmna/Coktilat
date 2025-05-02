import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrimengComponentsModule } from './primeng-components.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [AppComponent],
    imports: [     
        BrowserModule,
        AppRoutingModule,
        PrimengComponentsModule
    ],
   
    bootstrap: [AppComponent]
})
export class AppModule {}
