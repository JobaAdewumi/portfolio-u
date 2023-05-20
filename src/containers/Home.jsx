import {
	faComputer,
	faDatabase,
	faDesktop,
	faFileVideo,
	faMobile,
	faMobileRetro,
	faCode,
	faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
	FaCss3,
	FaHtml5,
	FaGithub,
	FaPython,
	FaAngular,
	FaReact,
	FaNodeJs,
	FaAndroid,
	FaCode,
} from 'react-icons/fa';

const home = () => {
	return (
		<div className='home'>
			<section className='home__section'>
				<div className='home__section__image'>
					<img
						className='home__section__image__item'
						src={require('../assets/images/Joba.jpg')}
						alt=''
					/>
				</div>
				<div className='home__section__text'>
					<section className='home__section__text__container'>
						<section className='home__section__text__container__content'>
							<p className='home__section__text__container__content__summary'>
								Joba Adewumi has spent his time learning Software Development
								which includes Web Design and Development and Mobile Application
								Design and Development, how to make the world a better place
								with his innovations both in Computer and Information technology
								and his Software skills. He is also studying philosophy and
								Stoicism. He is the founder of The Wicked Developers
								Organization. He is also has interest in photography, snapping
								images from landscapes to portraits. He is also a Graphics
								designer and Video editor.
							</p>

							<iframe
								style={{ marginTop: '20px', borderRadius: '12px' }}
								src='https://open.spotify.com/embed/show/4fIBS5rikdEvGh6tSJ93zW?utm_source=generator&t=0'
								width='100%'
								height='232'
								frameBorder='0'
								allowFullScreen='no'
								allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>
							<h1 className='home__section__text__container__content__header'>
								skills
							</h1>
							<div className='home__section__text__container__content__skill-list'>
								<div className='home__section__text__container__content__skill-list__item'>
									<FontAwesomeIcon
										icon={faComputer}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__skill-list__item__text'>
										Frontend Design and Development
									</p>
								</div>
								<div className='home__section__text__container__content__skill-list__item'>
									<FontAwesomeIcon
										icon={faDesktop}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__skill-list__item__text'>
										Backend Architecture Design and Development
									</p>
								</div>
								<div className='home__section__text__container__content__skill-list__item'>
									<FontAwesomeIcon
										icon={faDatabase}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__skill-list__item__text'>
										Database Management
									</p>
								</div>
								<div className='home__section__text__container__content__skill-list__item'>
									<FontAwesomeIcon
										icon={faMobile}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__skill-list__item__text'>
										Mobile App Design and Development(Cross platform)
									</p>
								</div>
								<div className='home__section__text__container__content__skill-list__item'>
									<FontAwesomeIcon
										icon={faMobileRetro}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__skill-list__item__text'>
										Mobile App Design and Development(Native Android)
									</p>
								</div>
								<div className='home__section__text__container__content__skill-list__item'>
									<FontAwesomeIcon
										icon={faFileVideo}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__skill-list__item__text'>
										Video Editing and post-production Design and Development
									</p>
								</div>
							</div>

							<h1 className='home__section__text__container__content__header'>
								programming languages
							</h1>
							<div className='home__section__text__container__content__language-list'>
								<div className='home__section__text__container__content__language-list__item'>
									<FaHtml5 className='home__section__text__container__content__icon'></FaHtml5>
									<p className='home__section__text__container__content__language-list__item__text'>
										HTML
									</p>
								</div>
								<div className='home__section__text__container__content__language-list__item'>
									<FaCss3 className='home__section__text__container__content__icon'></FaCss3>
									<p className='home__section__text__container__content__language-list__item__text'>
										CSS
									</p>
								</div>
								<div className='home__section__text__container__content__language-list__item'>
									<FontAwesomeIcon
										icon={faLaptopCode}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__language-list__item__text'>
										Javascript
									</p>
								</div>
								<div className='home__section__text__container__content__language-list__item'>
									<FontAwesomeIcon
										icon={faCode}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__language-list__item__text'>
										Typescript
									</p>
								</div>
								<div className='home__section__text__container__content__language-list__item'>
									<FaPython className='home__section__text__container__content__icon'></FaPython>
									<p className='home__section__text__container__content__language-list__item__text'>
										Python
									</p>
								</div>
								<div className='home__section__text__container__content__language-list__item'>
									<FontAwesomeIcon
										icon={faComputer}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__language-list__item__text'>
										Dart
									</p>
								</div>
								<div className='home__section__text__container__content__language-list__item'>
									<FontAwesomeIcon
										icon={faCode}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__language-list__item__text'>
										Kotlin
									</p>
								</div>
								<div className='home__section__text__container__content__language-list__item'>
									<FontAwesomeIcon
										icon={faDatabase}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__language-list__item__text'>
										SQL
									</p>
								</div>
							</div>

							<h1 className='home__section__text__container__content__header'>
								technologies
							</h1>
							<div className='home__section__text__container__content__tech-list'>
								<div className='home__section__text__container__content__tech-list__item'>
									<FaGithub className='home__section__text__container__content__icon'></FaGithub>
									<p className='home__section__text__container__content__tech-list__item__text'>
										Git and Github
									</p>
								</div>
								<div className='home__section__text__container__content__tech-list__item'>
									<FaAngular className='home__section__text__container__content__icon'></FaAngular>
									<p className='home__section__text__container__content__tech-list__item__text'>
										Angular
									</p>
								</div>
								<div className='home__section__text__container__content__tech-list__item'>
									<FaReact className='home__section__text__container__content__icon'></FaReact>
									<p className='home__section__text__container__content__tech-list__item__text'>
										React
									</p>
								</div>
								<div className='home__section__text__container__content__tech-list__item'>
									<FaNodeJs className='home__section__text__container__content__icon'></FaNodeJs>
									<p className='home__section__text__container__content__tech-list__item__text'>
										Nestjs
									</p>
								</div>
								<div className='home__section__text__container__content__tech-list__item'>
									<FontAwesomeIcon
										icon={faDesktop}
										className='home__section__text__container__content__icon'></FontAwesomeIcon>
									<p className='home__section__text__container__content__tech-list__item__text'>
										Django
									</p>
								</div>
								<div className='home__section__text__container__content__tech-list__item'>
									<FaCode className='home__section__text__container__content__icon'></FaCode>
									<p className='home__section__text__container__content__tech-list__item__text'>
										Flutter
									</p>
								</div>
								<div className='home__section__text__container__content__tech-list__item'>
									<FaAndroid className='home__section__text__container__content__icon'></FaAndroid>
									<p className='home__section__text__container__content__tech-list__item__text'>
										Native Android
									</p>
								</div>
								<div className='home__section__text__container__content__tech-list__item'>
									<FaNodeJs className='home__section__text__container__content__icon'></FaNodeJs>
									<p className='home__section__text__container__content__tech-list__item__text'>
										Nextjs
									</p>
								</div>
							</div>
						</section>
					</section>
				</div>
			</section>
		</div>
	);
};

export default home;
