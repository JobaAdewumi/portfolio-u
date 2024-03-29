import React from 'react';
import SEOComponent from '../components/SEO';
import Languages from '../components/languages';
import Skills from '../components/skills';
import Technologies from '../components/technologies';

const home = () => {
	const pageTitle = "Joba Adewumi's Portfolio - Home";
	const pageDescription =
		'A short biography of Joba Adewumi, his list of skills, programming languages and technologies used';
	const pageKeywords =
		"Joba Adewumi, Joba, jbtheinspirer, Software dev, photographer, podcaster, podcast, web developer, mobile developer, writer, Joba's Thoughts, Life";
	const pageImageUrl = 'https://jobaadewumi.vercel.app/assets/images/joba2.jpg'; // URL to an image for social media sharing
	const pageUrl = 'https://jobaadewumi.vercel.app/';
	return (
		<div className='home'>
			<SEOComponent
				title={pageTitle}
				description={pageDescription}
				keywords={pageKeywords}
				imageUrl={pageImageUrl}
				url={pageUrl}
			/>
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
							<iframe
								src='https://jobaadewumi.substack.com/embed'
								width='100%'
								height='232'
								style={{
									marginTop: '20px',
									borderRadius: '12px',
									border: '1px solid #8fb99b',
								}}
								allowFullScreen='no'
								allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>
						</section>
					</section>
				</div>
			</section>
		</div>
	);
};

export default home;
