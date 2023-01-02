import ExampleController from "controllers/example.controller";
import { Router } from "owl-factory";

class ExamleRoute {
    public path?: string = "/example";
    public router = Router();
    protected controller:ExampleController = new ExampleController()

    constructor(){
        this.Routes()
    }

    private Routes(){
        this.router.post(`${this.path}`, this.controller.getData);
    }
}

export default ExamleRoute;