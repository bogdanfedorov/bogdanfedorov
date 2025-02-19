export interface CV_JSON {
  "@context": string;
  "@type": string;
  name: string;
  familyName: string;
  gender: string;
  birthDate: string;
  email: string;
  contact_information: ContactInformation;
  jobTitle: string[];
  hasOccupation: HasOccupation[];
  alumniOf: AlumniOf[];
  knowsLanguage: KnowsLanguage[];
  knowsAbout: KnowsAbout[];
  seeks: string[];
  professionalSummary: [
    string,
    ProfessionalSummary,
    ProfessionalSummary2,
    ProfessionalSummary3,
  ];
}

export interface ContactInformation {
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface HasOccupation {
  "@type": string;
  name: string;
  startDate: string;
  endDate: string;
  location: Location;
  description: any;
  skills: string[];
  jobTitle?: string;
  projectHighlights?: string[];
  systemFeatures?: string[];
}

export interface Location {
  "@type": string;
  name: string;
}

export interface AlumniOf {
  "@type": string;
  name: string;
  address: Address;
}

export interface Address {
  addressCountry: string;
  addressLocality: string;
  streetAddress: string;
  email: string;
}

export interface KnowsLanguage {
  "@type": string;
  name: string;
  proficiencyLevel: string;
}

export interface KnowsAbout {
  "@type": string;
  name: string;
  description: string[];
}

export interface ProfessionalSummary {
  title: string;
  list: string[];
}

export interface ProfessionalSummary2 {
  title: string;
  list: string[];
}

export interface ProfessionalSummary3 {
  title: string;
  list: string[];
}
