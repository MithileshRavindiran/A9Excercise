import { AppException } from './app.exception';

export class NotFoundException extends AppException {
    constructor(error?:any)  {
        super();
    }
}