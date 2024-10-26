import React, { useEffect, useState, useCallback } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputContent, InputTitle, ScrollBody } from '@/styles/note';
import { createNote, updateNote, deleteNote } from '@/services/note';
import Header from '@/components/header';
import { debounce } from 'lodash';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

export default function Note() {
  const { id } = useLocalSearchParams();
  const initialNoteId = Array.isArray(id) ? id[0] : id;
  const [noteId, setNoteId] = useState(initialNoteId);
  const [note, setNote] = useState({ title: '', content: '' });
  const [inputHeight, setInputHeight] = useState(0);
  const { colors } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      if (noteId) {
        const value = await AsyncStorage.getItem(noteId);
        if (value !== null) {
          setNote(JSON.parse(value));
        }
      } else {
        setNote({ title: '', content: '' });
      }
    };

    fetchData();
  }, [noteId]);

  const deleteNotes = async () => {
    await deleteNote(noteId);
    router.push('/');
  };

  const saveNotes = async (newNote: any) => {
    if (noteId) {
      await updateNote(noteId, newNote);
    } else {
      const id = await createNote(newNote);
      setNoteId(id);
    }
  };

  const debouncedSaveNotes = useCallback(
    debounce((newNote) => saveNotes(newNote), 1000),
    [noteId]
  );

  const handleTitleChange = (text: string) => {
    const updatedNote = { ...note, title: text };
    setNote(updatedNote);
    debouncedSaveNotes(updatedNote);
  };

  const handleContentChange = (text: string) => {
    const updatedNote = { ...note, content: text };
    setNote(updatedNote);
    debouncedSaveNotes(updatedNote);
  };

  return (
    <ScrollBody>
      <StatusBar barStyle="light-content" />
      <Header onDelete={deleteNotes} noteId={noteId} />
      <InputTitle
        value={note.title}
        onChangeText={handleTitleChange}
        placeholder="Insira o título da nota..."
        selection={{ start: 0, end: 0 }}
      />
      <InputContent
        value={note.content}
        onChangeText={handleContentChange}
        placeholder="Digite aqui o conteúdo..."
        scrollEnabled={false}
        style={{ height: Math.max(35, inputHeight) }}
        selection={{ start: 0, end: 0 }}
        onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
        multiline
      />
    </ScrollBody>
  );
}
