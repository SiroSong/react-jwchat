/// <reference types="react" />
import { IContact } from '../Chat/Chat';
interface IProps {
    me: IContact;
    onSend: Function;
    onImage?: Function;
    height: number;
}
declare type MessageType = 'text' | 'image';
export declare type TPureMsg = {
    type: MessageType;
    content: string;
};
export declare type TMessage = {
    _id: string;
    date: number;
    user: IContact;
    message: TPureMsg;
};
export default function ChatInput({ me, onSend, onImage, height, }: IProps): JSX.Element;
export {};
