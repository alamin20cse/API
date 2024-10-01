fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


      function loadData()
      {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>response.json())
        .then(data=>console.log(data))
      }


      function loadData2()
      {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>console.log(data))
      }



      function loadData3()
      {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>showdata(data))
      }
      function showdata(user)
      {
        const ul=document.getElementById('ul-list');
        for(const USER of user)
        {
            // console.log(USER);
            // console.log(USER.email);
            const li=document.createElement('li');
            li.innerText=USER.email;
            ul.appendChild(li);
        }
      }





      function loadData4() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => showdatapost(data))
      }
      
      function showdatapost(users) {
        const postContainer = document.getElementById('post-continar');
        postContainer.innerHTML = ''; // Clear previous content if any
        for (const user of users) {
          const li = document.createElement('li');
          li.classList.add('user'); // Add the 'user' class for styling
          li.innerHTML = `<p>Name: ${user.name}</p> <p>Email: ${user.email}</p>`;
          postContainer.appendChild(li);
        }
      }
      