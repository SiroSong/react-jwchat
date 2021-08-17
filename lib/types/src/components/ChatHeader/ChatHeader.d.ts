/// <reference types="react" />
import { IContact } from '../Chat/Chat';
interface IProps {
    data: IContact;
}
declare function ChatHeader(props: IProps): JSX.Element;
declare namespace ChatHeader {
    var propTypes: {};
}
export default ChatHeader;
