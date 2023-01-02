import OwlFactory from 'owl-factory';

class TestController {
  getMsg = OwlFactory.catchAsync(async (req, res) => {
    res.send('Omor you don reach route oo');
  });
}

class TestRoute {
  path = '/test';

  router = OwlFactory.Router();

  controller = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getMsg);
  }
}

const server = new OwlFactory([new TestRoute()]);
server.listen();
