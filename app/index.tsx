import { InputSearch, SectionSearch, ScrollBody, ScreenContainer, Icon, SectionNotes, Notes, BorderLeft, Title, Content, ColumnText, ButtonAdd, LabelAdd } from '@/styles/index';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { createNote, getAllNotes, NotesType } from '@/services/note';

const AddImage = require('@/assets/images/pencil.png');
const SearchImage = require('@/assets/images/search.png');

export default function Index() {
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState<NotesType>({});

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getAllNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error('Erro ao buscar notas:', error);
      }
    };

//     createNote({
//   "title": "wdwadwadd",
//   "content": "wdwadawdadawd"
// })

    fetchNotes();
  }, []);

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
            Object.entries(notes).map(([title, note]) => (
              <Notes key={title}>
                <BorderLeft />
                <ColumnText>
                  <Title>{title}</Title>
                  <Content>{note.content}</Content>
                </ColumnText>
              </Notes>
            ))
          ) : (
            <Content>Sem notas disponíveis</Content>
          )}
        </SectionNotes>
      </ScrollBody>
      <ButtonAdd>
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