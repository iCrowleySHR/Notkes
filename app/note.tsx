import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputContent, InputTitle, ScrollBody } from '@/styles/note';
import { ScreenContainer } from '@/styles';
import { createNote } from '@/services/note';
import Toast from 'react-native-toast-message';
import Header from '@/components/header';

export default function Note() {
  const { id } = useLocalSearchParams();
  const noteId = Array.isArray(id) ? id[0] : id;
  const [note, setNote] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (noteId) {
        try {
          const value = await AsyncStorage.getItem(noteId);
          if (value !== null) {
            setNote(JSON.parse(value));
          }
        } catch (e) {
          setError('nota não encontrada');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); 
        setNote({ title: '', content: '' }); 
      }
    };

    fetchData();
  }, [noteId]);

  const saveNotes = async () => {
    createNote(note);
    Toast.show({
      text1: 'Nota salva!'
    })
  };

  useEffect(() => {
    saveNotes();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  const handleTitleChange = (text: string) => {
    setNote((prev) => ({ ...prev, title: text }));
  };

  const handleContentChange = (text: string) => {
    setNote((prev) => ({ ...prev, content: text }));
  };

  return (
    <ScrollBody>  
      <Header onSave={saveNotes} /> <Toast />
      <ScreenContainer>
        <InputTitle
          value={note.title}
          onChangeText={handleTitleChange}
          placeholder="Insira o título da nota..."
        />
        <InputContent
          value={note.content}
          onChangeText={handleContentChange}
          placeholder="Digite aqui o conteúdo..."
          multiline
        />
      
      </ScreenContainer>
    </ScrollBody>
  );
}
