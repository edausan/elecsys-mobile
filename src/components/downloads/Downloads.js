import React from 'react';
import Wrapper from '../layout/Wrapper';

const Downloads = () => {
	return (
		<Wrapper title="Downloads">
			<div className="row center">
				<h6>
					<strong>Download Company Profile</strong>
				</h6>
			</div>
			<div className="row">
				<div className="col s12 center">
					<a
						href="http://www.elecsysmfg.com/wp-content/uploads/2020/06/Elecsys-Profile-02202020-HD-Revision-2.pdf"
						rel="noreferrer noopener"
						className="btn waves-effect waves-light blue darken-1"
					>
						<i className="material-icons left prefix">cloud_download</i>
						<span>
							PDF <small>9 Mb</small>
						</span>
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col s12 center">
					<a
						// href="http://www.elecsysmfg.com/wp-content/uploads/2019/01/Elecsys%20Profile%20010719.ppt"
						href="https://drive.google.com/file/d/15VvO66z0zGIS6ngFs3Cpfce9OvM8Bgco/view?usp=sharing"
						rel="noreferrer noopener"
						className="btn waves-effect waves-light red lighten-1"
					>
						<i className="material-icons left prefix">cloud_download</i>
						<span>
							PPT <small>86 Mb</small>
						</span>
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

export default Downloads;
