import { LIGHTS } from "constants/images";
import { LampImage } from "./Main.styled";

interface Props {
  lampLoad: boolean;
}

export const Lamp: React.FC<Props> = ({ lampLoad }) => {
  return (
    <>
      <LampImage src={LIGHTS.sophits} lampLoad={lampLoad} />
    </>
  );
};
