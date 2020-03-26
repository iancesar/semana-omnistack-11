import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(e) {
        e.preventDefault()

        let data = {
            title,
            description,
            value
        }
        try {

            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar novo caso, tente novamente')
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descrição" value={description} onChange={e => setdescription(e.target.value)} />
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}