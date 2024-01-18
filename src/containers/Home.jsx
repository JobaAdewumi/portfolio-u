import React from 'react';
import Languages from '../components/languages';
import Skills from '../components/skills';
import Technologies from '../components/technologies';

const home = () => {
	return (
		<div className='home'>
			<section className='home__section'>
				<div className='home__section__image'>
					<img
						className='home__section__image__item'
						src={require('../assets/images/joba2.jpg')}
						alt=''
					/>
				</div>
				<div className='home__section__text'>
					<section className='home__section__text__container'>
						<section className='home__section__text__container__content'>
							<p className='home__section__text__container__content__summary'>
								Joba Adewumi has spent his time learning Software Development
								which includes Web and Mobile Design and Development, how to
								make the world a better place with his innovations both in
								Software skills and his podcast and writing. He is also studying
								philosophy and Stoicism. He is also a in photographer, snapping
								images from landscapes to portraits, video editor, chopping up
								his inspirational videos, podcaster, recording his thoughts for
								the world to perceive a different view and his writing, where he
								carries us to a different dimension of self-reflection with
								words.
							</p>

							<iframe
								style={{ marginTop: '20px', borderRadius: '12px' }}
								src='https://open.spotify.com/embed/show/4fIBS5rikdEvGh6tSJ93zW?utm_source=generator&t=0'
								width='100%'
								height='232'
								frameBorder='0'
								allowFullScreen='no'
								allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>

							<Skills />

							<Languages />

							<Technologies />
						</section>
					</section>
				</div>
			</section>
		</div>
	);
};

export default home;
