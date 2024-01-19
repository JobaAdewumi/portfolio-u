import {
    faCode,
    faComputer,
    faDatabase,
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaCss3, FaHtml5, FaPython } from 'react-icons/fa';

const Languages = () => {
	return (
		<>
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
		</>
	);
};

export default Languages;
