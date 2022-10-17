import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Contact = () => {
	const [formData, setFormData] = useState({
		fullname: '',
		email: '',
		subject: '',
		message: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send('service_jzt6dwg', 'template_76xnlmu', formData, '68HFOFi8sY-14Yulb')
			.then((response) => {
				console.log(response);
				window.alert('Success!');
			})
			.catch((err) => {
				console.log(err);
				window.alert('FAILED');
			});
	};

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
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

						<TwitterTimelineEmbed
							theme='dark'
							tweetLimit={5}
							sourceType='widget'
							screenName='_Jobaa'
							options={{ height: 400 }}
						/>
						<h2 className='contact__section__container__content__name'>
							Linkedin
						</h2>
						<a
							href='https://linkedin.com/in/joba-adewumi'
							className='contact__section__container__content__item'
							target='_blank'
							rel='noreferrer'>
							Linkedin Profile &rarr;
						</a>

						<h2 className='contact__section__container__content__name'>
							Github
						</h2>
						<a
							href='https://github.com/JobaAdewumi'
							className='contact__section__container__content__item'
							target='_blank'
							rel='noreferrer'>
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

						<h2 className='contact__section__container__content__form-header'>
							Contact me form
						</h2>

						<p className='contact__section__container__content__form-sub'>
							If you want to contact me directly you can fill this form to send
							me a direct message.
						</p>

						<div className='contact__section__container__content__form-container'>
							<form
								className='contact__section__container__content__form-container__form'
								onSubmit={onSubmit}>
								<p className='contact__section__container__content__form-container__form__label'>
									FullName
								</p>
								<input
									className='contact__section__container__content__form-container__form__input'
									type='text'
									name='fullname'
									placeholder='Full Name'
									value={formData.fullname}
									onChange={handleChange}
								/>
								<p className='contact__section__container__content__form-container__form__label'>
									Email
								</p>
								<input
									className='contact__section__container__content__form-container__form__input'
									type='email'
									name='email'
									placeholder='joba@example.com'
									value={formData.email}
									onChange={handleChange}
								/>
								<p className='contact__section__container__content__form-container__form__label'>
									Subject
								</p>
								<input
									className='contact__section__container__content__form-container__form__input'
									type='text'
									name='subject'
									placeholder='Are you interested in a project?'
									value={formData.subject}
									onChange={handleChange}
								/>
								<p className='contact__section__container__content__form-container__form__label'>
									Message
								</p>
								<textarea
									className='contact__section__container__content__form-container__form__textarea'
									rows='10'
									type='text'
									value={formData.message}
									onChange={handleChange}
									name='message'
									placeholder='I want to confess my love anonymously 😍'></textarea>
								<button
									className='contact__section__container__content__form-container__form__submit'
									type='submit'>
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
