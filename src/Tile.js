import React from 'react';

function Tile({ image, title, children }) {
	return (
		<section>
			<h2>{title}</h2>
			{children}
			{image && <img src={image} alt={title} />}
		</section>
	);
}

export default Tile;
