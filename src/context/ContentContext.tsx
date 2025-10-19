import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
// FIX: Corrected import paths.
import { SiteContent } from '../types';
import { DEFAULT_CONTENT } from '../constants';

const CONTENT_STORAGE_KEY = 'sarvangini-content';

interface ContentContextType {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: PropsWithChildren<{}>) => {
  const [content, setContentState] = useState<SiteContent>(DEFAULT_CONTENT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
      if (storedContent) {
        setContentState(JSON.parse(storedContent));
      }
    } catch (error) {
      console.error("Failed to load content from localStorage", error);
      setContentState(DEFAULT_CONTENT);
    } finally {
        setIsLoading(false);
    }
  }, []);

  const setContent = (newContent: SiteContent) => {
    try {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(newContent));
      setContentState(newContent);
    } catch (error) {
        console.error("Failed to save content to localStorage", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or a proper spinner component
  }
  
  return (
    <ContentContext.Provider value={{ content, setContent, isLoading }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
