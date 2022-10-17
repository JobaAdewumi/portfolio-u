import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
	return (
		<footer className='footer'>
			<Link to='/' className='footer__logo'>
				JOBA ADEWUMI
			</Link>
			<ul className='footer__list'>
				<li className='footer__list__item'>
					<a
						href='https://linkedin.com/in/joba-adewumi'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__linkedin'>
						Linkedin
					</a>
				</li>
				<li className='footer__list__item'>
					<a
						href='https://twitter.com/_Jobaa'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__twitter'>
						Twitter
					</a>
				</li>
				<li className='footer__list__item'>
					<a
						href='https://github.com/JobaAdewumi'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__github'>
						Github
					</a>
				</li>

				<li className='footer__list__item'>
					<a
						href='https://linktr.ee/jobaadewumi'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__whatsapp'>
						Linktree
					</a>
				</li>
			</ul>
			<p className='footer__ending'>© 2022 by Joba Adewumi</p>
		</footer>
	);
};

export default footer;
