import { InputSearch, SectionSearch, ScrollBody, Icon, SectionNotes, Notes, BorderLeft, Title, Content, ColumnText } from '@/styles/index';
import { useState } from 'react';
const SearchImage = require('@/assets/images/search.png');

export default function Index() {
  const [searchText, setSearchText] = useState('');

  return (
    <ScrollBody>
      
      <SectionSearch>
        <InputSearch
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Pesquisar nota..."
        />
        <Icon source={SearchImage} resizeMode="contain" />
      </SectionSearch>

      <SectionNotes>
        <Notes>
            <BorderLeft />
            <ColumnText>
              <Title>Título da nota!</Title>
              <Content>Conteúdo da nota!</Content>
            </ColumnText>
        </Notes>
      </SectionNotes>

    </ScrollBody>
  );
}
