export default function ProcedureForm(props) {
  return (
    <>
      <form>
        <label htmlFor="id">Id:</label>
        <input type="number" id="id" name="id" />
        <label htmlFor="procedureName">Nome:</label>
        <input type="text" id="procedureName" name="procedureName" />
        <label htmlFor="description">Descrição:</label>
        <input type="text" id="description" name="description" />
        <label htmlFor="price">Preço:</label>
        <input type="text" id="price" name="price" />
        <button type="submit">{props.button}</button>
      </form>
    </>
  );
}
