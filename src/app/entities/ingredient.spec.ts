import { makeIngredient } from '@test/factories/ingredient-factory';

describe('Ingredient', () => {
	it('should be able to create a new ingredient', () => {
		const fakeIngredient = makeIngredient({
			name: 'Pepper',
		});

		expect(fakeIngredient.name).toEqual('Pepper');
		expect(fakeIngredient.id).toBeTruthy();
	});

	it('should not be able to create a ingredient with blank name', () => {
		expect(() => {
			makeIngredient({
				name: '',
			});
		}).toThrow();
	});
});
