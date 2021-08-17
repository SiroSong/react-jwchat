import { Component, CSSProperties, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
interface IProps {
    onSend: Function;
    me: IContact;
    contact: IContact;
    style: CSSProperties & {
        height: number;
    };
    chatList: any[];
    onImage?: Function;
    onEarlier?: MouseEventHandler;
}
export interface IContact {
    id: number | string;
    avatar: string;
    nickname: string;
    message: string;
    date: string;
    desc: string;
}
export default class Chat extends Component<IProps, {}> {
    static propTypes: {
        onSend: PropTypes.Validator<(...args: any[]) => any>;
        me: PropTypes.Validator<object>;
        contact: PropTypes.Validator<object>;
        style: PropTypes.Validator<object>;
    };
    static defaultProps: {
        style: {
            width: number;
            height: number;
        };
        contact: {};
        me: {};
        chatList: never[];
        onSend: (msg: any) => void;
    };
    sendHandle: (msgData: any) => void;
    render(): JSX.Element;
}
export {};
