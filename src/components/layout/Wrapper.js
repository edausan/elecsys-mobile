import React from 'react';

const Wrapper = (props) => {
    return (
        <section>
            <section className="container">
                <div className="row">
                    <blockquote className="blue-text page-title"><h4>{props.title}</h4></blockquote>
                </div>
            </section>

            {
                props.jumbotron ?
                    <section className="row">
                        {props.jumbotron}
                    </section> : null
            }

            <section className="container">
                <div className="row">
                    {props.children}
                </div>
            </section>
        </section>
    )
}

export default Wrapper