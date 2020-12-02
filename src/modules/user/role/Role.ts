import { RoleTypes } from './type/RoleTypes';

export interface Role {
    id: string;
    roleTypes: RoleTypes;
    assignedBy: string;
}
