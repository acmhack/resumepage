export interface IUserCard {
    firstName: string;
	lastName: string;
	graduationMonth: string;
	graduationYear: string;
    school: string;
	resume: string | null;
	category: string[] | null;
	featured: boolean;
	projectLink: string | null;
	projectName: string | null;
}