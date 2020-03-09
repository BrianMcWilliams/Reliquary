import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from 'src/@fuse/shared.module';

import { FuseCountdownModule, FuseHighlightModule, FuseMaterialColorPickerModule, FuseWidgetModule } from 'src/@fuse/components';
import { DocsComponentsCountdownComponent } from 'src/app/main/documentation/components/countdown/countdown.component';
import { DocsComponentsHighlightComponent } from 'src/app/main/documentation/components/highlight/highlight.component';
import { DocsComponentsMaterialColorPickerComponent } from 'src/app/main/documentation/components/material-color-picker/material-color-picker.component';
import { DocsComponentsNavigationComponent } from 'src/app/main/documentation/components/navigation/navigation.component';
import { DocsComponentsProgressBarComponent } from 'src/app/main/documentation/components/progress-bar/progress-bar.component';
import { DocsComponentsSearchBarComponent } from 'src/app/main/documentation/components/search-bar/search-bar.component';
import { DocsComponentsSidebarComponent } from 'src/app/main/documentation/components/sidebar/sidebar.component';
import { DocsComponentsShortcutsComponent } from 'src/app/main/documentation/components/shortcuts/shortcuts.component';
import { DocsComponentsWidgetComponent } from 'src/app/main/documentation/components/widget/widget.component';

const routes = [
    {
        path     : 'countdown',
        component: DocsComponentsCountdownComponent
    },
    {
        path     : 'highlight',
        component: DocsComponentsHighlightComponent
    },
    {
        path     : 'material-color-picker',
        component: DocsComponentsMaterialColorPickerComponent
    },
    {
        path     : 'navigation',
        component: DocsComponentsNavigationComponent
    },
    {
        path     : 'progress-bar',
        component: DocsComponentsProgressBarComponent
    },
    {
        path     : 'search-bar',
        component: DocsComponentsSearchBarComponent
    },
    {
        path     : 'sidebar',
        component: DocsComponentsSidebarComponent
    },
    {
        path     : 'shortcuts',
        component: DocsComponentsShortcutsComponent
    },
    {
        path     : 'widget',
        component: DocsComponentsWidgetComponent
    }
];

@NgModule({
    declarations: [
        DocsComponentsCountdownComponent,
        DocsComponentsHighlightComponent,
        DocsComponentsMaterialColorPickerComponent,
        DocsComponentsNavigationComponent,
        DocsComponentsProgressBarComponent,
        DocsComponentsSearchBarComponent,
        DocsComponentsSidebarComponent,
        DocsComponentsShortcutsComponent,
        DocsComponentsWidgetComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        FuseSharedModule,

        FuseCountdownModule,
        FuseHighlightModule,
        FuseMaterialColorPickerModule,
        FuseWidgetModule
    ]
})
export class ComponentsModule
{
}
