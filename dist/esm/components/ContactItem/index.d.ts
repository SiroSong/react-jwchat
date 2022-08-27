import { IContactItem } from '../../types';
declare function ContactItem(props: IContactItem): JSX.Element;
declare namespace ContactItem {
    var defaultProps: {
        onClick: () => void;
    };
}
export default ContactItem;
