import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  var image = ""

  if (profile.avatar === null){
    image = "https://gravatar.com/avatar/830fbc10c9a6981f11ed345c51437ab3?s=200&d=retro&r=x"
  }else {
    image = profile.avatar.url
  }

  return (
    <div className="container">
      <div className="content">
        <nav>
          {/* <img src={logoImg} alt="Logo Beezy"/> */}
          <Link to="/profile">
          <img src={logoImg} alt="Logo Beezy"/>
          </Link>
        </nav>

        <aside>
          <div className="profile">
            <div>
              <strong>{profile.name}</strong>
              <Link to="/editprofile">Meu perfil</Link>
            </div>
            <img src={image} alt=""/>
          </div>
        </aside>
        </div>
      </div>
  )
}

// https://www.youtube.com/watch?v=XeiOnkEI7XI&ab_channel=Academind