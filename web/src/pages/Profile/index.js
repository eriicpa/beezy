import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

import { FiTrash2, FiEdit } from 'react-icons/fi';

import './styles.css';



export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('services').then(response => {
      setServices(response.data);
    });
  }, []);

  async function handleDeleteService(id) {
    try {
      await api.delete(`services/${id}`);
      setServices(services.filter(services => services.id !== id));
      console.log(id);
      toast.success('Serviço deletado com sucesso!');

    } catch (err) {
      alert('Erro ao deletar serviço, tente novamente.');
    }
    
  }
  async function teste () {
  }

  return(
    <div className="gradient">
      <Header />
      <div className="profile-container">

        <div className="header">
          <span className="textWhite">Meus Serviços: </span>
          <Link className="white" to="/services/new">Cadastar Serviço</Link>
        </div>

        <ul>
          {services.map(services => ( 
            
            <li key={services.id}>
            <div className="cardContainer">
              <div className="cardContent">
              <strong>Nome</strong>
              <p>{services.title}</p>

              <strong>Valor</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(services.value)}</p>
              </div>

              <div className="buttonsImg">
                <div className="buttons">
                  <Link className="update" to={{
                    pathname: '/services/update',
                    state: services,
                  }}>
                    <FiEdit size={20} color="#a8a8b3" />
                  </Link>
                  <button type="button" onClick={() => handleDeleteService(services.id)}>
                    <FiTrash2 size={20} color="#bc5959" />
                  </button>
                </div>
                  <img className="imgService" src={services.avatar.url} alt=""/>
              </div>
            </div>
          </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}