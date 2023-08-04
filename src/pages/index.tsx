import { styled } from "./styles";

const Button = styled("button", {
  backgroundColor: "$gray900",
  span: {
    color: "$white",
  },
  "&:hover": {
    backgroundColor: "purple",
  },
});

export default function Home() {
  return (
    <div>
      <Button>
        <span>teste</span>
      </Button>
    </div>
  );
}
