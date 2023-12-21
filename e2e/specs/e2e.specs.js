 describe('My First demo appp testing', () => {
    it('test-case #1-1 Forms input field data entering checking', async () => {
        // Step 1 Tap on 'Forms' in the bottom menu
     await $(`~Forms`).click();
     await expect($('//android.widget.TextView[@text="Form components"]')).toBeDisplayed();
     await browser.pause(2000);
     // Step 2 Type text in the input field
     await $(`//android.widget.EditText[@content-desc="text-input"]`).setValue(`random text`);
     await browser.pause(2000);
     await expect($('//android.widget.EditText[@content-desc="text-input"]')).toHaveText('random text');
     await expect($('//android.widget.TextView[@content-desc="input-text-result"]')).toHaveText('random text');
    })

    it('test-case #1-2 Switch button in Forms checking', async () => {
        // Step 1 Tap on 'Forms' in the bottom menu
     await $(`~Forms`).click();
     await expect($('//android.widget.TextView[@text="Form components"]')).toBeDisplayed();
     await browser.pause(2000);
     // Step 2 Click on switcher
     await $('//android.widget.Switch[@content-desc="switch"]').click();
     await browser.pause(2000);
     await expect($('//android.widget.TextView[@content-desc="switch-text"]')).toHaveText('Click to turn the switch OFF');
    })

    it('test case #1-3 Check if dropdown menu appears in Forms', async () => {
         // Step 1 Tap on 'Forms' in the bottom menu
     await $(`~Forms`).click();
     await expect($('//android.widget.TextView[@text="Form components"]')).toBeDisplayed();
     await browser.pause(2000);
     // Step 2 Click on dropdown button
     await $('//android.widget.TextView[@text="󰅀"]').click();
     await browser.pause(2000);
     await expect($('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]')).toBeDisplayed();
     await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Select an item..."]').click();
    })

    it('test-case #1-4 Horizontal swipe checking',  async () => {
        // Step 1 Tap on 'Swipe' in the bottom menu
        await $('~Swipe').click();
        await expect($('//android.widget.TextView[@text="Swipe horizontal"]')).toBeDisplayed();
        // Step 2 Tap on the fourth dot in the bottom of the screen
        await $('//android.view.ViewGroup[@content-desc="Carousel"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup').click();
        await expect($('//android.widget.TextView[@text="SUPPORT VIDEOS"]')).toBeDisplayed();
        await expect($('//android.widget.TextView[@text="SUPPORT VIDEOS"]')).toHaveText('SUPPORT VIDEOS');
    })

    it('test case #1-5 Login with empty fields', async () => {
        // Step 1 Tap on 'Login' in the bottom menu
        await $('~Login').click();
        await expect($('//android.widget.TextView[@text="Login / Sign up Form"]')).toBeDisplayed();
        // Step 2 Click on 'Login' button
        await $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup').click();
        expect($('//android.widget.TextView[@text="Please enter a valid email address"]')).toBeDisplayed();
        expect($('//android.widget.TextView[@text="Please enter a valid email address"]')).toHaveText('Please enter a valid email address');
        expect($('//android.widget.TextView[@text="Please enter at least 8 characters"]')).toBeDisplayed();
        expect($('//android.widget.TextView[@text="Please enter at least 8 characters"]')).toHaveText('Please enter at least 8 characters');
    })
})


