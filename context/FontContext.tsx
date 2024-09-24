import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as Font from 'expo-font';
import { Fonts } from '../constants/Fonts';

interface FontContextType {
  fontsLoaded: boolean;
  loadingError?: string;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [loadingError, setLoadingError] = useState<string | undefined>(undefined);

  const fetchFonts = async () => {
    try {
      await Font.loadAsync({
        [Fonts.RalewayRegular]: require('@/assets/fonts/Raleway-Regular.ttf'),
        [Fonts.RalewayBold]: require('@/assets/fonts/Raleway-Bold.ttf'),
        [Fonts.RalewayExtraBold]: require('@/assets/fonts/Raleway-ExtraBold.ttf'),
        [Fonts.RalewayItalic]: require('@/assets/fonts/Raleway-Italic.ttf'),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading fonts', error);
      setLoadingError('Failed to load fonts.');
    }
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  return (
    <FontContext.Provider value={{ fontsLoaded, loadingError }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFonts = (): FontContextType => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFonts must be used within a FontProvider');
  }
  return context;
};
