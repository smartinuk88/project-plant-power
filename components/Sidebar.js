function Sidebar({ categories }) {
  return (
    <div className="left-0 w-64 min-h-screen sticky">
      <div>
        {categories.map((category) => (
          <p>{category}</p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
