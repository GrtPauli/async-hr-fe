import type { User } from "./auth";

// src/types/profile.ts
export interface Profile {
  user: User;
  basicDetails: BasicDetails;
  contactDetails: ContactDetails;
  jobDetails: JobDetails;
  bankDetails: BankDetails;
  documents: Documents;
  completionPercentage: number;
  profileCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type ProfileSection =
  | "basicDetails"
  | "contactDetails"
  | "jobDetails"
  | "bankDetails"
  | "documents";

export interface ProfileStatus {
  completionPercentage: number;
  completedSections: {
    basicDetails: boolean;
    contactDetails: boolean;
    jobDetails: boolean;
    bankDetails: boolean;
    documents: boolean;
  };
  nextRecommendedSection: ProfileSection | "complete";
}

export interface BasicDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  bio?: string;
}

export interface ContactDetails {
  address: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  emergencyContact: {
    name?: string;
    relationship?: string;
    phone?: string;
  };
}

export interface JobDetails {
  jobTitle: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Intern';
  startDate: string;
  workMode: 'Onsite' | 'Remote' | 'Hybrid';
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  branchCode?: string;
  taxId?: string;
}

export interface DocumentUpload {
  idProofType?: "Passport" | "Driver License" | "National ID";
  idProofNumber?: string;
  files?: FileList;
}

export interface Documents {
  idProof?: {
    type: "Passport" | "Driver License" | "National ID";
    number: string;
    fileUrl: string;
  };
  resume?: string;
  certificates?: Array<{
    name: string;
    fileUrl: string;
  }>;
}
