export default function UserForm(props) {
  return (
    <>
      <form>
        <label htmlFor="id">Id:</label>
        <input type="number" id="id" name="id" />
        <label htmlFor="userName">Nome de Usuário</label>
        <input type="text" id="userName" name="userName" />
        <label htmlFor="password">Senha:</label>
        <input type="text" id="password" name="password" />
        <label htmlFor="confirmPassword">Confirmar Senha:</label>
        <input type="text" id="confirmPassword" name="confirmPassword" />
        <label htmlFor="typeUser">Tipo de Usuário:</label>
        <input type="text" id="typeUser" name="typeUser" />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
