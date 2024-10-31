'use client';
import Image from 'next/image';
import Styles from './globals.css';
import { useState } from 'react';

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [imageData, setImageData] = useState(null);

	/**TODO:
	 * Button that fetches
	 * Container for button
	 * Container for displaying content (empty, loading, fulfilled states)
	 * Fetch content (handle and format content)
	 * Store content somewhere
	 * Loading State
	 * Error handling
	 * Styling
	 * Breakpoints (mobile-first methodology)
	 * Function to clear data
	 *
	 * */

	async function fetchImages() {
		const API_URL = 'https://picsum.photos/v2/list?limit=5';
		setLoading(true);
		const response = await fetch(API_URL);
		const data = await response.json();
		// const debuggerVar = "test var";
		// debugger;
		// const moreDebuggerVar = "another test var";
		// const response = fetch("https://picsum.photos/v2/list?limit=5")
		// console.log('Button Clicked');
		// alert('Button Clicked');
		setImageData(data);
		setLoading(false);
	}

	const Header = () => {
		return (
			<>
				<section>
					<h1>Midterm App</h1>
					<button
						className='border-2 norder-black p-2'
						onClick={fetchImages}
					>
						Fetch
					</button>
				</section>
			</>
		);
	};

	const ImageListXontainer = () => {
		if (loading) {
			return <section>Loading...</section>;
		}

		if (imageData) {
			const imageListItems = [];

			imageData.forEach((image, i) => {
				// "id": "0",
				// "author": "Alejandro Escamilla",
				// "width": 5000,
				// "height": 3333,
				// "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
				// "download_url": "https://picsum.photos/id/0/5000/3333"
				imageListItems.push(
					<article
						className='mb-2'
						key={image.id}
					>
						<img src={image.download_url} />
						<p>Author: {image.author}</p>
						<a href={image.download_url}>
							Download this image!
              THIS API HAS BAD DOCUMENTATION!
						</a>
						<hr />
					</article>
				);
				// debugger;
			});
			return (
				<section>
					{imageListItems}
				</section>
			);
		}
		return <section>No images fetched!</section>;
	};

	return (
		<div className='m-2'>
			<Header />
			<ImageListXontainer />
		</div>
	);
}
