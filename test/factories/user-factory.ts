import { User, UserProps } from '@app/entities/user';

type Override = Partial<UserProps>;

export function makeUser(override: Override = {}) {
	return new User({
		firstName: 'John',
		lastName: 'Doe',
		username: 'jdoe',
		email: 'john.doe@mail.com',
		createdAt: new Date(),
		updatedAt: null,
		deletedAt: null,
		...override,
	});
}
