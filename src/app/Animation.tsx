type Props = {
  file: string;
  width: number;
  height: number;
};

function Animation({ file, width, height }: Props) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url("${file}")`,
      }}
    />
  );
}

export default Animation;
