import {AbstractHistoryOptions} from "../../types";
import User from "../../../user/User";

export interface LifecycleHistoryConnectionOptions extends AbstractHistoryOptions {
    user: User
}
