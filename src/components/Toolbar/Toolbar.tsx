const Toolbar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 5,
      }}
    >
      <button style={{ height: "50px", width: "50px", textAlign: "center", overflow: "hidden" }}>
        Btn1
      </button>
      <button style={{ height: "50px", width: "50px", textAlign: "center", overflow: "hidden" }}>
        Btn2
      </button>
      <button style={{ height: "50px", width: "50px", textAlign: "center", overflow: "hidden" }}>
        Btn3
      </button>
      <button style={{ height: "50px", width: "50px", textAlign: "center", overflow: "hidden" }}>
        Btn4
      </button>
    </div>
  );
};

export default Toolbar;
