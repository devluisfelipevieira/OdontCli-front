export default function DeleteForm() {
  return (
    <>
      <form>
        <label htmlFor="nameUser">Nome de Usuário</label>
        <input type="text" name="nameUser" id="nameUser" />
        <button type="submit">Excluir</button>
      </form>
    </>
  );
}
