/// <reference types="react" />
import PropTypes from 'prop-types';
import { TPureMsg } from '../ChatInput/ChatInput';
interface IProps {
    data: TPureMsg;
    isMe: boolean;
}
declare function MsgBubble({ data, isMe }: IProps): JSX.Element;
declare namespace MsgBubble {
    var propTypes: {
        data: PropTypes.Validator<object>;
        isMe: PropTypes.Validator<boolean>;
    };
}
export default MsgBubble;
