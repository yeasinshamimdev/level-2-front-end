type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <>
      <h1 style={{ marginBottom: "8px" }}>{title}</h1>
      <div style={{ display: "flex" }}>{children}</div>
    </>
  );
};

export default ActionBar;
