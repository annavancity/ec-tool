import house from "../../../src/images/house.png";
import plane from "../../../src/images/airplane.png";
const TableGWPEachScheme = ({ data }) => {
  const calculateValue = (GWPTotal, factor) => {
    const result = GWPTotal / factor;
    return Number(result.toFixed(0)).toLocaleString();
  };

  // Retrieve descriptions from local storage
  const descriptionOne =
    localStorage.getItem("OptionOneDescription") || "Scheme 1";
  const descriptionTwo =
    localStorage.getItem("OptionTwoDescription") || "Scheme 2";
  const descriptionThree =
    localStorage.getItem("OptionThreeDescription") || "Scheme 3";

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
          <th colSpan="5" className="menu-text-medium">
            Total GWP for each scheme equates to:
          </th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th className="menu-text-medium ">{descriptionOne}</th>
          <th className="menu-text-medium ">{descriptionTwo}</th>
          <th className="menu-text-medium">{descriptionThree}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="menu-text-small">
            <img src={house} className="img-table" alt="house" />
          </td>
          <td className="menu-text-small th-description">
            Three Bedroom apartment energy usage for Entire Year
          </td>
          <td className="menu-text-medium danger">
            {calculateValue(OptionOneGWPTotal, 0.92 * 4000)}
          </td>
          <td className="menu-text-medium danger">
            {calculateValue(OptionTwoGWPTotal, 0.92 * 4000)}
          </td>
          <td className="menu-text-medium danger">
            {calculateValue(OptionThreeGWPTotal, 0.92 * 4000)}
          </td>
        </tr>
        <tr>
          <td className="menu-text-small">
            <img src={plane} className="img-table" alt="plane" />
          </td>
          <td className="menu-text-small th-description">
            Flights between NY and London
          </td>
          <td className="menu-text-medium danger">
            {calculateValue(OptionOneGWPTotal, 605)}
          </td>
          <td className="menu-text-medium danger">
            {calculateValue(OptionTwoGWPTotal, 605)}
          </td>
          <td className="menu-text-medium danger">
            {calculateValue(OptionThreeGWPTotal, 605)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableGWPEachScheme;
