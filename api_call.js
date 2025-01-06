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
  