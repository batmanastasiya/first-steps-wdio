import { expect, browser, $ } from '@wdio/globals'

describe('Login form', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('input[type="submit"]').click()

        expect(await $('.title').getText()).toEqual('Products')
        expect(await $('#shopping_cart_container').isDisplayed()).toEqual(true)
        expect(await $$('.inventory_item').length).toBeGreaterThanOrEqual(1)

    });
});