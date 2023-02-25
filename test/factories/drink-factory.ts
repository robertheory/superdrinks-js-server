import { Drink, DrinkProps } from '@app/entities/drink';
import { makeUser } from './user-factory';

type Override = Partial<DrinkProps>;

export function makeDrink(override: Override = {}) {
	return new Drink({
		name: 'Daikiri',
		description:
			'The daiquiri is a cocktail whose main ingredients are rum, citrus juice, and sugar or other sweetener.',
		user: makeUser(),
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Daiquiri_drink.jpg/230px-Daiquiri_drink.jpg',
		createdAt: new Date(),
		...override,
	});
}
