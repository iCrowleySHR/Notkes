import React, { createContext, useContext, ReactNode } from 'react';
import { useFonts, Raleway_400Regular, Raleway_700Bold, Raleway_800ExtraBold, Raleway_100Thin} from '@expo-google-fonts/raleway';

interface FontContextType {
  fontsLoaded: boolean;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_100Thin
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontsContext = (): FontContextType => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFonts must be used within a FontProvider');
  }
  return context;
};
