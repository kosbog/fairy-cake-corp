import * as React from 'react';

interface IProps {
    sectionClass: string;
    children: object;
}

const Section = (props: IProps) => {
    return (
        <section className={props.sectionClass}>
            {props.children}
        </section>
    );
}

export default Section;