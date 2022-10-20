import {
  ContentRightBlock,
  ContentStyled,
  ContentVideo,
  ContentVideoBlock,
} from "./Main.styled";

export const Content: React.FC = () => {
  return (
    <ContentStyled>
      <ContentVideoBlock>
        <ContentVideo autoPlay muted>
          <source
            src={require("../../assets/video/rizard.mp4")}
            type="video/ogg"
          />
        </ContentVideo>
      </ContentVideoBlock>
      <ContentRightBlock>
        Only the best ice-cream Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor dolorum maxime vel doloribus tenetur. Nam qui
        quas doloribus odio quod, necessitatibus dolore dolores molestiae unde
        ab explicabo fuga vel assumenda. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Libero quae incidunt quaerat nobis ipsa perspiciatis
        et autem, nesciunt laboriosam error dicta corporis! Quos dolorum saepe
        doloremque, necessitatibus dicta optio? Natus! Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Laboriosam, cupiditate? Expedita,
        nesciunt quis error odio commodi quae delectus, quos facere quasi nulla
        culpa maxime repellat dolorum ullam reprehenderit quas impedit.
      </ContentRightBlock>
    </ContentStyled>
  );
};
