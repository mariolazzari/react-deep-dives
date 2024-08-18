type HeavyComponentProps = {
  onClick: () => void;
  title: string;
};

export const HeavyComponent = ({ onClick, title }: HeavyComponentProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Some other stuff here</p>
      <button className="button" onClick={onClick}>
        Done!
      </button>
    </>
  );
};
