export default function Login() {
  return (
    <>
      <label htmlFor="user">Nome de Usuário</label>
      <input type="text" name="user" id="user" />
      <label htmlFor="password">Senha</label>
      <input type="text" name="password" id="password" />
      <button>Entrar</button>
    </>
  );
}
