import React from 'react';
import Wrapper from '../layout/Wrapper'

const Downloads = () => {
    return (
        <Wrapper title="Downloads">
            <div className="row center">
                <h6><strong>Download Company Profile</strong></h6>
            </div>
            <div className="row">
                <div className="col s12 center"><a href="http://www.elecsysmfg.com/wp-content/uploads/2018/10/Elecsys-Profile.pdf" rel="noreferrer noopener" className="btn waves-effect waves-light blue darken-1"><i className="material-icons left prefix">cloud_download</i><span>PDF <small>3.67Mb</small></span></a></div>
            </div>
            <div className="row">
                <div className="col s12 center"><a href="http://www.elecsysmfg.com/wp-content/uploads/2018/10/Elecsys-Profile-10-13-18-.ppt" rel="noreferrer noopener" className="btn waves-effect waves-light red lighten-1"><i className="material-icons left prefix">cloud_download</i><span>PPT <small>3.39Mb</small></span></a></div>
            </div>
        </Wrapper>
    );
}

export default Downloads