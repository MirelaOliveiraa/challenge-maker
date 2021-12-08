import React from "react";

import style from "./style.module.scss";

import Acess from "../../components/Acess";
import Comentarios from "../../components/Comentarios/index.js";

import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import profile3 from "../../assets/profile-3.jpg";

import logo from "../../assets/logo.svg";
import iconPhone from "../../assets/icon-phone.svg";
import iconEmail from "../../assets/icon-email.svg";
import iconAnyFile from "../../assets/icon-any-file.svg";
import iconSecurity from "../../assets/icon-security.svg";
import iconLocation from "../../assets/icon-location.svg";
import iconAcess from "../../assets/icon-access-anywhere.svg";
import iconCollaboration from "../../assets/icon-collaboration.svg";

import bgQuotes from "../../assets/bg-quotes.png";
import illustrationIntro from "../../assets/illustration-intro.png";
import illustrationStayProductive from "../../assets/illustration-stay-productive.png";

import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const Home = () => {
  return (
    <section className={style.section}>
      <div className={style.card}>
        <div className={style.cabecalho}>
          <img src={logo} className={style.logo} />
          <div className={style.pages}>
            <span className={style.span}>Features</span>
            <span className={style.span}>Team</span>
            <span className={style.span}>Sign In</span>
          </div>
        </div>
        <img src={illustrationIntro} className={style.imgInicial} />
        <h1 className={style.h1}>
          All your files in one secure location, accessible anywhere.
        </h1>
        <h3 className={style.h3}>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers
        </h3>
        <button className={style.buttonStart}>Get Started</button>

        <div className={style.tecnologias}>
          <div className={style.text}>
            <img src={iconAcess} className={style.iconAcess} />
            <h2> Access your files, anywhere</h2>
            <span>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </span>
          </div>
          <div className={style.text}>
            <img src={iconSecurity} className={style.iconAcess} />
            <h2>Security you can trust</h2>
            <span>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </span>
          </div>
          <div className={style.text}>
            <img src={iconCollaboration} className={style.iconAcess} />
            <h2>Real-time collaboration</h2>
            <span>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </span>
          </div>
          <div className={style.text}>
            <img src={iconAnyFile} className={style.iconAcess} />
            <h2>Store any type of file</h2>
            <span>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared
            </span>
          </div>
        </div>

        <div className={style.text2}>
          <img src={illustrationStayProductive} className={style.segundaImg} />
          <span>
            <h2 className={style.h2SegImg}>
              Stay productive, wherever you are
            </h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </span>
        </div>

        <div className={style.displayComentarios}>
          <Comentarios>
            <div className={style.comentarios}>
              <img src={bgQuotes} className={style.img} />
              <span>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </span>
              <div className={style.perfil}>
                <img src={profile1} className={style.imgPerfil} />
                <div>
                  <span className={style.nomeUsuario}>Satish Patel </span>
                  <br />
                  <span className={style.especializacao}>
                    Founder e CEO, Huddle
                  </span>
                </div>
              </div>
            </div>
          </Comentarios>

          <Comentarios>
            <div className={style.comentarios}>
              <span>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </span>
              <div className={style.perfil}>
                <img src={profile2} className={style.imgPerfil} />
                <div>
                  <span className={style.nomeUsuario}>Bruce McKenzie</span>
                  <br />
                  <span className={style.especializacao}>
                    Founder e CEO, Huddle
                  </span>
                </div>
              </div>
            </div>
          </Comentarios>

          <Comentarios>
            <div className={style.comentarios}>
              <span>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </span>
              <div className={style.perfil}>
                <img src={profile3} className={style.imgPerfil} />
                <div>
                  <span className={style.nomeUsuario}>Iva Boyd </span>
                  <br />
                  <span className={style.especializacao}>
                    Founder e CEO, Huddle
                  </span>
                </div>
              </div>
            </div>
          </Comentarios>
        </div>
      </div>

      <div className={style.card2}>
        <Acess>
          <div className={style.acess}>
            <h4 className={style.titulo}>Get early acess today</h4>
            <p>
              It only takes a minute to sing up and our free starter tier is
              extremely generous. If you have any questions, our suppont tem
              woulld be happy to help you.
            </p>
            <div className={style.displayInput}>
              <input
                className={style.inputEmail}
                placeholder="example@fylo.com"
                type="text"
              />
              <button className={style.cadastro}>Get Started For Free</button>
            </div>
          </div>
        </Acess>

        <img src={logo} className={style.logo2} />
        <div className={style.displayRodape}>
          <div className={style.info}>
            <h6 className={style.local}>
              <img src={iconLocation} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h6>
          </div>
          <div>
            <div className={style.info}>
              <h6>
                <img src={iconPhone} />
                +1.543.123.4567
              </h6>
            </div>

            <div className={style.info}>
              <h6>
                <img src={iconEmail} />
                example@fylo.com
              </h6>
            </div>
          </div>

          <div className={style.contato}>
            <h5>About Us</h5>
            <h5>Jobs</h5>
            <h5>Press</h5>
            <h5>Blog </h5>
          </div>
          <div className={style.privacy}>
            <h5> Contact Us </h5>
            <h5>Terms</h5>
            <h5>Privacy</h5>
          </div>
          <div className={style.redesSociais}>
            <FiFacebook className={style.icons} />
            <FiTwitter className={style.icons} />
            <FiInstagram className={style.icons} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
