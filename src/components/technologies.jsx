import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    FaAndroid,
    FaAngular,
    FaCode,
    FaGithub,
    FaNodeJs,
    FaReact,
} from 'react-icons/fa';

const Technologies = () => {
	return (
		<>
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
		</>
	);
};

export default Technologies;
