import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";
import { TextComponent } from "./TextComponent";

export const CardTop = ({ children, ...props }: any) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      {...props}
      ref={connect}
      className="text-only border-border"
      style={{
        padding: "10px",
        marginBottom: "10px",
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
};

export const CardBottom = ({ children, ...props }: any) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      {...props}
      className=" border-border"
      style={{ padding: "10px 0" }}
      ref={connect}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: () => true,
  },
};
CardBottom.craft = {
  rules: {
    canMoveIn: () => true,
  },
};

export const Card = ({ background, padding = 20, ...props }: any) => {
  return (
    <Container {...props} background={background} padding={padding}>
      <Element canvas id="text" is={CardTop} data-cy="card-top">
        <TextComponent
          text="Only texts"
          fontSize={20}
          data-cy="card-top-text-1"
        />
      </Element>
      <Element canvas id="buttons" is={CardBottom} data-cy="card-bottom">
        <TextComponent
          size="small"
          text="Only buttons down here"
          data-cy="card-bottom-button"
        />
      </Element>
    </Container>
  );
};

Card.craft = {
  props: {},
  related: {
    // settings: ContainerSettings,
  },
};
