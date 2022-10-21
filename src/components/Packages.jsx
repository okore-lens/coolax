import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Packages = () => {
  const tick = <FontAwesomeIcon icon={faCheck} />;
  const cross = <FontAwesomeIcon icon={faMinus} />;

  const packageArray = [
    {
      id: 1,
      item: "What Is Included In the Package",
      base: true,
      standard: true,
      premium: true,
    },
    {
      id: 2,
      item: "What Is Included In the Package",
      base: false,
      standard: true,
      premium: true,
    },
    {
      id: 3,
      item: "What Is Included In the Package",
      base: false,
      standard: false,
      premium: true,
    },
    {
      id: 4,
      item: "What Is Included In the Package",
      base: false,
      standard: false,
      premium: true,
    },
    {
      id: 5,
      item: "What Is Included In the Package",
      base: false,
      standard: false,
      premium: true,
    },
  ];
  return (
    <div className="packages">
      <h1>Our Plans</h1>
      <p>
        Coolax Offers A Variety of Packages that Consumers Find Convenient To
        Their <br /> Needs.
      </p>
      <hr className="hr" />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Base Plan</th>
            <th>Standard Plan</th>
            <th>Premium Plan</th>
          </tr>
        </thead>
        <tbody>
          {packageArray.map((rowPackage) => (
            <tr key={rowPackage.id}>
              <td>{rowPackage.item}</td>
              <td>{rowPackage.base === true ? tick : cross}</td>
              <td>{rowPackage.standard === true ? tick : cross}</td>
              <td>{rowPackage.premium === true ? tick : cross}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Packages;
