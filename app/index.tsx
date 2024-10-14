import { InputSearch, SectionSearch, ScrollBody, ScreenContainer, Icon, SectionNotes, Notes, BorderLeft, Title, Content, ColumnText, ButtonAdd, LabelAdd } from '@/styles/index';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { searchNotes, getAllNotes, NotesType } from '@/services/note';
import { Link, useRouter } from 'expo-router';

const AddImage = require('@/assets/images/pencil.png');
const SearchImage = require('@/assets/images/search.png');

export default function Index() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState<NotesType>({});

  const fetchSearch = async () => {
    if (searchText.trim() === '') {
      const allNotes = await getAllNotes();
      setNotes(allNotes);
    } else {
      const filteredNotes = await searchNotes(searchText);
      setNotes(filteredNotes);
    }
  };

  const fetchNotes = async () => {
    const fetchedNotes = await getAllNotes();
    setNotes(fetchedNotes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    fetchSearch();
  }, [searchText]);


  return (
    <ScreenContainer>
      <SectionSearch>
        <InputSearch
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Pesquisar nota..."
        />
        <Icon source={SearchImage} resizeMode="contain" />
      </SectionSearch>

      <ScrollBody>
        <SectionNotes>
          {Object.keys(notes).length > 0 ? (
            Object.entries(notes).map(([id, note]) => (
              <Link key={id} href={`/note?id=${id}`}>
                <Notes>
                  <BorderLeft />
                  <ColumnText>
                    <Title>{note.title}</Title>
                    <Content>{note.content}</Content>
                  </ColumnText>
                </Notes>
              </Link>
            ))
          ) : (
            <Content>Sem notas disponíveis</Content>
          )}
        </SectionNotes>
      </ScrollBody>
      <ButtonAdd onPress={() => router.push('/note')}>
        <Image
          source={AddImage}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
        <LabelAdd>
          Adicionar{'\n'}
          nova nota
        </LabelAdd>
      </ButtonAdd>
    </ScreenContainer>
  );
}