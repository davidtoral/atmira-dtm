import {browser, by, element} from 'protractor';


describe('Atmira events', () => {
    browser.get('http://localhost:4200/');
    beforeEach(() => {
        browser.driver.manage().window().maximize();
      });

    it('Title is Atmira', () => {
        expect(element(by.id('page-title')).getText()).toBe('Atmira');
      });

    it('6 cards are created', () => {
        browser.waitForAngular();
        browser.driver.findElements(by.css('.card')).
          then((elems) => {
              expect(elems.length).toEqual(6);
            }
        );
    });

    it('Navigate to first card', () => {
      element(by.css('.card-button')).click();
    });

    it('Detail is created', () => {
      browser.waitForAngular();
      expect(element(by.id('detail')).isPresent()).toBe(true);
    });

    it('Go back to dashboard', () => {
      element(by.id('go-back-button')).click();
    });
});
