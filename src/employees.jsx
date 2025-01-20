import React from 'react';
import { createRoot } from 'react-dom/client';
import EmployeeList from './EmployeeList.jsx';

const rootElement = document.getElementById('content');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>
);