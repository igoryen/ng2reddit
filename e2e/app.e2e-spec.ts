import { Ng2redditPage } from './app.po';

describe('ng2reddit App', function() {
  let page: Ng2redditPage;

  beforeEach(() => {
    page = new Ng2redditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
