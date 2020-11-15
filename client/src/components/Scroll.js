import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'auto', border: '1px solid white', height: props.height }}>
            {props.children}
        </div>
    );
};

export default Scroll;