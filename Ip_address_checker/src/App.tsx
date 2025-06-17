import './App.css';
import AppContainer from '@/components/AppContainer';
import Header from '@/components/Header';
import InfoPanel from '@/components/InfoPanel';
import {IpDataProvider} from './context/IpDataContext';
import MyMap from '@/components/MyMap';
import 'leaflet/dist/leaflet.css';
import '@/lib/fixLeafletIcon';
import { useState } from 'react';

function App() {
   const [showMap, setShowMap] = useState<boolean>(false);
  return (
    <>
      <IpDataProvider>
        <AppContainer>
          <Header onMapShow={() => setShowMap(true)}/>
          <InfoPanel />
          {showMap && <MyMap />}
        </AppContainer>
      </IpDataProvider>
  </>
);
}

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
