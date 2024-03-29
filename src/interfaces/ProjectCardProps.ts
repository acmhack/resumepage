import { IMember } from "./Member";
import { IUserCard } from "./UserCard";


export interface IProjectCard {
    name: string;
    members: IUserCard[]; // TODO: change members to just name + id
    // members: IMember[];
    projectlink: string;
    category: string;
    featured: boolean;
}