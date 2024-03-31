interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: string;
	phoneNumber: string;
	country: string;
	school: string;
	levelOfStudy: string;
	graduationMonth: string;
	graduationYear: string;
	shirtSize: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
	dietRestrictions: string[];
	resume: string | null;
	// attendingPrehacks: boolean;
	codeOfConductAgreement: boolean;
	dataAgreement: boolean;
	mlhAgreement: boolean;

	category: string[] | null;
	featured: boolean;
	projectLink: string | null;
	projectName: string | null;
}

