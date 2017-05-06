import { NglUploadSamplePage } from './app.po';

describe('ngl-upload-sample App', () => {
  let page: NglUploadSamplePage;

  beforeEach(() => {
    page = new NglUploadSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
