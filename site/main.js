console.log('dsdsd');

const list = document.getElementById('app');

let posts = [];

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(result => {
    posts = result;
    posts.forEach((post, index) => {
      const node = document.createElement('li');
      const button = document.createElement('button');
      const text = document.createElement('div');
      text.innerText = post.title;
      button.innerText = 'Delete me';
      button.onclick = () => {
        delete post[index];
      };
      node.appendChild(text);
      node.appendChild(button);
      list.appendChild(node);
    });
  });
