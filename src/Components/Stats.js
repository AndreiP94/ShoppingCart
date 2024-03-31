export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start Adding your items🔃</p>;
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Good Job! All Done !"
          : `You have ${numItems} items on your list . And you added to your bascket ${" "}
          ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}
