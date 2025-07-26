// src/context/ProfileContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  type Profile,
  type ProfileSection,
  type ProfileStatus,
  type BasicDetails,
  type ContactDetails,
  type JobDetails,
  type BankDetails,
  type DocumentUpload,
} from "../types/profile";
import api from "../api";
import { useAuthContext } from "./auth";

interface ProfileContextType {
  profile: Profile | null;
  status: ProfileStatus | null;
  loading: boolean;
  error: string | null;
  getProfile: () => Promise<void>;
  getProfileStatus: () => Promise<void>;
  updateBasicDetails: (data: BasicDetails) => Promise<void>;
  updateContactDetails: (data: ContactDetails) => Promise<void>;
  updateJobDetails: (data: JobDetails) => Promise<void>;
  updateBankDetails: (data: BankDetails) => Promise<void>;
  uploadDocuments: (data: FormData) => Promise<void>;
  getProfileSection: (section: ProfileSection) => Promise<any>;
  resetError: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [status, setStatus] = useState<ProfileStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      initializeProfile();
    }
  }, [isAuthenticated]);

  const initializeProfile = async () => {
    try {
      setLoading(true);
      await Promise.all([getProfile(), getProfileStatus()]);
    } catch (err: any) {
      setError("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  const getProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get("/profile");
      setProfile(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch profile");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProfileStatus = async () => {
    try {
      const response = await api.get("/profile/status");
      setStatus(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch profile status");
      throw err;
    }
  };

  const updateBasicDetails = async (data: BasicDetails) => {
    try {
      setLoading(true);
      const response = await api.patch("/profile/basic-details", data);
      setProfile(response.data);
      getProfileStatus()
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update basic details");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateContactDetails = async (data: ContactDetails) => {
    try {
      setLoading(true);
      const response = await api.patch("/profile/contact-details", data);
      setProfile(response.data);
      await getProfileStatus(); // Refresh status after update
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to update contact details"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateJobDetails = async (data: JobDetails) => {
    try {
      setLoading(true);
      const response = await api.patch("/profile/job-details", data);
      setProfile(response.data);
      await getProfileStatus(); // Refresh status after update
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update job details");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateBankDetails = async (data: BankDetails) => {
    try {
      setLoading(true);
      const response = await api.patch("/profile/bank-details", data);
      setProfile(response.data);
      await getProfileStatus(); // Refresh status after update
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update bank details");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const uploadDocuments = async (formData: FormData) => {
    try {
      setLoading(true);
      const response = await api.post("/profile/documents", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProfile(response.data);
      await getProfileStatus(); // Refresh status after update
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to upload documents");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProfileSection = async (section: ProfileSection) => {
    try {
      const response = await api.get(`/profile/section/${section}`);
      return response.data;
    } catch (err: any) {
      setError(
        err.response?.data?.message || `Failed to fetch ${section} section`
      );
      throw err;
    }
  };

  const resetError = () => {
    setError(null);
  };

  const value = {
    profile,
    status,
    loading,
    error,
    getProfile,
    getProfileStatus,
    updateBasicDetails,
    updateContactDetails,
    updateJobDetails,
    updateBankDetails,
    uploadDocuments,
    getProfileSection,
    resetError,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error(
      "useProfileContext must be used within a ProfileContextProvider"
    );
  }
  return context;
};
