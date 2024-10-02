const posts = [
  {
    title: 'This is Title1',
    body: 'This is body1',
  },
  {
    title: 'This is Title2',
    body: 'This is body2',
  },
  {
    title: 'This is Title3',
    body: 'This is body3',
  },
  {
    title: 'This is Title4',
    body: 'This is body4',
  },
  {
    title: 'This is Title5',
    body: 'This is body5',
  },
  {
    title: 'This is Title6',
    body: 'This is body6',
  },
  {
    title: 'This is Title7',
    body: 'This is body7',
  },
  {
    title: 'This is Title8',
    body: 'This is body8',
  },
];

const postsElement = document.querySelector('.posts');

const loadAllData = () => {
  posts.map(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = ` <h4 class="post-title">${post.title}</h4>
      <p class="post-body">${post.body}</p>`;
    postsElement.appendChild(postElement);
  });
};
loadAllData();
