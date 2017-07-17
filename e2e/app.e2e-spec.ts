import { NetcraftDavidPage } from './app.po';

describe('netcraft-david App', () => {
  let page: NetcraftDavidPage;

  beforeEach(() => {
    page = new NetcraftDavidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
