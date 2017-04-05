import { MyDataBindingDemoPage } from './app.po';

describe('my-data-binding-demo App', () => {
  let page: MyDataBindingDemoPage;

  beforeEach(() => {
    page = new MyDataBindingDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
