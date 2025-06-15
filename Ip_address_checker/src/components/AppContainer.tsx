import React from 'react'

interface AppContainerProps {
  children: React.ReactNode
}

const AppContainer = ({children}: AppContainerProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AppContainer