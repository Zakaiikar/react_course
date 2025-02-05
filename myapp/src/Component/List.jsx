const List = () => {
  const items = ["react", "angular", "vue", "Svite"];
  return (
    <div>
      <p>This the popular courses</p>
      <ul>
        {items.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
