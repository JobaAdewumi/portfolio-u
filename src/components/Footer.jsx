import React from 'react';
import { FaGithub, FaLink, FaLinkedin, FaPen, FaSpotify, FaTwitter } from 'react-icons/fa';
// import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footer = () => {
	return (
		<footer className='footer'>
			<Link to='/' className='footer__logo'>
				<img
					className='footer__logo__img'
					src={require('../assets/images/logo.png')}
					alt=''
				/>
			</Link>
			<ul className='footer__list'>
				<li className='footer__list__item'>
					<a
						href='https://linkedin.com/in/joba-adewumi'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__linkedin'>
						<FaLinkedin className='footer__list__item__icon'>

						</FaLinkedin>
					</a>
				</li>
				<li className='footer__list__item'>
					<a
						href='https://twitter.com/jbtheinspirer'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__twitter'>
						<FaTwitter className='footer__list__item__icon'></FaTwitter>
					</a>
				</li>
				<li className='footer__list__item'>
					<a
						href='https://github.com/JobaAdewumi'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__github'>
						<FaGithub className='footer__list__item__icon'></FaGithub>
					</a>
				</li>

				<li className='footer__list__item'>
					<a
						href='https://linktr.ee/jobaadewumi'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__whatsapp'>
						<FaLink className='footer__list__item__icon'></FaLink>
					</a>
				</li>

				<li className='footer__list__item'>
					<a
						href='https://jobaadewumi.substack.com'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__whatsapp'>
						<FaPen className='footer__list__item__icon'></FaPen>
					</a>
				</li>

				<li className='footer__list__item'>
					<a
						href='https://podcasters.spotify.com/pod/show/joba-adewumi4'
						target='_blank'
						rel='noreferrer'
						className='footer__list__item__whatsapp'>
						<FaSpotify className='footer__list__item__icon'></FaSpotify>
					</a>
				</li>
			</ul>
			<p className='footer__ending'>© 2024 by Joba Adewumi</p>
		</footer>
	);
};

export default footer;
