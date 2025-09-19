import PropTypes from "prop-types";

export default function SymbolCard({ title, icon, data, viewMode, formatNumber }) {
  return (
    <div className="card-clean shadow-sm">
      <div className="card-header-clean d-flex align-items-center">
        <img
          src={icon}
          alt={title}
          style={{ width: "32px", height: "32px", marginRight: "12px" }}
        />
        <h5 className="card-title-clean fw-bold m-0">{title}</h5>
      </div>
      <div className="card-body-clean">
        <div className="table-responsive">
          <table className="boss-table">
            <thead>
              <tr>
                <th className="col-md-4">等級</th>
                {viewMode === "cost" ? (
                  <>
                    <th className="col-md-4">升級花費</th>
                    <th className="col-md-4">總花費</th>
                  </>
                ) : (
                  <>
                    <th className="col-md-4">升級數量</th>
                    <th className="col-md-4">總數量</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { level, upgradeCost, totalCost, upgradeCount, totalCount },
                  index
                ) => (
                  <tr key={index} className="boss-row">
                    <td>{level}</td>
                    {viewMode === "cost" ? (
                      <>
                        <td>{formatNumber(upgradeCost)}</td>
                        <td>{formatNumber(totalCost)}</td>
                      </>
                    ) : (
                      <>
                        <td>{formatNumber(upgradeCount)}</td>
                        <td>{formatNumber(totalCount)}</td>
                      </>
                    )}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

SymbolCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number.isRequired,
      upgradeCost: PropTypes.number,
      totalCost: PropTypes.number,
      upgradeCount: PropTypes.number,
      totalCount: PropTypes.number,
    })
  ).isRequired,
  viewMode: PropTypes.oneOf(["cost", "count"]).isRequired,
  formatNumber: PropTypes.func.isRequired,
};
