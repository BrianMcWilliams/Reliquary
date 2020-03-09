import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from 'src/@fuse/fuse.module';
import { FuseSharedModule } from 'src/@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from 'src/@fuse/components';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { fuseConfig } from './fuse-config';

import { FakeDbService } from './fake-db/fake-db.service';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { LayoutModule } from './layout/layout.module';
import { StripeService } from './services/stripe/stripe.service';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path        : 'pages',
        loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path        : 'ui',
        loadChildren: () => import('./main/ui/ui.module').then(m => m.UIModule)
    },
    {
        path        : 'documentation',
        loadChildren: () => import('./main/documentation/documentation.module').then(m => m.DocumentationModule)
    },
    {
        path      : '*',
        redirectTo: 'apps/dashboards/analytics'
    }
];

const firebaseConfig = {
    apiKey: 'AIzaSyD1-03ws5P_W0PoPYHuKonjBC25srYsr9A',
    authDomain: 'reliquary-22fc5.firebaseapp.com',
    databaseURL: 'https://reliquary-22fc5.firebaseio.com',
    projectId: 'reliquary-22fc5',
    storageBucket: 'reliquary-22fc5.appspot.com',
    messagingSenderId: '669341095451',
    appId: '1:669341095451:web:0a81f1f8eb17ca6d64cabe',
    measurementId: 'G-YFBGJST868'
  };

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule
    ],
    providers: [ StripeService ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
