import * as React from 'react';

interface IProps {
    pageClass: string;
    children: object;
}

const Page = (props: IProps) => {
    return (
        <div className={`page ${props.pageClass}-page`}>
            {props.children}
        </div>
    );
}

export default Page;
