import { makeDrink } from '@test/factories/drink-factory';
import { Ingredient } from './ingredient';
import { User } from './user';

describe('Drink', () => {
	it('should be able to create a new drink', () => {
		const fakeDrink = makeDrink({
			name: 'Cuba Libre',
		});

		expect(fakeDrink.name).toEqual('Cuba Libre');
		expect(fakeDrink.id).toBeTruthy();
	});

	it('should not be able to create a drink without a valid user', () => {
		expect(() => {
			makeDrink({
				user: {} as User,
			});
		}).toThrow();
	});

	it('should not be able to add a invalid ingredient on a drink', () => {
		expect(() => {
			makeDrink({
				ingredients: [{} as Ingredient],
			});
		}).toThrow();
	});

	it('should not be able to create a drink with blank name', () => {
		expect(() => {
			makeDrink({
				name: '',
			});
		}).toThrow();
	});
});
