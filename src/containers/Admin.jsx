import { useState } from 'react';
const axios = require('axios').default;
const Admin = () => {
	const [formData, setFormData] = useState({
		title: '',
		content: '',
		published: '',
	});


	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	const { title, content, published } = formData;

	const baseUrl = 'http://localhost:3000';

	const onSubmit = (e) => {
		e.preventDefault();


		const body = {
			title: formData.title.toString(),
			content: formData.content.toString(),
			published: published.toString()
		};

		axios
			.post(`${baseUrl}/post`, body)
			.then(function (res) {
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			});
		console.log(`${title}, ${content}, ${published}`);
	};

	const sendPost = () => {};
	return (
		<>
			<div>
				<form onSubmit={(e) => onSubmit(e)}>
					<div>
						<input
							placeholder='Title'
							name='title'
							value={title}
							type='text'
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<div>
						<textarea
							placeholder='Content'
							name='content'
							value={content}
							type='text'
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<div>
						<input
							placeholder='true or false'
							name='published'
							value={published}
							type='text'
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div>
						<button>Signup</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Admin;
