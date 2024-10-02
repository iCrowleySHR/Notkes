import { InputSearch, SectionSearch, ScrollBody, Icon, SectionNotes, Notes } from '@/styles/index';
import { useState } from 'react';
import { h, w } from '@/utils/responsiveMesures';
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
      {/* <SectionNotes>
        <Notes>
            dwadwa
        </Notes>
      </SectionNotes> */}
    </ScrollBody>
  );
}
