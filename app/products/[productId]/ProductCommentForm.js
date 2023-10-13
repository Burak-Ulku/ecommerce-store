export default function ProductCommentForm() {
  return (
    <form>
      <label>
        How many would you like to buy?:
        <select name="selectedFruit">
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
        </select>
      </label>

      <button>Add to Cart</button>
    </form>
  );
}
