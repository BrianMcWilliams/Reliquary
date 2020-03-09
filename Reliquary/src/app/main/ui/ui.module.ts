import { NgModule } from '@angular/core';

import { UIAngularMaterialModule } from 'src/app/main/ui/angular-material/angular-material.module';
import { UICardsModule } from 'src/app/main/ui/cards/cards.module';
import { UIFormsModule } from 'src/app/main/ui/forms/forms.module';
import { UIIconsModule } from 'src/app/main/ui/icons/icons.module';
import { UITypographyModule } from 'src/app/main/ui/typography/typography.module';
import { UIHelperClassesModule } from 'src/app/main/ui/helper-classes/helper-classes.module';
import { UIPageLayoutsModule } from 'src/app/main/ui/page-layouts/page-layouts.module';
import { UIColorsModule } from 'src/app/main/ui/colors/colors.module';

@NgModule({
    imports: [
        UIAngularMaterialModule,
        UICardsModule,
        UIFormsModule,
        UIIconsModule,
        UITypographyModule,
        UIHelperClassesModule,
        UIPageLayoutsModule,
        UIColorsModule
    ]
})
export class UIModule
{
}
