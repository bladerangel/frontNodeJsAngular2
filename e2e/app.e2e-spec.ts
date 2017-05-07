import { FrontNodeJsAngular2Page } from './app.po';

describe('front-node-js-angular2 App', () => {
  let page: FrontNodeJsAngular2Page;

  beforeEach(() => {
    page = new FrontNodeJsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
