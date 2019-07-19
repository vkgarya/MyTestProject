// e2e/pages/home-page/home-page.po.ts
import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class HomePage {

    navigateToHome(): promise.Promise<any> {
        return browser.get('/home');
    }

    getPageBrandName(): promise.Promise<string> {
        return element(by.css('.masthead-brand')).getText();
    }

    getNavBar(): ElementFinder {
        return element(by.tagName('nav'));
    }

    getAlbumButton(): ElementFinder {
        return this.getNavBar().all(by.css('a')).get(1);
    }

    getLearnMoreButton(): ElementFinder {
        return element(by.css('.lead a'));
    }
}