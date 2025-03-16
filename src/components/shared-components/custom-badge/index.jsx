const CustomBadge = ({ bg, border, title }) => {
  return (
    <>
      <span
        style={{
          color: border,
          border: `2px solid ${border}`,
          backgroundColor: bg,
          padding: "2px 20px",
          borderRadius: "8px",
        }}
      >
        {title}
      </span>
    </>
  );
};

export default CustomBadge;
