import {Router} from "owl-factory"

export interface Routes{
    path?: string;
    router: typeof Router;
}