import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	// const menuIconContainer = document.querySelector(
	// 	'nav .navbar__list__container'
	// );
	// const navContainer = document.querySelector('navbar');

	const [isNavActive, setIsNavActive] = useState(false);

	const nav = () => {
		setIsNavActive(true);
	};

	const nave = () => {
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
			<nav className={`${isNavActive ? 'nav-active' : 'navbar'}`}>
				<ul className={`${isNavActive ? 'nav-active' : 'navbar'}__list`}>
					<li>
						<Link
							className={`${isNavActive ? 'nav-active' : 'navbar'}__list__logo`}
							to='/'>
							JOBA ADEWUMI
						</Link>
					</li>
					<li>
						<div
							className={`${
								isNavActive ? 'nav-active' : 'navbar'
							}__list__container`}
							onClick={isNavActive ? nave : nav}>
							<div
								className={`${
									isNavActive ? 'nav-active' : 'navbar'
								}__list__container__icon`}>
								<span
									className={`${
										isNavActive ? 'nav-active' : 'navbar'
									}__list__container__icon__line-1`}></span>
								<span
									className={`${
										isNavActive ? 'nav-active' : 'navbar'
									}__list__container__icon__line-2`}></span>
							</div>
						</div>
					</li>
				</ul>

				<ul className={`${isNavActive ? 'nav-active' : 'navbar'}__items`} onClick={isNavActive ? nave : nav}>
					<li>
						<NavLink
							className={`${isNavActive ? 'nav-active' : 'navbar'}__items__item`}
							to='/projects'>
							Projects
						</NavLink>
						<NavLink
							className={`${isNavActive ? 'nav-active' : 'navbar'}__items__item`}
							to='/contact'>
							Contact me
						</NavLink>
						<NavLink
							className={`${isNavActive ? 'nav-active' : 'navbar'}__items__item`}
							to='/podcast'>
							Podcast
						</NavLink>
						{/* <NavLink
							className={`${isNavActive ? 'nav-active' : 'navbar'}__items__item`}
							to='/codingrepublic'>
							Coding Republic
						</NavLink> */}
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default Navbar;
