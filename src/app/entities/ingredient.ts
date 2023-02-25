import { Replace } from 'src/helpers/replace';
import { v4 } from 'uuid';

export interface IngredientProps {
	name: string;
	description: string;
	createdAt: Date;
}

const validate = ({ name }: Replace<IngredientProps, { createdAt?: Date }>) => {
	if (!name) {
		throw new Error('Blank name');
	}
};

export class Ingredient {
	private _id: string;
	private props: IngredientProps;

	constructor(
		props: Replace<IngredientProps, { createdAt?: Date }>,
		id?: string
	) {
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

	public get createdAt() {
		return this.props.createdAt;
	}
}
