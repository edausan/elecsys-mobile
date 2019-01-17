import React from 'react';
import { css } from 'glamor'

const Card = (props) => {
    return (
        <section className="card">
            <div className="card-content">
                <small className="card-title blue-text"><i className="material-icons left prefix">{props.icon}</i> <strong className={title}>{props.title}</strong></small>
                <div className={props.title !== 'Map' ? contentWrapper : ''}>
                    {
                        props.withLink ?
                            <a target="_blank" rel="noreferrer noopener" href={props.link}>{props.content}</a> :
                            props.content
                    }
                </div>
            </div>
        </section>
    )
}

const title = css({
    textTransform: 'uppercase'
})

const contentWrapper = css({
    fontSize: '1.1rem',
    paddingLeft: '2.8rem',
    '> a': {
        color: 'black',
        transition: '250ms ease',
        ':hover': {
            color: '#2196f3'
        }
    }
})

export default Card