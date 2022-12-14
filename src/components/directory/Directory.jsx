import CategoryItem from "../category-item/CategoryItem";

import "./Directory.styles.scss";

export const Directory = ({ categories }) => {
	return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};
