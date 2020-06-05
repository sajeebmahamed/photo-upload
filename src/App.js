import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUploads from './components/FileUploads';

function App() {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        <i className="fab fa-react">React File Upload</i>
      </h4>

      <FileUploads />
    </div>
  );
}

export default App;
