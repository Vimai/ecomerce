import CriptoPaymentModule from './criptoPayment';
import CriptoPaymentController from './criptoPayment.controller';
import CriptoPaymentComponent from './criptoPayment.component';
import CriptoPaymentTemplate from './criptoPayment.html';

describe('CriptoPayment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CriptoPaymentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CriptoPaymentController();
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
      expect(CriptoPaymentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CriptoPaymentComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CriptoPaymentTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CriptoPaymentController);
    });
  });
});
