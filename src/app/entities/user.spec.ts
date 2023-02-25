import { makeUser } from '@test/factories/user-factory';

describe('User', () => {
	it('should be able to create a new user', () => {
		const user = makeUser();
		console.log('user', user);

		expect(user).toBeTruthy();
	});
});
