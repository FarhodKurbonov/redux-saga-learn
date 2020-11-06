import {APP_NAME} from "../../config";
export const MODULE_NAME = 'collection'

// '[0] Request a new number to the NumberGenerator async service.'
export const GET_NUMBER_REQUEST_START = `${APP_NAME}/${MODULE_NAME}/GET_NUMBER_REQUEST_START`
//'[1] NumberGenerator async service returned a new number.'
export const GET_NUMBER_REQUEST_COMPLETED = `${APP_NAME}/${MODULE_NAME}/GET_NUMBER_REQUEST_COMPLETED`

export const Actions = {
    GET_NUMBER_REQUEST_START,
    GET_NUMBER_REQUEST_COMPLETED
}

export interface BaseAction {
    type : string;
    payload?;
}
