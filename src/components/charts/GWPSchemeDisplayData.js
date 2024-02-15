const GWPSchemeDisplayData = ({
  concretePercentage,
  steelPercentage,
  woodPercentage,
}) => {
  // Custom formatter similar to the tooltip formatter
  const formatNumber = (value) => value.toLocaleString();

  const data = [
    {
      Concrete: concretePercentage,
      Steel: steelPercentage,
      Wood: woodPercentage,
    },
  ];

  return (
    <div className="data-display">
      {data.map((entry, index) => (
        <div key={index} className="data-row">
          <p className="menu-text-small">
            Concrete: {formatNumber(entry.Concrete)}
          </p>
          <p className="menu-text-small">Steel: {formatNumber(entry.Steel)}</p>
          <p className="menu-text-small">Wood: {formatNumber(entry.Wood)}</p>
        </div>
      ))}
    </div>
  );
};

export default GWPSchemeDisplayData;
