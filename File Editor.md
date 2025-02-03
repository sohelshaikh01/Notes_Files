
To create a VS Code-like file/folder viewer and editor using the MERN stack, follow these steps:

1. Project Structure
plaintext
Copy code
mern-text-editor/
├── backend/
│   ├── models/
│   │   └── File.js
│   ├── routes/
│   │   └── fileRoutes.js
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FileViewer.js
│   │   │   ├── FolderViewer.js
│   │   │   └── TextEditor.js
│   │   ├── App.js
│   │   ├── api/
│   │   │   └── fileApi.js
│   │   └── styles/
│   │       └── main.css
└── package.json
2. Backend Implementation
Install Dependencies
bash
Copy code
cd backend
npm init -y
npm install express mongoose cors body-parser
File Model
Create models/File.js:

javascript
Copy code
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, default: '' },
  isFolder: { type: Boolean, default: false },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'File', default: null },
});

module.exports = mongoose.model('File', fileSchema);
Routes
Create routes/fileRoutes.js:

javascript
Copy code
const express = require('express');
const File = require('../models/File');
const router = express.Router();

// Create a file or folder
router.post('/create', async (req, res) => {
  const { name, isFolder, parentId } = req.body;
  try {
    const newFile = new File({ name, isFolder, parentId });
    await newFile.save();
    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create file/folder' });
  }
});

// Get files/folders by parentId
router.get('/:parentId', async (req, res) => {
  try {
    const files = await File.find({ parentId: req.params.parentId });
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch files' });
  }
});

// Update file content
router.put('/update/:id', async (req, res) => {
  try {
    const updatedFile = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update file' });
  }
});

module.exports = router;
Server Setup
Create server.js:

javascript
Copy code
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/textEditor', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/files', fileRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
3. Frontend Implementation
Install Dependencies
bash
Copy code
cd frontend
npx create-react-app .
npm install axios react-router-dom
File Viewer Component
components/FileViewer.js:

javascript
Copy code
import React, { useState, useEffect } from 'react';
import { getFiles } from '../api/fileApi';

const FileViewer = ({ parentId, onFileClick }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, [parentId]);

  const fetchFiles = async () => {
    const data = await getFiles(parentId);
    setFiles(data);
  };

  return (
    <div className="file-viewer">
      {files.map(file => (
        <div
          key={file._id}
          onClick={() => onFileClick(file)}
          className={file.isFolder ? 'folder' : 'file'}
        >
          {file.name}
        </div>
      ))}
    </div>
  );
};

export default FileViewer;
Text Editor Component
components/TextEditor.js:

javascript
Copy code
import React, { useState } from 'react';
import { updateFile } from '../api/fileApi';

const TextEditor = ({ file }) => {
  const [content, setContent] = useState(file?.content || '');

  const saveFile = async () => {
    await updateFile(file._id, { content });
    alert('File saved successfully!');
  };

  return (
    <div className="text-editor">
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={saveFile}>Save</button>
    </div>
  );
};

export default TextEditor;
API Layer
api/fileApi.js:

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/files';

export const getFiles = async parentId => {
  const response = await axios.get(`${API_URL}/${parentId || ''}`);
  return response.data;
};

export const updateFile = async (id, data) => {
  await axios.put(`${API_URL}/update/${id}`, data);
};
Main App
App.js:


import React, { useState } from 'react';
import FileViewer from './components/FileViewer';
import TextEditor from './components/TextEditor';

const App = () => {
  const [currentFile, setCurrentFile] = useState(null);

  return (
    <div className="app">
      <div className="sidebar">
        <FileViewer parentId={currentFile?.parentId} onFileClick={setCurrentFile} />
      </div>
      <div className="editor">
        {currentFile && !currentFile.isFolder && <TextEditor file={currentFile} />}
      </div>
    </div>
  );
};

export default App;
4. Styling
styles/main.css:

css
Copy code
.app {
  display: flex;
}

.sidebar {
  width: 300px;
  border-right: 1px solid #ccc;
  padding: 10px;
}

.file-viewer div {
  padding: 5px;
  cursor: pointer;
}

.file-viewer .folder {
  font-weight: bold;
}

.editor {
  flex: 1;
  padding: 10px;
}

textarea {
  width: 100%;
  height: 400px;
}

button {
  margin-top: 10px;
}
5. Running the Project
Start Backend
bash
Copy code
cd backend
node server.js
Start Frontend
bash
Copy code
cd frontend
npm start
This will give you a basic file/folder viewer with a text editor. You can enhance it further with features like file renaming, deleting, or more complex folder structures.