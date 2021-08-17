import { CSSProperties, MouseEventHandler } from 'react';
import { IContact } from '../Chat/Chat';
interface IProps {
    onEarlier?: MouseEventHandler;
    data: any[];
    me: IContact;
    style?: CSSProperties;
}
declare const ChatRecordList: (props: IProps) => JSX.Element;
export default ChatRecordList;
