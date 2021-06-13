import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpRequest } from '../../store/modules/auth/actions';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [service_type, setServiceType] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      email,
      city,
      uf,
      service_type,
      whatsapp,
      bio,
      password,
    }

    dispatch(signUpRequest(name, email, city, uf, service_type, whatsapp, bio, password));
    console.tron.log(data)
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Beezy"/>

          <h1>Para prestar serviços, faça Cadastro</h1>
          <p>Cadastre-se na plataforma e comece a divulgar agora os seus serviços!</p>
          
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#c7653b"/>
            Já tenho cadastro
          </Link>
          
          </section>
          <form onSubmit={handleRegister}>
            <input
              value={name}
              type="text" 
              placeholder="Nome"
              onChange={e => setName(e.target.value)}
            />

            <input 
              value={email}
              type="email" 
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              value={password} 
              type="password" 
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
            />

            <div className="inputLoc">
              <input
                value={city} 
                type="text" 
                placeholder="Cidade"
                onChange={e => setCity(e.target.value)}
            />

              <select 
                value={uf}
                className="cities" 
                style={{ width: 95 }}
                onChange={e => setUf(e.target.value)}
                
              >
                <option value="" disabled selected>UF</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
            <div className="inputCont">
              {/* <input type="text" placeholder="Designer Gráfico"/> */}
              <select 
                className="services" 
                id="service"
                placeholder="Selecionar Serviço"
                value={service_type}
                onChange={e => setServiceType(e.target.value)}
              >   
                  <option value="" disabled selected>Selecionar Serviço</option>
                  <option value="Designer Gráfico">Designer Gráfico</option>
                  <option value="Ilustrador">Ilustrador</option>
                  <option value="Confeiteiro">Confeiteiro</option>
                  <option value="Editor de Vídeo">Editor de Vídeo</option>
                  <option value="Professor">Professor</option>
                  <option value="Contador">Contador</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Fotógrafo">Fotógrafo</option>
                  <option value="Marketing Digital">Marketing Digital</option>
                  <option value="Redator">Redator</option>
                  <option value="Tradutor">Tradutor</option>
                  <option value="Maquiador">Editor de Vídeo</option>
                  <option value="Programador">Programador</option>
                  <option value="Costureiro">Costureiro</option>
                  <option value="Manutenção Doméstica">Manutenção Doméstica</option>
                  <option value="Manutenção de Eletrônicos">Manutenção de Eletrônicos</option>


              </select>
              <input
                value={whatsapp}
                type="text" 
                placeholder="WhatsApp"
                onChange={e => setWhatsapp(e.target.value)}
              />
            </div>

            <textarea
              value={bio}
              placeholder="Bio"
              onChange={e => setBio(e.target.value)}
            />

            <button className="button" type="submit">Cadastrar</button>

          </form>
        
      </div>
    </div>
  );
}