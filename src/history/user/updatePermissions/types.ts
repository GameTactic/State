import { AbstractHistoryOptions } from '../../types';
import {UserPermission} from "../../../user";

export interface UserHistoryUpdatePermissionsOptions extends AbstractHistoryOptions {
    userId: string;
    permissions: Array<UserPermission>;
}
