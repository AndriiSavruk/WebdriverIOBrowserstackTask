 describe('My First demo appp testing', () => {
    // it('test-case #1-1 Forms input field data entering checking', async () => {
    //     // Step 1 Tap on 'Forms' in the bottom menu
    //  await $(`~Forms`).click();
    //  await browser.pause(2000);
    //  await expect($('//android.widget.TextView[@text="Form components"]')).toBeDisplayed();
    //  // Step 2 Type text in the input field
    //  await $(`//android.widget.EditText[@content-desc="text-input"]`).setValue(`random text`);
    //  await browser.pause(2000);
    //  await expect($('//android.widget.TextView[@content-desc="input-text-result"]')).toHaveValue('random text');

    // })

    it('test-case #1-2 Horizontal swipe checking',  async () => {
        // Step 1 Tap on 'Swipe' in the bottom menu
        await $('~Swipe').click();
        await expect($('//android.widget.TextView[@text="Swipe horizontal"]')).toBeDisplayed();
        // Step 2 Tap on the fourth dot in the bottom of the screen
        await $('//android.view.ViewGroup[@content-desc="Carousel"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup').click();
        await expect($('//android.widget.TextView[@text="SUPPORT VIDEOS"]')).toBeDisplayed();
        await expect($('//android.widget.TextView[@text="SUPPORT VIDEOS"]')).toHaveText('SUPPORT VIDEOS');
    })
})


