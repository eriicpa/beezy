import React from 'react';
import { View, ScrollView } from 'react-native';

import UserItem from '../../Components/UserItem/UserItem';

function PeoplePage(){
  return(
    <ScrollView>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </ScrollView>
  );
}

export default PeoplePage;