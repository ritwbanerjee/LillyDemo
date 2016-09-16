import { LillyDemoPage } from './app.po';

describe('lilly-demo App', function() {
  let page: LillyDemoPage;

  beforeEach(() => {
    page = new LillyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
