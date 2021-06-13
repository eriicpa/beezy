import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { sigInRequest } from '../../store/modules/auth/actions';

import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import beeImg from '../../assets/bz.png';
import logoImg from '../../assets/logo.svg';


export default function Logon() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e){
    e.preventDefault();

    const data = {
      email,
      password,
    }

    dispatch(sigInRequest(email, password));
    console.tron.log(data);
    console.log(email);
  }
  
  
  return (
    <div className="logon-container">
      <div className="modal">
      <section className="form">
        <img src={logoImg} alt="Logo Beezy"/>

        <form onSubmit={handleLogin}>
          <h1>Para prestar serviços, faça Login</h1>

          <input
            name="email"
            value={email} 
            type="email" 
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="password"
            value={password} 
            type="password" 
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          
          <button className="button" type="submit">{ loading ? 'Carregando...' : 'Logar' }</button>
          
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#c7653b"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      </div>

      <img src={beeImg} alt="Beezy Logo"/>
    </div>
  );
}
