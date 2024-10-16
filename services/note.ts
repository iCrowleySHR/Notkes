import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export type Note = {
  id: string;
  title: string;
  content: string;
  lastUpdate: string; 
};

export type NotesType = { 
  [key: string]: Note 
};

/*
  Função para criar notas no AsyncStorage.
*/
export const createNote = async ({ title, content }: Omit<Note, 'id' | 'lastUpdate'>): Promise<string> => {
  const id = uuidv4();
  const lastUpdate = new Date().toISOString(); 
  await AsyncStorage.setItem(id, JSON.stringify({ id, title, content, lastUpdate }));
  return id;
};

/*
  Função que retorna todas as notas.
*/
export const getAllNotes = async (): Promise<NotesType> => {
  const keys = await AsyncStorage.getAllKeys();
  const result = await AsyncStorage.multiGet(keys);

  const notesArray: Note[] = result.reduce<Note[]>((acc, [key, value]) => {
    if (key && value) {
      try {
        const note: Note = JSON.parse(value);
        acc.push(note); 
      } catch (error) {
        console.error('Erro ao analisar a nota:', error);
      }
    }
    return acc;
  }, []);

  const sortedNotes = notesArray.sort((a, b) => {
    return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime();
  });

  const notes: NotesType = sortedNotes.reduce<NotesType>((acc, note) => {
    acc[note.id] = note;
    return acc;
  }, {});

  return notes;
};
/*
  Função que retorna notas pelo o título.
*/
export const searchNotes = async (searchTerm: string): Promise<NotesType> => {
  const keys = await AsyncStorage.getAllKeys();
  const result = await AsyncStorage.multiGet(keys);

  const filteredNotes = result.reduce<NotesType>((acc, [key, value]) => {
    if (key && value) {
      try {
        const note: Note = JSON.parse(value);

        if (note.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          acc[key] = note;
        }
      } catch (error) {
        console.error('Erro ao analisar a nota:', error);
      }
    }
    return acc;
  }, {} as NotesType);

  return filteredNotes;
};

/*
  Função para atualizar nota recebendo o ID.
*/
export const updateNote = async (id: string, { title, content }: Omit<Note, 'id' | 'lastUpdate'>): Promise<void> => {
  const lastUpdate = new Date().toISOString();
  await AsyncStorage.setItem(id, JSON.stringify({ id, title, content, lastUpdate }));
};

/*
  Função para deletar nota pelo ID.
*/
export const deleteNote = async (id: string): Promise<void> => {
  await AsyncStorage.removeItem(id);
};

/*
  Função para deletar todos os dados do AsyncStorage.
*/
export const deleteAll = async (): Promise<void> => {
  await AsyncStorage.clear();
};
