import {useState} from 'react'
import Appcontainer from './components/Appcontainer'
import './App.css'
import Header from './components/Header'
import LanguageSelector from './components/LanguageSelector'
import GithubInfo from './components/GithubInfo'


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  return (
    <Appcontainer>
      <Header />
      <LanguageSelector 
        value={selectedLanguage}
        onValueChange={(lang: string) => setSelectedLanguage(lang)}
      />

      {!selectedLanguage && (
        <p className="text-center mt-4 text-gray-500">
          Please select a language
        </p>
      )}

      {selectedLanguage && <GithubInfo selectedLanguage={selectedLanguage}/>}
    </Appcontainer>
  )
}

export default App
