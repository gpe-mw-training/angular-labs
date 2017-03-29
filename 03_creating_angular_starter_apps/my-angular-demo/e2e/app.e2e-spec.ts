import { MyAngularDemoPage } from './app.po';

describe('my-angular-demo App', () => {
  let page: MyAngularDemoPage;

  beforeEach(() => {
    page = new MyAngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
