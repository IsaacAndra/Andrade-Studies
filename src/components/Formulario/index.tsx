import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
    
}


function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState('');
    const[tempo, setTempo] = useState('00:00')
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                     tarefa,
                     tempo,
                     selecionado: false,
                     completado: false,
                     id: uuidv4()
                }
            ]
        );
        setTarefa('');
        setTempo('00:00');
    }
    return (
        <form className={Style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={Style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        value={tarefa}
                        onChange={evento => setTarefa(evento.target.value)}
                        placeholder="O que voçe quer estudar"
                        required
                    />
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1" 
                        name="tempo"
                        value={tempo}
                        onChange={evento => setTempo(evento.target.value)}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
    )
}

export default Formulario;