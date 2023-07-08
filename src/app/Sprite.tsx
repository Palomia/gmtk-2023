type Props = {
  file?: string;
  width: number;
  height: number;
  line: number;
  column: number;
  className?: string;
};

function Sprite({ file, width, height, line, column, className }: Props) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url("${file}")`,
        backgroundPositionX: `${-column * width}px`,
        backgroundPositionY: `${-line * height}px`,
      }}
      className={className}
    />
  );
}

export default Sprite;
