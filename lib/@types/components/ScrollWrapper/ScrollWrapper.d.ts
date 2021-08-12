import React, { CSSProperties } from 'react';
interface IProps {
    data: Object[];
    style: CSSProperties;
    scrollToBottom: boolean;
}
declare const ScrollWrapper: (Comp: React.FunctionComponent) => React.ForwardRefExoticComponent<IProps & React.RefAttributes<{}>>;
export default ScrollWrapper;
