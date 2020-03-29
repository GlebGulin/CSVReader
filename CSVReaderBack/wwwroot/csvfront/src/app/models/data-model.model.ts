import { StatusModel} from './status-model.model';
import {TypeModel} from './type-model.model';
export class DataModel {
    Id: number;

    TransactionId: number;

    StatusId: number;

    Status: string;
    // Status: StatusModel;

    TypeId: number;

    Type: string;

    ClientName: string;

    Amount: number;
}