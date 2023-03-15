const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: "white", padding: "4px" }}
      >
        <p className="label">{`${payload[0].payload.id}`}</p>
        <p className="label">{`value_area : ${payload[0].value}`}</p>
        <p className="label">{`value_bar : ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
