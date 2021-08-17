import React, { UIEventHandler } from 'react';
import { IContact } from '../Chat/Chat';
interface IProps {
    onSelect?: Function;
    data: IContact[];
    onScroll: UIEventHandler<HTMLDivElement>;
}
declare const _default: React.ComponentType<IProps & {
    data: Object[];
    style?: React.CSSProperties | undefined;
    scrollToBottom?: boolean | undefined;
    children?: React.ReactNode;
}>;
export default _default;
