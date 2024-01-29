const TableGWPEachScheme = ({ data }) => {
  const calculateValue = (GWPTotal, factor) => GWPTotal / factor;

  // Retrieve descriptions from local storage
  const descriptionOne =
    localStorage.getItem("OptionOneDescription") || "Scheme One";
  const descriptionTwo =
    localStorage.getItem("OptionTwoDescription") || "Scheme Two";
  const descriptionThree =
    localStorage.getItem("OptionThreeDescription") || "Scheme Three";

  // Assuming the data array has the GWP total values
  const OptionOneGWPTotal =
    data.find((entry) => entry.name === descriptionOne)?.gwptotal || 0;
  const OptionTwoGWPTotal =
    data.find((entry) => entry.name === descriptionTwo)?.gwptotal || 0;
  const OptionThreeGWPTotal =
    data.find((entry) => entry.name === descriptionThree)?.gwptotal || 0;

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4" className="menu-text-medium">
            Total GWP for each Scheme equates to:
          </th>
        </tr>
        <tr>
          <th></th>
          <th className="menu-text-medium">{descriptionOne}</th>
          <th className="menu-text-medium">{descriptionTwo}</th>
          <th className="menu-text-medium">{descriptionThree}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="menu-text-small">
            Three Bedroom apartment energy usage for Entire Year
          </td>
          <td className="menu-text-small">
            {calculateValue(OptionOneGWPTotal, 0.92).toFixed(0)}
          </td>
          <td className="menu-text-small">
            {calculateValue(OptionTwoGWPTotal, 0.92).toFixed(0)}
          </td>
          <td className="menu-text-small">
            {calculateValue(OptionThreeGWPTotal, 0.92).toFixed(0)}
          </td>
        </tr>
        <tr>
          <td className="menu-text-small">Flights between NY and London</td>
          <td className="menu-text-small">
            {calculateValue(OptionOneGWPTotal, 605).toFixed(0)}
          </td>
          <td className="menu-text-small">
            {calculateValue(OptionTwoGWPTotal, 605).toFixed(0)}
          </td>
          <td className="menu-text-small">
            {calculateValue(OptionThreeGWPTotal, 605).toFixed(0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableGWPEachScheme;
