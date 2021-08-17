/// <reference types="react" />
import PropTypes from 'prop-types';
import { TMessage } from '../ChatInput/ChatInput';
import { IContact } from '../Chat/Chat';
interface IProps {
    data: TMessage;
    me: IContact;
}
declare function MsgItem({ data, me }: IProps): JSX.Element;
declare namespace MsgItem {
    var propTypes: {
        data: PropTypes.Validator<object>;
        me: PropTypes.Validator<object>;
    };
}
export default MsgItem;
