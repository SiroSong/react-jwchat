/// <reference types="react" />
import PropTypes from 'prop-types';
interface IProps {
    tools?: any[];
    onEmojiSelect?: Function;
    onImage?: Function;
}
declare function ChatToolBar({ tools, onEmojiSelect, onImage, }: IProps): JSX.Element;
declare namespace ChatToolBar {
    var propTypes: {
        tools: PropTypes.Requireable<any[]>;
        onEmojiSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onImage: PropTypes.Validator<(...args: any[]) => any>;
    };
}
export default ChatToolBar;
