
const posts = [
  {
    id: 1,
    title: 'title 1'
  },
  {
    id: 2,
    title: 'cool title'
  },
  {
    id: 3,
    title: 'title 4'
  }
];

const List = () => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default List;
