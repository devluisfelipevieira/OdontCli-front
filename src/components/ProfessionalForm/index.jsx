export default function ProfessionalForm(props) {
  return (
    <>
      <form>
        <label htmlFor="id">Id:</label>
        <input type="number" id="id" name="id" />
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="bornDate">Data de Nascimento:</label>
        <input type="text" id="bornDate" name="bornDate" />
        <label htmlFor="gender">Gênero:</label>
        <input type="text" id="gender" name="gender" />
        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" />
        <label htmlFor="cro">CRO:</label>
        <input type="text" id="cro" name="cro" />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="phone">Telefone:</label>
        <input type="text" id="phone" name="phone" />
        <button type="submit">{props.button}</button>
      </form>
    </>
  );
}
