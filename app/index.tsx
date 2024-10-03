import { InputSearch, SectionSearch, ScrollBody, ScreenContainer, Icon, SectionNotes, Notes, BorderLeft, Title, Content, ColumnText, ButtonAdd, LabelAdd } from '@/styles/index';
import { useState } from 'react';
import { Image } from 'react-native'; 
const AddImage = require('@/assets/images/pencil.png');
const SearchImage = require('@/assets/images/search.png');

export default function Index() {
  const [searchText, setSearchText] = useState('');

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
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
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
