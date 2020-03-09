import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from 'src/@fuse/components/index';
import { FuseSharedModule } from 'src/@fuse/shared.module';

import { ChatPanelModule } from 'src/app/layout/components/chat-panel/chat-panel.module';
import { ContentModule } from 'src/app/layout/components/content/content.module';
import { FooterModule } from 'src/app/layout/components/footer/footer.module';
import { NavbarModule } from 'src/app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'src/app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'src/app/layout/components/toolbar/toolbar.module';

import { VerticalLayout3Component } from 'src/app/layout/vertical/layout-3/layout-3.component';

@NgModule({
    declarations: [
        VerticalLayout3Component
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ChatPanelModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayout3Component
    ]
})
export class VerticalLayout3Module
{
}
