import Tactic from '../../../tactic/Tactic';

export interface CreateTacticPayload {
    roomId: string;
}

export interface CreateTacticResponse {
    tacticId: string;
}

export interface UpdateTacticPayload {
    data: Omit<Tactic, 'id'>;
}

export interface SingleTacticResponse {
    id: string;
    roomId: string;
    data: Omit<Tactic, 'id'>;
}
