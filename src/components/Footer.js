import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
	return (
		<footer className='footer'>
            <Link to='/' className='footer__logo'>JOBA ADEWUMI</Link>
			<ul className='footer__list'>
				<li className='footer__list__item'>
					<a href='https://www.linkedin.com/in/joba-adewumi' className='footer__list__item__linkedin'>
						Linkedin
					</a>
				</li>
				<li className='footer__list__item'>
					<a href='https://twitter.com/_Jobaa' className='footer__list__item__twitter'>
						Twitter
					</a>
				</li>
				<li className='footer__list__item'>
					<a href='https://www.github.com/JobaAdewumi' className='footer__list__item__github'>
						Github
					</a>
				</li>
				{/* TODO: Remmember to put the whatsapp link */}
				<li className='footer__list__item'>
					<a href='#' className='footer__list__item__whatsapp'>
						WhatsApp
					</a>
				</li>
            </ul>
            <p className='footer__ending'>© 2022 by Joba Adewumi</p>
		</footer>
	);
};

export default footer;
