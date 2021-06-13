import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import './styles.css';

import AvatarInput from './AvatarInput';

import Header from '../../components/Header';

export default function EditProfile() {

  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [city, setCity] = useState(profile.city);
  const [uf, setUf] = useState(profile.uf);
  const [service_type, setServiceType] = useState(profile.service_type);
  const [whatsapp, setWhatsapp] = useState(profile.whatsapp);
  const [bio, setBio] = useState(profile.bio);

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');

  async function handleEdit(e){
    e.preventDefault();

    const data = {
      name,
      email,
      city,
      uf,
      service_type,
      whatsapp,
      bio,
      oldPassword,
      password,
      comfirmPassword
    }

    console.tron.log(data);
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return(
    <div className="gradient2">
    <Header />
    <div className="editprofile-container">
      <div className="content">
      <AvatarInput name="avatar_id"/>
      <form onSubmit={handleEdit}>
      {/* <img src="https://gravatar.com/avatar/830fbc10c9a6981f11ed345c51437ab3?s=200&d=retro&r=x" alt=""/> */}
      
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
                value={service_type}
                className="services" 
                id="service"
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

            <hr className="line"/>

            <input
              value={oldPassword}
              type="password" 
              placeholder="Senha Atual"
              onChange={e => setOldPassword(e.target.value)}
            />
            <input 
              value={password}
              type="password" 
              placeholder="Nova Senha"
              onChange={e => setPassword(e.target.value)}
            />

            <input
              value={comfirmPassword}
              type="password" 
              placeholder="Confirmar Senha"
              onChange={e => setComfirmPassword(e.target.value)}
            />

            <button className="button" type="submit">Salvar Perfil</button>
            <Link className="red" to="/" onClick={handleSignOut}>Sair</Link>

          </form>
      </div>
    </div>
    </div>
  );
}