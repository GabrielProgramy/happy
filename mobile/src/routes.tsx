import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './Pages/OrphanagesMap';
import OrphanageDetails from './Pages/OrphanageDetails';
import SelectMapPosition from './Pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './Pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'}}}>
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap}
        />
        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />
        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }}
        />
        <Screen 
          name="OrphanageData" 
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

