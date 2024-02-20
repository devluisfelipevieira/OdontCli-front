export default function Front() {
  return (
    <>
      <label htmlFor="serviceDate">Data:</label>
      <input type="text" id="serviceDate" />
      <label htmlFor="professional">Profissional:</label>
      <select name="professional" id="professional">
        <option value="">Profissional 1</option>
        <option value="">Profissional 2</option>
      </select>
    </>
  );
}
