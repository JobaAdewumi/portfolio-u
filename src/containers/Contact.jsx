import React from 'react';

const contact = () => (
	<div className='contact'>
		<section className='contact__section'>
			<div className='contact__section__container'>
				<div className='contact__section__container__content'>
					<h1 className='contact__section__container__content__header'>
						Contact Me
					</h1>

					<h2 className='contact__section__container__content__name'>
						Twitter
					</h2>
					<a
						href='https://twitter.com/_Jobaa'
						className='contact__section__container__content__item'
						target='_blank'
						rel='noreferrer'>
						Twitter &rarr;
					</a>

					<h2 className='contact__section__container__content__name'>
						Linkedin
					</h2>
					<a
						href='https://www.linkedin.com/in/joba-adewumi'
						className='contact__section__container__content__item'
						target='_blank'
						rel='noreferrer'>
						Linkedin Profile &rarr;
					</a>

					<h2 className='contact__section__container__content__name'>Github</h2>
					<a
						href='https://www.github.com/JobaAdewumi'
						className='contact__section__container__content__item'
						target='_blank' rel="noreferrer">
						Github &rarr;
					</a>

					{/* <h2 className='contact__section__container__content__name'></h2>
					<a
						href='/'
						className='contact__section__container__content__item'
						target='_blank'></a>

					<h2 className='contact__section__container__content__name'></h2>
					<a
						href='/'
						className='contact__section__container__content__item'
						target='_blank'></a> */}
				</div>
			</div>
		</section>
	</div>
);

export default contact;
