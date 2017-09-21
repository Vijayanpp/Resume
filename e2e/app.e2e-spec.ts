import { ResumesPage } from './app.po';

describe('resumes App', () => {
  let page: ResumesPage;

  beforeEach(() => {
    page = new ResumesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
