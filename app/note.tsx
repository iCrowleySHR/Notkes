import React, { useEffect, useState, useCallback  } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputContent, InputTitle, ScrollBody } from '@/styles/note';
import { createNote, updateNote, deleteNote } from '@/services/note';
import Header from '@/components/header';
import { debounce } from 'lodash'; 

export default function Note() {
  const { id } = useLocalSearchParams();
  const noteId = Array.isArray(id) ? id[0] : id;
  const [note, setNote] = useState({ title: '', content: '' });
  const [inputHeight, setInputHeight] = useState(0);

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
    deleteNote(noteId);
    router.push('/');
  }
  const saveNotes = async (newNote: any) => {
    if (noteId) {
      updateNote(noteId, newNote);
    } else {
      createNote(newNote);
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
      <Header  onDelete={deleteNotes} />

      <InputTitle
        value={note.title}
        onChangeText={handleTitleChange}
        placeholder="Insira o título da nota..."
      />
      <InputContent
        value={note.content}
        onChangeText={handleContentChange}
        placeholder="Digite aqui o conteúdo..."
        scrollEnabled={false}
        style={{ height: Math.max(35, inputHeight) }}
        onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
        multiline
      />

    </ScrollBody>
  );
}
