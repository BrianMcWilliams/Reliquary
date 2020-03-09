import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { FuseSharedModule } from 'src/@fuse/shared.module';
import { FuseHighlightModule } from 'src/@fuse/components';

import { HelperClassesComponent } from 'src/app/main/ui/helper-classes/helper-classes.component';
import { HelperClassesPaddingMarginComponent } from 'src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component';
import { HelperClassesWidthHeightComponent } from 'src/app/main/ui/helper-classes/tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path     : 'helper-classes',
        component: HelperClassesComponent
    }
];

@NgModule({
    declarations: [
        HelperClassesComponent,
        HelperClassesPaddingMarginComponent,
        HelperClassesWidthHeightComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        FuseSharedModule,
        FuseHighlightModule,
    ],
})
export class UIHelperClassesModule
{
}
