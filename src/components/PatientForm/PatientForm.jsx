"use client";

export default function PatientForm(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Nome Completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={props.dataForm.name}
          onChange={props.handleChange}
          required
        />
        <label htmlFor="bornDate">Data de Nascimento:</label>
        <input
          type="date"
          id="bornDate"
          name="bornDate"
          value={props.dataForm.bornDate}
          onChange={props.handleChange}
          required
        />
        <label htmlFor="gender">Gênero:</label>
        <select
          onChange={props.handleChange}
          required
          name="gender"
          id="gender"
          value={props.dataForm.gender}
        >
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={props.dataForm.cpf}
          onChange={props.handleChange}
          required
        />
        <label htmlFor="address">Cidade:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={props.dataForm.address}
          onChange={props.handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={props.dataForm.email}
          onChange={props.handleChange}
        />
        <label htmlFor="phone">Telefone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={props.dataForm.phone}
          onChange={props.handleChange}
        />
        <button type="submit">{props.button}</button>
      </form>
    </>
  );
}
