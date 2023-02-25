import { Ingredient, IngredientProps } from '@app/entities/ingredient';

type Override = Partial<IngredientProps>;

export function makeIngredient(override: Override = {}) {
	return new Ingredient({
		name: 'Hibiscus',
		description:
			'Hibiscus is a genus of flowering plants in the mallow family, Malvaceae.',
		createdAt: new Date(),
		...override,
	});
}
