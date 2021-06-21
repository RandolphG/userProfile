import React, { memo, useState, useRef } from "react";
import image from "../../assets/_default_profile_img.png";
import { useHistory } from "react-router-dom";

const DashboardInfo: React.FC = memo(() => {
  const history = useHistory();

  const [imageFile, setImageFile] = useState(image);
  const fileInputRef: React.MutableRefObject<null> | null = useRef(null);

  const EditSvg = () => (
    <svg
      className="icon-edit"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M50,140H562V652H50Zm8.3461,256.36c0,37.9981-.16,75.9971.0411,113.9941C58.6326,556.6089,93.44,591,139.6605,591q114.9943.001,229.9885-.0194c42.2416-.0377,77.79-35.19,78.3271-77.4427.2267-17.83.0046-35.6646.1012-53.4965.0231-4.2685-1.3167-7.403-5.4142-9.1758-4.111-1.7785-7.3959-.6356-10.3854,2.3851-5.1576,5.2117-10.6976,10.0888-15.4344,15.6534a17.2389,17.2389,0,0,0-3.9218,9.631c-.4974,10.3089-.1173,20.6573-.2,30.99-.2188,27.2558-19.129,46.111-46.3943,46.1269q-112.9944.0658-225.9887-.0352a54.3089,54.3089,0,0,1-12.3862-1.2206c-20.3645-4.8285-33.9986-22.2718-34.02-43.6868q-.1143-114.4941-.0089-228.9885a58.91,58.91,0,0,1,.51-7.9672c2.46-17.92,19.8459-37.1711,45.4043-37.0276,75.6605.4251,151.3249.1281,226.9877.2136a58.8326,58.8326,0,0,1,13.3473,1.4884,9.8907,9.8907,0,0,0,10.3417-3.05c3.8154-3.9585,7.8173-7.7368,11.6476-11.6813,6.0744-6.2557,4.7826-12.6072-3.2034-16.1465-10.5522-4.6766-21.7062-6.2782-33.1247-6.2828q-112.7443-.0448-225.4888.01c-10.548.0066-20.9131,1.3305-30.8585,5.1852-31.1985,12.0922-51.0049,41.2952-51.1129,75.9035C58.2552,320.3634,58.3468,358.3618,58.3461,396.36Zm362.9872-141.497c-1.0567.9874-2.05,1.8623-2.9843,2.7962Q328.3817,347.5907,238.5106,437.618a10.8724,10.8724,0,0,0-2.8274,6.9129c-.2051,23.6584-.1315,47.3194-.1079,70.98.0014,1.4252.2422,2.85.4024,4.6144h5.7912c22.8272,0,45.6549-.078,68.4809.08a11.0555,11.0555,0,0,0,8.699-3.5913q89.3082-89.539,178.77-178.9251c1.1212-1.1216,2.14-2.3457,2.9868-3.28Zm19.069-18.5745,78.8365,79.134c8.7563-8.5753,18.1835-17.0575,26.71-26.3651a25.2153,25.2153,0,0,0-.4376-34.2294Q523.7,232.1223,500.9888,210.2867c-9.3256-8.9868-24.8232-9.2769-34.2646-.5863C457.4273,218.2579,448.8951,227.6462,440.4023,236.2884Z"
        transform="translate(-50 -140)"
        fill="#fff"
      />
      <path
        d="M58.3464,396.36c0-37.9981-.0912-75.9965.0274-113.9942.108-34.6083,19.9144-63.8113,51.1129-75.9035,9.9454-3.8547,20.3105-5.1786,30.8585-5.1852q112.7444-.07,225.4888-.01c11.4185.0046,22.5725,1.6062,33.1247,6.2828,7.986,3.5393,9.2778,9.8908,3.2034,16.1465-3.83,3.9445-7.8322,7.7228-11.6476,11.6813a9.8907,9.8907,0,0,1-10.3417,3.05,58.8326,58.8326,0,0,0-13.3473-1.4884c-75.6628-.0855-151.3272.2115-226.9877-.2136-25.5584-.1435-42.9448,19.1078-45.4043,37.0276a58.91,58.91,0,0,0-.51,7.9672q-.0393,114.4942.0089,228.9885c.0214,21.415,13.6555,38.8583,34.02,43.6868a54.3089,54.3089,0,0,0,12.3862,1.2206q112.9943.1041,225.9887.0352c27.2653-.0159,46.1755-18.8711,46.3943-46.1269.0829-10.3322-.2972-20.6806.2-30.99a17.2389,17.2389,0,0,1,3.9218-9.631c4.7368-5.5646,10.2768-10.4417,15.4344-15.6534,2.99-3.0207,6.2744-4.1636,10.3854-2.3851,4.0975,1.7728,5.4373,4.9073,5.4142,9.1758-.0966,17.8319.1255,35.6668-.1012,53.4965-.5371,42.2532-36.0855,77.405-78.3271,77.4427q-114.994.1027-229.9885.0194C93.44,591,58.6326,556.6089,58.3872,510.354,58.1856,472.357,58.3461,434.358,58.3464,396.36Z"
        transform="translate(-50 -140)"
      />
      <path
        d="M421.3333,254.8629l79.3723,79.546c-.8469.934-1.8656,2.1581-2.9868,3.28q-89.4046,89.443-178.77,178.9251a11.0555,11.0555,0,0,1-8.699,3.5913c-22.826-.1581-45.6537-.08-68.4809-.08h-5.7912c-.16-1.7644-.401-3.1892-.4024-4.6144-.0236-23.66-.0972-47.3212.1079-70.98a10.8724,10.8724,0,0,1,2.8274-6.9129q89.8057-90.0924,179.8384-179.9589C419.2833,256.7252,420.2766,255.85,421.3333,254.8629ZM288.7976,493.38c8.31.44,16.1767,2.0549,21.8637-6.1217,2.6179-3.7639,6.44-6.7037,9.7865-9.9443,5.3127-5.1443,10.6844-10.2276,15.11-14.4566L293.45,420.2539c-9.76,9.74-19.7763,19.7062-29.7345,29.7305a5.0185,5.0185,0,0,0-1.5616,2.9158c-.1658,4.5889-.073,9.1871-.073,14.3182h26.7163Zm36.2437-90.587a44.96,44.96,0,0,0,5.4348-4.1553q32.539-32.4117,64.9585-64.9433c9.881-9.8866,19.8014-19.7341,29.6409-29.6618,3.76-3.7939,3.8529-6.8071.597-9.8384-3.2506-3.0265-5.7594-2.6363-10.1942,1.7934q-46.9767,46.922-93.9141,93.8833a19.3883,19.3883,0,0,0-2.9466,3.368C316.298,397.0166,319.4686,402.6321,325.0413,402.7926Z"
        transform="translate(-50 -140)"
      />
      <path
        d="M440.4023,236.2884c8.4928-8.6422,17.025-18.03,26.3219-26.588,9.4414-8.6906,24.939-8.4,34.2646.5863q22.6714,21.8478,44.5221,44.5412a25.2153,25.2153,0,0,1,.4376,34.2294c-8.5262,9.3076-17.9534,17.79-26.71,26.3651Z"
        transform="translate(-50 -140)"
      />
      <path
        d="M288.7976,493.38V467.2184H262.0813c0-5.1311-.0928-9.7293.073-14.3182a5.0185,5.0185,0,0,1,1.5616-2.9158c9.9582-10.0243,19.9745-19.9908,29.7345-29.7305l42.1075,42.6031c-4.4257,4.229-9.7974,9.3123-15.11,14.4566-3.3465,3.2406-7.1686,6.18-9.7865,9.9443C304.9743,495.4345,297.1076,493.82,288.7976,493.38Z"
        transform="translate(-50 -140)"
        fill="#fff"
      />
      <path
        d="M325.0413,402.7926c-5.5727-.1605-8.7433-5.776-6.4237-9.5541a19.3883,19.3883,0,0,1,2.9466-3.368q46.9428-46.956,93.9141-93.8833c4.4348-4.43,6.9436-4.82,10.1942-1.7934,3.2559,3.0313,3.1631,6.0445-.597,9.8384-9.8395,9.9277-19.76,19.7752-29.6409,29.6618q-32.4663,32.4848-64.9585,64.9433A44.96,44.96,0,0,1,325.0413,402.7926Z"
        transform="translate(-50 -140)"
        fill="#fff"
      />
    </svg>
  );

  const LogOutSvg = () => (
    <svg
      className="logout-svg"
      fill="none"
      viewBox="0 0 24 24"
      id="img__logout-24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9v-2H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9V3H5zm16.83 9.557a1 1 0 0 0-.128-1.27l-3.995-3.994a1 1 0 1 0-1.414 1.414L18.586 11H11a1 1 0 1 0 0 2h7.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l3.995-3.995a.997.997 0 0 0 .128-.155z"
        fill="currentColor"
      />
    </svg>
  );

  const ProfileSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      role="img"
      className="icon fill-current"
    >
      <clipPath id="a">
        <path d="m0 0h16v16h-16z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path d="m8 6c-.53043 0-1.03914.21071-1.41421.58579-.37508.37507-.58579.88378-.58579 1.41421s.21071 1.03914.58579 1.41421c.37507.37508.88378.58579 1.41421.58579s1.03914-.21071 1.41421-.58579c.37508-.37507.58579-.88378.58579-1.41421s-.21071-1.03914-.58579-1.41421c-.37507-.37508-.88378-.58579-1.41421-.58579zm-6 0c-.53043 0-1.039141.21071-1.414214.58579-.375072.37507-.585786.88378-.585786 1.41421s.210714 1.03914.585786 1.41421c.375073.37508.883784.58579 1.414214.58579s1.03914-.21071 1.41421-.58579c.37508-.37507.58579-.88378.58579-1.41421s-.21071-1.03914-.58579-1.41421c-.37507-.37508-.88378-.58579-1.41421-.58579zm12 0c-.5304 0-1.0391.21071-1.4142.58579-.3751.37507-.5858.88378-.5858 1.41421s.2107 1.03914.5858 1.41421c.3751.37508.8838.58579 1.4142.58579s1.0391-.21071 1.4142-.58579c.3751-.37507.5858-.88378.5858-1.41421s-.2107-1.03914-.5858-1.41421c-.3751-.37508-.8838-.58579-1.4142-.58579z" />
      </g>
    </svg>
  );

  const PlayStats = () => (
    <div className="card__header__details">
      <div className="card__header__details__all-games">
        <span className="number">398</span>
        <span className="text">ALL GAMES</span>
      </div>
      <div className="card__header__details__lose-rate">
        <span className="number">4.4%</span>
        <span className="text">LOSE RATE</span>
      </div>
      <div className="card__header__details__win-rate">
        <span className="number">95.6%</span>
        <span className="text">WIN RATE</span>
      </div>
    </div>
  );

  const Xp = () => (
    <div className="card__header__xp">
      <div className="card__header__xp__bar">
        <span className="card__header__xp__bar__top">
          <span className="number">7</span>
        </span>
        <span className="card__header__xp__bar__bottom">
          <span className="number">8</span>
        </span>
      </div>
      <div className="card__header__xp__details">
        <div className="card__header__xp__details__current-xp">
          <span className="from">XP 768</span>
          <span className="to">/800</span>
        </div>
        <div className="card__header__xp__details__level-up">
          <span className="from">32 XP</span>
          <span className="to">to level Up</span>
        </div>
      </div>
    </div>
  );

  const PlayerStatus = () => (
    <div className="card__header__player-status">
      <span className="card__header__player-status__text">Player status</span>
      <span className="card__header__player-status__data">
        Last online 2 hours ago
      </span>
    </div>
  );

  const PlayerImg = () => (
    <div className="card__header__profile">
      <img
        className="card__header__profile__img"
        src={imageFile}
        alt="profile_img"
      />
    </div>
  );

  function photoUpload(e: any) {
    const file = e;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (theFile) => {
      const data = {
        blob: theFile?.target?.result,
        name: file.name,
      };
      // @ts-ignore
      setImageFile(data.blob);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function handleFileInput(e: any) {
    e.preventDefault();
    photoUpload(e.target.files[0]);
  }

  function handleLogOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    history.push("/");
  }

  const OptionalButtons = () => (
    <div className="card__header__buttons">
      <button
        className="card__header__buttons__edit-button"
        onClick={(e) => {
          // @ts-ignore
          fileInputRef.current && fileInputRef.current.click();
        }}
      >
        <EditSvg /> Edit
      </button>
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleFileInput}
      />
      <button className="card__header__buttons__logout" onClick={handleLogOut}>
        <LogOutSvg /> Log Out
      </button>
      <button
        className="card__header__buttons__xtra-button"
        onClick={() => console.log(`xtra options`)}
      >
        <ProfileSvg />
      </button>
    </div>
  );

  return (
    <div className="card">
      <div className="card__header">
        <OptionalButtons />
        <h2 className="card__header__title">Leader Board</h2>
        <div className="card__header__location">Top Challengers</div>
        <div className="card__header__player-lvl">
          <div className="card__header__player-lvl__text">Lvl #99</div>
        </div>
        <PlayerImg />
        <PlayerStatus />
        <Xp />
        <PlayStats />
      </div>
    </div>
  );
});

export default DashboardInfo;
