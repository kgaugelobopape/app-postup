import { AppPostupPage } from './app.po';

describe('app-postup App', () => {
  let page: AppPostupPage;

  beforeEach(() => {
    page = new AppPostupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
