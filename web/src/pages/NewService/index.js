import React, { useState } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewService() {
  
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [avatar_id, setAvatarId] = useState('');
  const [avatarimg, setAvatarImg] = useState('https://i.ibb.co/dgtwnz1/upload.png');

  async function handleService(e){
    e.preventDefault();

    const data = {
      title,
      value,
      avatar_id
    }

    try{
      console.tron.log(data);
      const response = await api.post('services', data);
      console.tron.log(response);
      toast.success('Serviço cadastrado com sucesso!');
    }catch{
      toast.error('Verifique os dados cadastrados!');
    }
  }


  async function handleImage(e){

    e.preventDefault();

    const data = new FormData();
    data.append('file', e.target.files[0]);
    
    const response = await api.post('files', data);

    const { id, url } = response.data;

    setAvatarId(id);
    setAvatarImg(url);
  }

  return(
    <div className="gradient">
      <Header />
      <div className="new-service-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Beezy"/>

          <h1>Cadastrar Serviço</h1>
          <p>Coloque o nome e o valor de seu serviço para que possa ser encontrado por outras pessoas!</p>
          
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#c7653b"/>
            Voltar para meus serviços
          </Link>
          
          </section>
          <form onSubmit={handleService}>
            <div className="imginput">
              <div className="inputtext">
              <input 
                value={title}
                type="text" 
                placeholder="Nome do Serviço"
                onChange={e => setTitle(e.target.value)}
              />
              <input
                value={value}
                type="text" 
                placeholder="Valor"
                onChange={e => setValue(e.target.value)}
              />
              </div>
              <label htmlFor="image">
                <img className="imgService" src={avatarimg} alt=""/>
                <input
                  name="avatar"
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
               />
              </label>
            </div>

            <button className="button" type="submit">Cadastrar</button>

          </form>
        
      </div>
    </div>
    </div>
    
  );
}