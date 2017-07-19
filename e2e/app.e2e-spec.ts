import { Proj9Page } from './app.po';

describe('proj9 App', () => {
  let page: Proj9Page;

  beforeEach(() => {
    page = new Proj9Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
