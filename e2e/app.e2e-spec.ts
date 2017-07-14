import { ProductsViewerPage } from './app.po';

describe('products-viewer App', () => {
  let page: ProductsViewerPage;

  beforeEach(() => {
    page = new ProductsViewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
