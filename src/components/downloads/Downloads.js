import React from "react";
import Wrapper from "../layout/Wrapper";

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
						href="https://www.elecsysmfg.com/wp-content/uploads/2021/07/Elecsys-Profile-07262021-HD-Revision-3.pdf"
						className="btn waves-effect waves-light blue darken-1"
					>
						<i className="material-icons left prefix">cloud_download</i>
						<span>
							PDF <small>6 Mb</small>
						</span>
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col s12 center">
					<a
						// href="http://www.elecsysmfg.com/wp-content/uploads/2019/01/Elecsys%20Profile%20010719.ppt"
						href="https://drive.google.com/file/d/1uCw-lMgd0fAI5kpPbCET5jwoqrTL7OUh/view"
						rel="noreferrer noopener"
						className="btn waves-effect waves-light red lighten-1"
					>
						<i className="material-icons left prefix">cloud_download</i>
						<span>
							PPT <small>88 Mb</small>
						</span>
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

export default Downloads;
