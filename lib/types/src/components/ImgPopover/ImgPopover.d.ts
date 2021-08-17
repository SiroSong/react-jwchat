/// <reference types="react" />
import PropTypes from 'prop-types';
interface IProps {
    onImage: Function;
}
declare function ImgPopover({ onImage }: IProps): JSX.Element;
declare namespace ImgPopover {
    var propTypes: {
        onImage: PropTypes.Validator<(...args: any[]) => any>;
    };
}
export default ImgPopover;
