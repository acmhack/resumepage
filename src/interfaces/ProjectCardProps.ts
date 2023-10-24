import { IMember } from "./Member";

export interface IProjectCard {
    name: string;
    members: IMember[];
    projectlink: string;
    category: string;
    featured: boolean;
}