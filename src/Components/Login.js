
import React, { useState } from 'react';
import logo_1 from '../img/logo_1.png';
import './Login.css';

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	  };

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("email: " + formData.email + " password: " + formData.password);
	};

	return (
		<main class="flex align-items-center justify-content-center">
			<section id="mobile" class="flex">
			</section>
			<section id="auth" class="flex direction-column">
				<div class="panel login flex direction-column">
					<h1 title="Closet" class="flex justify-content-center">
						<img src={logo_1} alt="Closet logo" title="Closet logo" />
					</h1>
					<form>
						<input name="email" placeholder="Phone number, username, or email" value={formData.email} onChange={handleChange}/>
						<input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
						<button type="button" onClick={handleSubmit}>log in</button>
					</form>
				</div>
				<div class="panel register flex justify-content-center">
					<p>Don't have an account?</p>
					<a href="/signup">Sign up</a>
				</div>
			</section>
		</main>
	);
}