import React from 'react'

const Wrapper = (props) => {
    return (
        <section>
            {
                props.title ?
                    <section className="container">
                        <blockquote className="blue-text page-title"><h4>{props.title}</h4></blockquote>
                    </section> : null
            }

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