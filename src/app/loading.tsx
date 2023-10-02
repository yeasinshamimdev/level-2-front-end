import Spinner from "@/components/ui/Spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Spinner />
    </div>
  );
};

export default Loading;
