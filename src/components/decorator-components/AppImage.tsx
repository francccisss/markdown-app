import image from "../../assets/img/Screenshot from 2023-06-19 21-51-35.png";

export const AppImage = () => {
	return (
		<div
			id="app-image-container"
			className="absolute -bottom-52 z-10 min-[1535px]:-right-[20%] max-2xl:w-0 -right-[19em] w-full drop-shadow-2xl max-[] "
		>
			<img
				id="app-image"
				className="w-full h-full object-left object-fill  "
				src={image}
			/>
		</div>
	);
};
