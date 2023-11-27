import { expect, browser, $ } from '@wdio/globals'

describe('Cart', () => {
    it('should add product to the cart', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('input[type="submit"]').click()
        const product = await $('.inventory_item_name').getText();
        await $('.btn_inventory').click()

        expect(await $('.shopping_cart_badge').getText()).toEqual('1');

        await $('#shopping_cart_container').click()

        expect(await $('.inventory_item_name').getText()).toEqual(product);

        await $('[id^="remove"]').click()

        expect(await $$('.cart_item').length).toEqual(0)
    });
});