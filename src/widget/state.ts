import { IWidget } from "./widgetType";

export interface IState {
    widgets: IWidget[];
}

export const defaultState: IState = {
    widgets: []
}