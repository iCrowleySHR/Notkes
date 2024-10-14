import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputContent, InputTitle, ScrollBody } from '@/styles/note';
import { ScreenContainer } from '@/styles';
import { createNote, updateNote } from '@/services/note';
import Toast from 'react-native-toast-message';
import Header from '@/components/header';
import { Text } from 'react-native';

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

  const saveNotes = async () => {
    if (noteId) {
      updateNote(noteId, note);
    }else{
      createNote(note);
      Toast.show({
        text1: 'Nota salva!',
      });
    }
    
    router.push('/');
  };

  const handleTitleChange = (text: string) => {
    setNote((prev) => ({ ...prev, title: text }));
  };

  const handleContentChange = (text: string) => {
    setNote((prev) => ({ ...prev, content: text }));
  };

  return (
    <ScrollBody>
      <Header onSave={saveNotes} />
    
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
  
      <Toast /> 
    </ScrollBody>
  );
}
