import {AbstractHistoryOptions} from "../../types";
import {TacticData} from "../../../socket/state";

export interface TacticHistoryAddOptions extends AbstractHistoryOptions {
    data: TacticData;
}
