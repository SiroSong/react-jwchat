import { CSSProperties } from 'react';
import PropTypes from 'prop-types';
interface IProps {
    styles?: CSSProperties;
    selected: boolean;
    border: boolean;
    contact: any;
    onClick: Function;
}
declare function ContactItem({ styles, selected, border, contact, onClick, }: IProps): JSX.Element;
declare namespace ContactItem {
    var propTypes: {
        contact: PropTypes.Validator<object>;
        className: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<object>;
    };
    var defaultProps: {
        onClick: () => void;
    };
}
export default ContactItem;
