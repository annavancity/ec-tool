const GWPSchemeDisplayData = ({
  concretePercentage,
  steelPercentage,
  woodPercentage,
  GWPTotal,
  buildingArea,
}) => {
  // Custom formatter similar to the tooltip formatter
  const formatNumber = (value) => value.toLocaleString();

  const data = [
    {
      Concrete: concretePercentage,
      Steel: steelPercentage,
      Wood: woodPercentage,
      GWPTotal: GWPTotal,
      buildingArea: buildingArea,
    },
  ];

  return (
    <div className="data-display">
      {data.map((entry, index) => (
        <div key={index} className="data-col">
          <div className="data-row">
            <p className="menu-text-small concrete">
              Concrete: {formatNumber(entry.Concrete)}
            </p>
            <p className="menu-text-small wood">
              Wood: {formatNumber(entry.Wood)}
            </p>
            <p className="menu-text-small steel">
              Steel: {formatNumber(entry.Steel)}
            </p>
          </div>
          <div className="data-row">
            <p className="menu-text-small">
              Total GWP: {formatNumber(entry.GWPTotal)}
            </p>
            <p className="menu-text-small">
              GWP per m<sup>2</sup>:{" "}
              {entry.GWPTotal && entry.buildingArea
                ? formatNumber(
                    Number(
                      (
                        Number(entry.GWPTotal) / Number(entry.buildingArea)
                      ).toFixed(0)
                    )
                  )
                : "N/A"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GWPSchemeDisplayData;
