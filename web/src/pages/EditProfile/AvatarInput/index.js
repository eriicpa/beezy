import React from 'react';
import { updateProfileRequest } from '../../../store/modules/user/actions';
import { useSelector, useDispatch } from 'react-redux';


import api from '../../../services/api';

import './styles.css';

export default function AvatarInput() {
  
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  

  async function handleChange(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id } = response.data;

    const avatar_id = id;
    const name = profile.name;
    const email = profile.email;
    const city = profile.city;
    const uf = profile.uf;
    const service_type = profile.service_type;
    const whatsapp = profile.whatsapp;
    const bio = profile.bio;


    const dados = {
      name,
      email,
      city,
      uf,
      service_type,
      whatsapp,
      bio,
      avatar_id
    }

    dispatch(updateProfileRequest(dados));
    console.tron.log(dados);
    console.log(id);
  }

  var image = ""

  if (profile.avatar === null){
    image = "https://gravatar.com/avatar/830fbc10c9a6981f11ed345c51437ab3?s=200&d=retro&r=x"
  }else {
    image = profile.avatar.url
  }

  return (
    <div className="containerImg">
      <label htmlFor="avatar">
        <img src={image} alt=""/>

        <input
          name="avatar"
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}