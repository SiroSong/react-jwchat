import React, { CSSProperties, ReactNode } from 'react';
declare type IProps = {
    data: Object[];
    style?: CSSProperties;
    scrollToBottom?: boolean;
    children?: ReactNode;
};
declare type HOC<InjectedProps, OwnProps> = <P>(Component: React.ComponentType<P & InjectedProps>) => React.ComponentType<P & OwnProps>;
declare const ScrollWrapper: HOC<{}, IProps>;
export default ScrollWrapper;
