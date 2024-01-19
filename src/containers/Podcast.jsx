import React from 'react';
import {
	FaAmazon,
	FaApple,
	FaGoogle,
	FaLink,
	FaMusic,
	FaRssSquare,
	FaSpotify,
} from 'react-icons/fa';
import SEOComponent from '../components/SEO';

const podcast = () => {
	const pageTitle = "Joba Adewumi's Portfolio - Podcast";
	const pageDescription =
		'Here is my podcast called Life, check out all the platforms it is hosted on';
	const pageKeywords =
		'Joba Adewumi, Joba, jbtheinspirer, life, apple podcasts, spotify, audiomack, amazon music, google podcasts, podcast';
	const pageImageUrl = 'https://jobaadewumi.vercel.app/assets/images/life2.jpg'; // URL to an image for social media sharing
	const pageUrl = 'https://jobaadewumi.vercel.app/podcast';

	return (
		<div className='podcast'>
			<SEOComponent
				title={pageTitle}
				description={pageDescription}
				keywords={pageKeywords}
				imageUrl={pageImageUrl}
				url={pageUrl}
			/>
			<section className='podcast__section'>
				<div className='home__section__image'>
					<img
						className='home__section__image__item'
						src={require('../assets/images/life-2.png')}
						alt=''
					/>
				</div>
				<div className='podcast__section__container'>
					<div className='podcast__section__container__content'>
						<h1 className='podcast__section__container__content__header'>
							life podcast
						</h1>

						<div className='podcast__section__container__content__iframe'>
							<iframe
								style={{ marginTop: '20px', borderRadius: '12px' }}
								src='https://open.spotify.com/embed/show/4fIBS5rikdEvGh6tSJ93zW?utm_source=generator&t=0'
								width='100%'
								height='300'
								frameBorder='0'
								allowFullScreen='no'
								allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>
						</div>

						<h2 className='podcast__section__container__content__name'>
							Listen to the Podcast on these platforms.
						</h2>
						<span className='podcast__section__container__content__span'>
							<FaSpotify className='podcast__section__container__content__span__icon'></FaSpotify>
							<a
								href='https://open.spotify.com/show/4fIBS5rikdEvGh6tSJ93zW'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								Spotify &rarr;
							</a>
						</span>
						<span className='podcast__section__container__content__span'>
							<FaApple className='podcast__section__container__content__span__icon'></FaApple>
							<a
								href='https://podcasts.apple.com/us/podcast/life/id1622904213'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								Apple Podcast &rarr;
							</a>
						</span>
						<span className='podcast__section__container__content__span'>
							<FaGoogle className='podcast__section__container__content__span__icon'></FaGoogle>
							<a
								href='https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NTFiN2U1OC9wb2RjYXN0L3Jzcw'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								Google Podcast &rarr;
							</a>
						</span>
						<span className='podcast__section__container__content__span'>
							<FaMusic className='podcast__section__container__content__span__icon'></FaMusic>
							<a
								href='https://audiomack.com/jobaadewumi'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								Audiomack &rarr;
							</a>
						</span>
						<span className='podcast__section__container__content__span'>
							<FaAmazon className='podcast__section__container__content__span__icon'></FaAmazon>
							<a
								href='https://music.amazon.com/podcasts/ec1d8440-b396-4975-bb2f-d1b031b62578/life'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								Amazon Music &rarr;
							</a>
						</span>
						<span className='podcast__section__container__content__span'>
							<FaMusic className='podcast__section__container__content__span__icon'></FaMusic>
							<a
								href='https://anchor.fm/joba-adewumi4'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								Anchor &rarr;
							</a>
						</span>
						<span className='podcast__section__container__content__span'>
							<FaRssSquare className='podcast__section__container__content__span__icon'></FaRssSquare>
							<a
								href='https://anchor.fm/s/951b7e58/podcast/rss'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								RSS &rarr;
							</a>
						</span>
						<span className='podcast__section__container__content__span'>
							<FaLink className='podcast__section__container__content__span__icon'></FaLink>
							<a
								href='https://linktr.ee/jobaadewumi'
								className='contact__section__container__content__item'
								target='_blank'
								rel='noreferrer'>
								You can check for more on linktree &rarr;
							</a>
						</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default podcast;
