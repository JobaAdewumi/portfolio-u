import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Alert from './Alert';

const Navbar = () => {
	// const menuIconContainer = document.querySelector(
	// 	'nav .navbar__list__container'
	// );
	// const navContainer = document.querySelector('navbar');

	const [isNavActive, setIsNavActive] = useState(false);

	const nav = () => {
		console.log('ugg');
		setIsNavActive(true);
	};

	const nave = () => {
		console.log('fewww');
		setIsNavActive(false);
	};

	// menuIconContainer.addEventListener('click', () => {
	// 	navContainer.classList.toggle('active');
	// });

	// const authLinks = (
	//   <a className='navbar__top__auth__link' onClick={logout} href='#!'>
	//     Logout
	//   </a>
	// );

	// const guestLinks = (
	//   <Fragment>
	//     <Link className='navbar__top__auth__link' to='/login'>
	//       Login
	//     </Link>
	//     <Link className='navbar__top__auth__link' to='/signup'>
	//       Sign up
	//     </Link>
	//   </Fragment>
	// );

	return (
		<Fragment>
			<nav className={`${isNavActive ? 'active' : 'navbar'}`}>
				<ul className={`${isNavActive ? 'active' : 'navbar'}__list`}>
					<li>
						<Link
							className={`${isNavActive ? 'active' : 'navbar'}__list__logo`}
							to='/'>
							JOBA ADEWUMI
						</Link>
					</li>
					<li>
						<div
							className={`${
								isNavActive ? 'active' : 'navbar'
							}__list__container`}
							onClick={isNavActive ? nave : nav}>
							<div
								className={`${
									isNavActive ? 'active' : 'navbar'
								}__list__container__icon`}>
								<span
									style={{ background: 'black' }}
									className={`${
										isNavActive ? 'active' : 'navbar'
									}__list__container__icon__line-1`}></span>
								<span
									className={`${
										isNavActive ? 'active' : 'navbar'
									}__list__container__icon__line-2`}></span>
							</div>
						</div>
					</li>
				</ul>

				<ul className={`${isNavActive ? 'active' : 'navbar'}__items`}>
					<li>
						<NavLink
							className={`${isNavActive ? 'active' : 'navbar'}__items__item`}
							to='/projects'>
							Projects
						</NavLink>
						<NavLink
							className={`${isNavActive ? 'active' : 'navbar'}__items__item`}
							to='/contact'>
							Contact me
						</NavLink>
						<NavLink
							className={`${isNavActive ? 'active' : 'navbar'}__items__item`}
							to='/codingrepublic'>
							Coding Republic
						</NavLink>
					</li>
				</ul>
			</nav>
			<Alert />
		</Fragment>
	);
};

export default Navbar;
