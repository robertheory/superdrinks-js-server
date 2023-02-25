import { makeUser } from '@test/factories/user-factory';

describe('User', () => {
	it('should be able to create a new user', () => {
		const user = makeUser({
			firstName: 'Fergunson',
		});

		expect(user.id).toBeTruthy();
		expect(user.firstName).toEqual('Fergunson');
	});

	it('should not be able to create a user with blank data', () => {
		expect(() => {
			makeUser({
				firstName: '',
				lastName: '',
				username: '',
				email: '',
			});
		}).toThrow();
	});
});
