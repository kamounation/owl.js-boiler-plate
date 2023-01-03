import { NextFunction, Request, Response } from 'express';
import { AppRes, catchAsync, httpStatus } from 'owl-factory';
import ExampleService from 'services/example.service';

class ExampleController {
  private service: ExampleService = new ExampleService();

  public getData = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (!body.name) return next(new AppRes(httpStatus.BAD_REQUEST, 'provide a name field for json data'));

    const data = this.service.getData(body);

    res.status(httpStatus.OK).send(data);
  });
}

export default ExampleController;
