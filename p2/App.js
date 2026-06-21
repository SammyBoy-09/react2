import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  const appTitle = "Welcome to My React App";
  const appTagline = "Building great apps with React";
  const appCopyright = "© 2026 MyApp, All Rights Reserved";

  return (
    <div>
      {/* Passing the data as props to the child components */}
      <Header title={appTitle} />
      
      <main>
        <p>Main content of the application goes here.</p>
      </main>

      <Footer tagline={appTagline} copyright={appCopyright} />
    </div>
  );
}

export default App;