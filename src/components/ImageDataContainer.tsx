import {ImageData} from "../def/ImageData.ts";

const ImageDataContainer = (image:ImageData) => {
	return (
		<div className='cat-container'>
			<img src={image.imageUrl} alt=''/>
			<div className='description'>
				<span>Created: {image.createdAt}</span>
				<span>Author: {image.author}</span>
				<span>Author Link: {image.authorLink}</span>
			</div>
		</div>
	);
};

export default ImageDataContainer;
