
export interface Scheme {
  id: string;
  name: string;
  description: string;
  eligibility: {
    gender: string[];
    caste: string[];
    minAge: number;
    maxAge: number;
    state: string;
  };
  benefits: string;
  howToApply: string;
}

export interface FilterCriteria {
  gender: string;
  caste: string;
  state: string;
  age: number;
}
