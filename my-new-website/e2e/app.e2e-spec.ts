import { MyNewWebsitePage } from './app.po';

describe('my-new-website App', () => {
  let page: MyNewWebsitePage;

  beforeEach(() => {
    page = new MyNewWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
