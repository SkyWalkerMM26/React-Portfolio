import React from 'react';
import Project from '../components/Project';

function Portfolio() {
	const projects = [
		{
			name: 'Note Taker',
			description:
				'This is a note taking web application that uses an Express.js back end and will save and retreive note data from a JSON file. This application is deploy to Heroku',
			image: 'notetaking.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express',
               	'Heroku',
			],
			github: 'https://github.com/SkyWalkerMM26/Note-Taker',
			deployed: 'https://note-taker--mm.herokuapp.com/',
		},
		{
			name: 'Work Day Scheduler',
			description:
				'This is a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
			image: 'workdayscheduler.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'jQuery',
                'Moment.js',
			],
			github: 'https://github.com/SkyWalkerMM26/work-day-scheduler',
			deployed: 'https://skywalkermm26.github.io/work-day-scheduler/',
		},
		{
			name: 'Particle Solutions',
			description:
				'A web application that aims to offer particle solutions! This built site aims to help users to be more aware of air quality and pollen count in the entered city.',
			image: 'project1.png',
			technologies: [
                'HTML/CSS', 
                'JavaScript', 
                'jQuery',
                'Server-side APIs',
                'Local Storage',
            ],
			github: 'https://github.com/duffylaura/Particle-Problems',
			deployed: 'https://duffylaura.github.io/Particle-Problems/',
		},
		{
			name: 'Social Network API',
			description:
				'This is a web application to build an API for a social network applicaiton where users can share their thoughts, react to friends opinions, and create a friend list.',
			image: 'socialnetworkapi.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'Node.js',
				'Express',
                'Insomnia',
			],
			github: 'https://github.com/SkyWalkerMM26/Social-Network-API',
			deployed: 'https://www.youtube.com/watch?v=M3q-65Qxc1Q',
		},
		
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
