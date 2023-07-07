type Props = {
  text: string;
};

function Title(props: Props) {
  return <h1>{props.text}</h1>;
}

export default Title;
