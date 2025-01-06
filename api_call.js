function greet() {
    return "Hello, World!";
  }
  
  let result = greet();
  console.log(result);
  
  async function apiCall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(greet());
      }, 1000);
    });
  }
  
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  async function main() {
    let result = await apiCall();
    console.log(result);
  
    let data = await fetchData();
    console.log(data);
  }
  
  main();
  
  function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
      alert('Please fill in all fields');
      return false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    return true;
  }

  
  // Without Copilot

function fetchData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  
  // With Copilot  (Better Error Handling)
  
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  // Without Copilot

function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  }
  
  // With Copilot 
  
  function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();
  
    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.push(item);
      } else {
        seen.add(item);
      }
    }
    return duplicates;
  }

  function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();
  
    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.push(item);
      } else {
        seen.add(item);
      }
    }
    return duplicates;
  }

  function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();
  
    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.push(item);
      } else {
        seen.add(item);
      }
    }
    return duplicates;
  } 

  test('findDuplicates', () => {
    expect(findDuplicates([1, 2, 3, 4, 5, 2, 3, 4, 6])).toEqual([2, 3, 4]);
  });

    test('findDuplicates', () => {
    expect(findDuplicates([1, 2, 3, 4, 5, 2, 3, 4, 6])).toEqual([2, 3, 4]);
    });
    
    getComputedStyle(document.body).backgroundColor;

    KeyboardEvent.key;
    alert('Hello, World!');
    console.log('Hello, World!');
    console.error('Hello, World!');

    delete obj.key;
    delete obj['key'];

    navigator.clipboard.writeText('Hello, World!');
    navigator.geolocation.getCurrentPosition(position => console.log(position));
    navigator.mediaDevices.getUserMedia({ video: true, audio: true });


    /******************************************************* */
     //wrinting a mongosse logic for the backend in this its mentioned
     // that data will be stored in a mongodb but also going to be fetched into our vs code terminal side by side in the form of table 
    // filepath: /C:/Users/RISHABH JAIN/Downloads/Co-Pilot/server.js
    //******************************************************************************* */
const express = require('express');
const { MongoClient } = require('mongodb');
const Table = require('cli-table');

const app = express();
const port = 3000;

// MongoDB connection URI
const uri = 'your_mongodb_connection_string';

// Function to fetch and display data
async function fetchData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('your_database_name');
    const collection = database.collection('your_collection_name');

    const data = await collection.find({}).toArray();

    const table = new Table({
      head: ['Field1', 'Field2', 'Field3'], // Replace with your field names
      colWidths: [20, 20, 20] // Adjust column widths as needed
    });

    data.forEach(item => {
      table.push([item.field1, item.field2, item.field3]); // Replace with your field names
    });

    console.log(table.toString());
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

// Endpoint to trigger data fetch and display
app.get('/fetch-data', async (req, res) => {
  await fetchData();
  res.send('Data fetched and displayed in terminal.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  