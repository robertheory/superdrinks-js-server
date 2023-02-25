import { Replace } from 'src/helpers/replace';
import { v4 } from 'uuid';
import { User } from './user';

export interface DrinkProps {
	name: string;
	description: string;
	imageUrl: string;
	user: User;
	createdAt: Date;
	updatedAt?: Date | null;
	deletedAt?: Date | null;
}

const validate = ({
	name,
	user,
}: Replace<DrinkProps, { createdAt?: Date }>) => {
	if (!name) {
		throw new Error('Blank name');
	}

	if (!(user instanceof User)) {
		throw new Error('Invalid user');
	}
};

export class Drink {
	private _id: string;
	private props: DrinkProps;

	constructor(props: Replace<DrinkProps, { createdAt?: Date }>, id?: string) {
		this._id = id ?? v4();

		validate(props);

		this.props = {
			...props,
			createdAt: props.createdAt ?? new Date(),
		};
	}

	public get id(): string {
		return this._id;
	}

	public set name(name: string) {
		this.props.name = name;
	}

	public get name(): string {
		return this.props.name;
	}

	public set description(description: string) {
		this.props.description = description;
	}

	public get description(): string {
		return this.props.description;
	}

	public set imageUrl(imageUrl: string) {
		this.props.imageUrl = imageUrl;
	}

	public get imageUrl(): string {
		return this.props.imageUrl;
	}

	public get user(): User {
		return this.props.user;
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
