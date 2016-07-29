import { TmpAdminPage } from './app.po';

describe('tmp-admin App', function() {
  let page: TmpAdminPage;

  beforeEach(() => {
    page = new TmpAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
