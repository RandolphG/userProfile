import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { profile, modal } from "../../motionSettings";
import ProfileInfo from "./ProfileInfo";

const Profile: React.FC = memo(() => {
  const history = useHistory();

  const Games = () => {
    return (
      <div className="games">
        <span className="games__title">Games (3)</span>
        <div className="games__container">
          <div className="games__container__game">Tetris</div>
          <div className="games__container__game">Typing</div>
          <div className="games__container__game">Around</div>
        </div>
      </div>
    );
  };

  const Badges = () => {
    return (
      <div className="badges">
        <span className="badges__title">Badges (3)</span>
        <div className="badges__container">
          <div className="badges__container__game">Fast</div>
          <div className="badges__container__game">Kills</div>
          <div className="badges__container__game">Perfect</div>
        </div>
      </div>
    );
  };

  const Stats = () => {
    return (
      <div className="stats">
        <div className="stats__container">
          <div className="stats__container__wins">WINS #77</div>
          <div className="stats__container__ties">TIES #21</div>
          <div className="stats__container__loses">LOSES #77</div>
        </div>
      </div>
    );
  };

  const ModalBackButtonSvg = () => (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      focusable="false"
      tabIndex={-1}
      className="icon-back"
    >
      <path
        d="M0 12.782c0 .85.1 1.65.3 2.45.1.45.35.45.5 0 1.05-2.65 2.75-5.15 5.55-5.65H8v2.2c0 1 .6 1.3 1.3.7l6.4-5.5c.35-.3.35-.8 0-1.15L9.3.332c-.7-.65-1.3-.3-1.3.65v2.35c-4.8.8-8 4.7-8 9.45z"
        fill="currentColor"
      />
    </svg>
  );

  const ModalNavigation = () => (
    <div className="modal__container__nav">
      <button
        className="modal__container__nav__button"
        onClick={() => {
          history.push("/dashboard");
        }}
      >
        <ModalBackButtonSvg /> Dashboard
      </button>
      <span />
    </div>
  );

  const Rank = () => (
    <div className="rank">
      <div className="rank__text">#99</div>
      <div className="rank__number">Rank</div>
    </div>
  );

  return (
    <motion.div
      key="profile"
      className="dashboard"
      {...profile}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="dashboard__options">
        <span className="modal">
          <div className="modal__container">
            <ModalNavigation />
            <ProfileInfo />
            <Rank />
            <Badges />
            <Games />
            <Stats />
          </div>
        </span>
      </div>
    </motion.div>
  );
});

export default Profile;
