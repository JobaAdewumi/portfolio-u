import React from 'react';

const Projects = () => {
	var rows = [];
	const projectData = {
		0: {
			name: 'All Status Saver',
			about:
				"The All Status Saver project is a mobile application created with Flutter. The App is a WhatsApp Status Saver, other social media's will be added later on.",
			timelineBeginning: 'August 1 2022',
			timelineEnd: 'To Date',
			githubLink: 'private',
			inBeta: true,
			packaged: true,
			downloadLink: '',
			backgroundImageLink: '../assets/images/projects/all-status-saver.jpg',
			backgroundImageClassName: 'first',
			images: [
				'assets/images/projects/ass-1.jpg',
				'assets/images/projects/ass-2.jpg',
				'assets/images/projects/ass-3.jpg',
			],
		},
		1: {
			name: 'Linkedin Clone',
			about:
				'The Linkedin Clone project is a Full stack Web application created with Ionic, Angular and Nestjs.',
			timelineBeginning: 'November 8 2021',
			timelineEnd: 'June 5 2022',
			githubLink: 'https://github.com/JobaAdewumi/linkedin-clone',
			inBeta: false,
			packaged: false,
			downloadLink: '',
			backgroundImageLink: '../assets/images/projects/all-status-saver.jpg',
			backgroundImageClassName: 'second',
			images: [
				'assets/images/projects/linkedin.png',
				'assets/images/projects/linkedin-1.png',
				'assets/images/projects/linkedin-2.png',
			],
		},
		2: {
			name: 'Unit Converter',
			about:
				'The Unit Converter project is a Cross platform Mobile application made with Flutter.',
			timelineBeginning: 'December 13 2021',
			timelineEnd: 'February 2 2022',
			githubLink: 'private',
			inBeta: true,
			packaged: true,
			downloadLink: '',
			backgroundImageLink: '../assets/images/projects/all-status-saver.jpg',
			backgroundImageClassName: 'third',
			images: [
				'assets/images/projects/uc-1.jpg',
				'assets/images/projects/uc-2.jpg',
				'assets/images/projects/uc-3.jpg',
			],
		},
		3: {
			name: 'MCFlow',
			about:
				'The McFlow project is a Full stack Web application created with Angular, Angular Material and Nestjs.',
			timelineBeginning: 'December 30 2021',
			timelineEnd: 'April 24 2022',
			githubLink: 'private',
			inBeta: false,
			packaged: false,
			downloadLink: '',
			backgroundImageLink: '../assets/images/projects/all-status-saver.jpg',
			backgroundImageClassName: 'fourth',
			images: [
				'assets/images/projects/mcf-1.png',
				'assets/images/projects/mcf-2.png',
				'assets/images/projects/mcf-3.png',
			],
		},
	};

	const objects = (index) => {
		const e = projectData[index];

		return (
			<div
				key={`${e.backgroundImageClassName}`}
				id={`${e.backgroundImageClassName}`}
				className={`projects__section__container__content__${e.backgroundImageClassName}`}>
				<div className='projects__section__container__content__name-back'>
					<h2 className='projects__section__container__content__name-back__name'>
						{e.name}
					</h2>
				</div>
				<div className='projects__section__container__content__about'>
					<h2 className='projects__section__container__content__about__header'>
						About the project:
					</h2>
					<p className='projects__section__container__content__about__text'>
						{e.about}
					</p>
					<h2 className='projects__section__container__content__about__header'>
						Timeline
					</h2>
					<p className='projects__section__container__content__about__text'>
						{e.timelineBeginning} - {e.timelineEnd}
					</p>
					<h2 className='projects__section__container__content__about__header'>
						Github Repository link:
					</h2>
					{e.githubLink === 'private' ? (
						<p className='projects__section__container__content__about__text'>
							{e.githubLink}
						</p>
					) : (
						<a
							className='projects__section__container__content__about__link'
							href={`${e.githubLink}`}>
							Github Link
						</a>
					)}

					{e.inBeta && e.githubLink === 'private' ? (
						<>
							<h2 className='projects__section__container__content__about__header'>
								In Beta:
							</h2>
							<p className='projects__section__container__content__about__text'>
								This Project is in closed Beta, once it is available you will be
								able to use the project.
							</p>
						</>
					) : e.inBeta && e.githubLink !== 'private' ? (
						<>
							<h2 className='projects__section__container__content__about__header'>
								In Beta:
							</h2>
							<p className='projects__section__container__content__about__text'>
								This Project is in open Beta, you can download the project here
								if it is packaged or you can check the Github link to use the
								project.
							</p>

							{e.downloadLink !== '' ? (
								<a
									className='projects__section__container__content__about__link'
									href={`${e.downloadLink}`}>
									Download Link
								</a>
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					)}

					<h2 className='projects__section__container__content__about__header'>
						Images:
					</h2>

					<div className='projects__section__container__content__about__img-container'>
						<img
							className='projects__section__container__content__about__img-container__image'
							src={`${e.images[0]}`}
							alt=''
						/>

						<img
							className='projects__section__container__content__about__img-container__image'
							src={`${e.images[1]}`}
							alt=''
						/>
						<img
							className='projects__section__container__content__about__img-container__image'
							src={`${e.images[2]}`}
							alt=''
						/>
					</div>
				</div>
			</div>
		);
	};

	const projectRenderer = () => {
		for (const index in projectData) {
			rows.push(objects(index));
		}
	};

	return (
		<div className='projects'>
			<section className='projects__section'>
				<div className='projects__section__container'>
					<div className='projects__section__container__content'>
						<h1 className='projects__section__container__content__header'>
							Projects
						</h1>
						<ul>
							<li>
								<a
									className='projects__section__container__content__links'
									href='#first'>
									All Status Saver &rarr;
								</a>
							</li>
							<li>
								<a
									className='projects__section__container__content__links'
									href='#second'>
									Linkedin Clone &rarr;
								</a>
							</li>
							<li>
								<a
									className='projects__section__container__content__links'
									href='#third'>
									Unit Converter &rarr;
								</a>
							</li>
							<li>
								<a
									className='projects__section__container__content__links'
									href='#fourth'>
									MCFlow &rarr;
								</a>
							</li>
							{/* <li>
								<a href='#fifth'>MCFlow</a>
							</li> */}
						</ul>
						{projectRenderer()}
						{rows}
					</div>
				</div>
			</section>
		</div>
	);
};
export default Projects;

