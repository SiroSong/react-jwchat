/// <reference types="react" />
import PropTypes from 'prop-types';
interface IProps {
    onSelect: Function;
}
declare function EmojiPopover({ onSelect }: IProps): JSX.Element;
declare namespace EmojiPopover {
    var propTypes: {
        onSelect: PropTypes.Validator<(...args: any[]) => any>;
    };
}
export default EmojiPopover;
