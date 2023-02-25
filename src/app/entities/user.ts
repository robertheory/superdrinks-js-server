import { Replace } from 'src/helpers/replace';
import { v4 } from 'uuid';

export interface UserProps {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	createdAt: Date;
	updatedAt?: Date | null;
	deletedAt?: Date | null;
}

const validate = ({
	firstName,
	lastName,
	username,
	email,
}: Replace<UserProps, { createdAt?: Date }>) => {
	if (!firstName) {
		throw new Error('Invalid firstName');
	}
	if (!lastName) {
		throw new Error('Invalid lastName');
	}
	if (!username) {
		throw new Error('Invalid username');
	}
	if (!email) {
		throw new Error('Invalid email');
	}
};

export class User {
	private _id: string;
	private props: UserProps;

	constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: string) {
		validate(props);

		this._id = id ?? v4();
		this.props = {
			...props,
			createdAt: props.createdAt ?? new Date(),
		};
	}

	public get id(): string {
		return this._id;
	}

	public set firstName(firstName: string) {
		this.props.firstName = firstName;
	}

	public get firstName(): string {
		return this.props.firstName;
	}

	public set lastName(lastName: string) {
		this.props.lastName = lastName;
	}

	public get lastName(): string {
		return this.props.lastName;
	}

	public set username(username: string) {
		this.props.username = username;
	}

	public get username(): string {
		return this.props.username;
	}

	public set email(email: string) {
		this.props.email = email;
	}

	public get email(): string {
		return this.props.email;
	}

	public get createdAt() {
		return this.props.createdAt;
	}

	public get updatedAt() {
		return this.props.updatedAt;
	}

	public get deletedAt() {
		return this.props.deletedAt;
	}
}
