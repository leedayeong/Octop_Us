import { useEffect } from "react";
import { useSelector } from "react-redux";
import MP_night from "../../../../effect/MP_night.mp3";

function NightComponent(props) {
  const room = useSelector((state) => state.wait);

  useEffect(() => {
    var audio = new Audio(MP_night);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
    // setTimeout(() => audio.pause(), room.gameTime); // 나중에는 이거 사용
    setTimeout(() => audio.pause(), 3000); // 테스트용
  }, []);

  return <div></div>;
}

export default NightComponent;