function CategoryFilter({
  category,
  setCategory,
}) {
  return (
    <select
      value={category}
      onChange={(e) =>
        setCategory(e.target.value)
      }
    >
      <option value="All">
        All Categories
      </option>

      <option value="Social">
        Social
      </option>

      <option value="Banking">
        Banking
      </option>

      <option value="Email">
        Email
      </option>

      <option value="Shopping">
        Shopping
      </option>

      <option value="Work">
        Work
      </option>
    </select>
  );
}

export default CategoryFilter;