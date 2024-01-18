import {
    faComputer,
    faDatabase,
    faDesktop,
    faFileVideo,
    faMobile,
    faMobileRetro,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Skills = () => {
    return (
        <>
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

        </>
    )
}

export default Skills