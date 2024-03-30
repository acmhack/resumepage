import { IMember } from './Member';
import { IUserCard } from './UserCard';

export interface IProjectCard {
	projectName: string;
	members: IUserCard[];
	projectLink: string;
	category: string[];
	featured: boolean;
}
