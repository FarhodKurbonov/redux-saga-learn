import {APP_NAME} from "../../config";
export const MODULE_NAME = 'COLLECTION'

// '[0] Request a new number to the NumberGenerator async service.'
export const GET_NUMBER_REQUEST_START = `${APP_NAME}/${MODULE_NAME}/GET_NUMBER_REQUEST_START`
//'[1] NumberGenerator async service returned a new number.'
export const GET_NUMBER_REQUEST_COMPLETED = `${APP_NAME}/${MODULE_NAME}/GET_NUMBER_REQUEST_COMPLETED`
export const GET_HIGHER_NUMBER_REQUEST_COMPLETED = `${APP_NAME}/${MODULE_NAME}/GET_NUMBER_REQUEST_COMPLETED`
// [2] Cancelling and on going number request
export const CANCEL_ONGOING_NUMBER_REQUEST = `${APP_NAME}/${MODULE_NAME}/CANCEL_ONGOING_NUMBER_REQUEST`
export const GET_NUMBER_REQUEST_USER_CONFIRMATION = `${APP_NAME}/${MODULE_NAME}/GET_NUMBER_REQUEST_USER_CONFIRMATION`

export const Actions = {
    GET_NUMBER_REQUEST_START,
    GET_NUMBER_REQUEST_COMPLETED,
    CANCEL_ONGOING_NUMBER_REQUEST,
    GET_HIGHER_NUMBER_REQUEST_COMPLETED,
    GET_NUMBER_REQUEST_USER_CONFIRMATION
}

export interface BaseAction {
    type : string;
    payload?;
}
