import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/myphoto.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am currently a production support engineer in the biotech field hoping to gain more professional coding skills. I am currently enrolled in the Berkeley Coding Boot Camp. I had the oppportunity to gain skills in Javascript, CSS, React.js, MySQL, NoSQL, and MongoDB. 
				</p>
			</div>
		</section>
	);
}

export default About;
