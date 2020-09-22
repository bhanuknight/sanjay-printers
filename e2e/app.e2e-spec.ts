import { SanjayPrintersPage } from './app.po';

describe('sanjay-printers App', function() {
  let page: SanjayPrintersPage;

  beforeEach(() => {
    page = new SanjayPrintersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
