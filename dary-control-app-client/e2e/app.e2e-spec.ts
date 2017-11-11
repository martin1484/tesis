import { DaryControlAppClientPage } from './app.po';

describe('dary-control-app-client App', function() {
  let page: DaryControlAppClientPage;

  beforeEach(() => {
    page = new DaryControlAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
