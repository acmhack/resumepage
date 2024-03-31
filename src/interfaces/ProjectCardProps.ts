import { IMember } from './Member';
import { IUserCard } from './IUserCard';

export interface IProjectCard {
	projectName: string;
	members: IUserCard[];
	projectLink: string;
	category: string[];
	featured: boolean;
}
