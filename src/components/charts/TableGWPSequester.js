import forest from "../../../src/images/forest.png";
import planting from "../../../src/images/planting.png";
const TableGWPSequester = ({ data }) => {
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
            To sequester total GWP per scheme:
          </th>
        </tr>
        <tr>
          <th colspan="2"></th>
          {OptionOneGWPTotal > 0 && (
            <th className="menu-text-medium ">{descriptionOne}</th>
          )}
          {OptionTwoGWPTotal > 0 && (
            <th className="menu-text-medium ">{descriptionTwo}</th>
          )}
          {OptionThreeGWPTotal > 0 && (
            <th className="menu-text-medium">{descriptionThree}</th>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="menu-text-medium">
            <img src={planting} className="img-table" alt="plants" />
          </td>
          <td className="menu-text-medium th-description">
            Tree seedlings grown for a decade
          </td>

          {OptionOneGWPTotal > 0 && (
            <td className="menu-text-medium info">
              {calculateValue(OptionOneGWPTotal, 130)}
            </td>
          )}
          {OptionTwoGWPTotal > 0 && (
            <td className="menu-text-medium info">
              {calculateValue(OptionTwoGWPTotal, 130)}
            </td>
          )}
          {OptionThreeGWPTotal > 0 && (
            <td className="menu-text-medium info">
              {calculateValue(OptionThreeGWPTotal, 130)}
            </td>
          )}
        </tr>
        <tr>
          <td className="menu-text-small">
            <img src={forest} className="img-table" alt="forest" />
          </td>
          <td className="menu-text-medium th-description">
            Acres of Canadian forest grown for a year
          </td>
          {OptionOneGWPTotal > 0 && (
            <td className="menu-text-medium info">
              {calculateValue(OptionOneGWPTotal, 3850)}
            </td>
          )}
          {OptionTwoGWPTotal > 0 && (
            <td className="menu-text-medium info">
              {calculateValue(OptionTwoGWPTotal, 3850)}
            </td>
          )}
          {OptionThreeGWPTotal > 0 && (
            <td className="menu-text-medium info">
              {calculateValue(OptionThreeGWPTotal, 3850)}
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default TableGWPSequester;
