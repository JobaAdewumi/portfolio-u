import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isNavActive, setIsNavActive] = useState(false);

	const nav = () => {
		setIsNavActive(true);
	};

	const nave = () => {
		setIsNavActive(false);
	};

	return (
		<Fragment>
			<nav className={`${isNavActive ? 'nav-active' : 'navbar'}`}>
				<ul className={`${isNavActive ? 'nav-active' : 'navbar'}__list`}>
					<li>
						<Link
							className={`${isNavActive ? 'nav-active' : 'navbar'}__list__logo`}
							to='/'>
							joba adewumi
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

				<ul
					className={`${isNavActive ? 'nav-active' : 'navbar'}__items`}
					onClick={isNavActive ? nave : nav}>
					<li>
						<NavLink
							className={`${
								isNavActive ? 'nav-active' : 'navbar'
							}__items__item`}
							to='/projects'>
							Projects
						</NavLink>
						<NavLink
							className={`${
								isNavActive ? 'nav-active' : 'navbar'
							}__items__item`}
							to='/contact'>
							Contact me
						</NavLink>
						<NavLink
							className={`${
								isNavActive ? 'nav-active' : 'navbar'
							}__items__item`}
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
