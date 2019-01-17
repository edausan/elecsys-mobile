import React from 'react';

const PageTitle = (props) => {
    return (
        <blockquote className="blue-text page-title"><h4>{props.title}</h4></blockquote>
    )
}

export default PageTitle