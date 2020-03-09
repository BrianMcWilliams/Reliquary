import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FuseSidebarModule, FuseThemeOptionsModule } from 'src/@fuse/components';
import { FuseSharedModule } from 'src/@fuse/shared.module';

import { ChatPanelModule } from 'src/app/layout/components/chat-panel/chat-panel.module';
import { ContentModule } from 'src/app/layout/components/content/content.module';
import { FooterModule } from 'src/app/layout/components/footer/footer.module';
import { NavbarModule } from 'src/app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'src/app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'src/app/layout/components/toolbar/toolbar.module';

import { HorizontalLayout1Component } from 'src/app/layout/horizontal/layout-1/layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ChatPanelModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
