import {APP_NAME} from "../../config";
export const MODULE_NAME = 'CURRENCY'

// '[4] Start listening to the web socket'
export const START_SOCKET_SUBSCRIPTION = `${APP_NAME}/${MODULE_NAME}/START_SOCKET_SUBSCRIPTION`
// [5] Close socket connection
export const STOP_SOCKET_SUBSCRIPTION = `${APP_NAME}/${MODULE_NAME}/STOP_SOCKET_SUBSCRIPTION`

export const Actions = {
    START_SOCKET_SUBSCRIPTION,
    STOP_SOCKET_SUBSCRIPTION
}

export interface BaseAction {
    type : string;
    payload?;
}
