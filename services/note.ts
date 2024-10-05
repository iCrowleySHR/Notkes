import AsyncStorage from '@react-native-async-storage/async-storage';

export type Note = {
  title: string;
  content: string;
};

export type NotesType = { [key: string]: Note };

export const createNote = async ({ title, content }: Note): Promise<void> => {
  await AsyncStorage.setItem(title, JSON.stringify({ title, content }));
};

export const getAllNotes = async (): Promise<NotesType> => {
  const keys = await AsyncStorage.getAllKeys();
  const result = await AsyncStorage.multiGet(keys);

  const notes = result.reduce<NotesType>((acc, [key, value]) => {
    if (key && value) {
      try {
        const note: Note = JSON.parse(value);
        acc[key] = note;
      } catch (error) {
        console.error('Erro ao analisar a nota:', error);
      }
    }
    return acc;
  }, {} as NotesType);

  return notes;
};

// createNote({
//   "title": "wdwadwadd",
//   "content": "wdwadawdadawd"
// })