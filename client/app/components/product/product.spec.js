import ProductModule from './product';
import ProductController from './product.controller';
import ProductComponent from './product.component';
import ProductTemplate from './product.html';

describe('Product', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ProductTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProductComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProductTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProductController);
    });
  });
});
