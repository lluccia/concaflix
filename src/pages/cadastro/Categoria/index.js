import React, { useState } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return(
        <PageTemplate>
            <h1>Cadastro de Categoria:</h1>
            
            <form onSubmit={(evento) => {
                evento.preventDefault();

                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descricao"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.nome}${indice}`}> 
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
 
            <Link to="/">
                Ir para home
            </Link>
        </PageTemplate>
    )
};
  
export default CadastroCategoria;