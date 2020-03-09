import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from 'src/@fuse/utils';
export class Product
{

    /**
     * Constructor
     *
     * @param product
     */
    constructor(product?)
    {
        product = product || {};
        this['ASIN'] = product['ASIN'] || FuseUtils.generateGUID();
        this['Barcode'] = product['Barcode'] || '';
        this['Brand'] = product['Brand'] || '';
        this['Buy Price'] = product['Buy Price'] || '';
        this['Category'] = product['Category'] || [];
        this['Description'] = product['Description'] || '';
        this['Domestic Only'] = product['Domestic Only'] || '';
        this['MSRP'] = product['MSRP'] || '';
        this['Manufacturer SKU'] = product['Manufacturer SKU'] || '';
        this['Max Qty'] = product['Max Qty'] || '';
        this['Product Name'] = product['Product Name'] || '';
        this['Sell Price'] = product['Sell Price'] || '';
        this['Tax Exempt'] = product['Tax Exempt'] || '';
        this['Total Qty'] = product['Total Qty'] || '';
        this['URL'] = product['URL'] || '';
        this['Weight'] = product['Weight'] || '';
        this['Wishlists'] = product['Wishlists'] || '';

    }

    /**
     * Add category
     *
     * @param {MatChipInputEvent} event
     */
    // addCategory(event: MatChipInputEvent): void
    // {
    //     const input = event.input;
    //     const value = event.value;

    //     // Add category
    //     if ( value )
    //     {
    //         this['Category'].push(value);
    //     }

    //     // Reset the input value
    //     if ( input )
    //     {
    //         input.value = '';
    //     }
    // }

    /**
     * Remove category
     *
     * @param category
     */
    // removeCategory(category): void
    // {
    //     const index = this.categories.indexOf(category);

    //     if ( index >= 0 )
    //     {
    //         this.categories.splice(index, 1);
    //     }
    // }

    /**
     * Add tag
     *
     * @param {MatChipInputEvent} event
     */
    // addTag(event: MatChipInputEvent): void
    // {
    //     const input = event.input;
    //     const value = event.value;

    //     // Add tag
    //     if ( value )
    //     {
    //         this.tags.push(value);
    //     }

    //     // Reset the input value
    //     if ( input )
    //     {
    //         input.value = '';
    //     }
    // }

    /**
     * Remove tag
     *
     * @param tag
     */
    // removeTag(tag): void
    // {
    //     const index = this.tags.indexOf(tag);

    //     if ( index >= 0 )
    //     {
    //         this.tags.splice(index, 1);
    //     }
    // }
}
