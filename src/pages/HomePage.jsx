import { Link } from "react-router-dom";
import destinyRitualFanIcon from "../assets/images/Destiny_Ritual_Fan_icon.png";

export default function Homepage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 fw-bold mb-4">MapleKit</h1>
        </div>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-md-6 col-lg-4">
          <Link to="/destiny-weapon" className="text-decoration-none">
            <div className="card border-0 shadow hover-lift">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-2">
                  <img src={destinyRitualFanIcon} alt="Destiny_Ritual_Fan_icon"
                    style={{ width: "32px", height: "32px", marginRight: "8px" }} />
                  <p className="h5 fw-bold mb-1" style={{ marginBottom: 0 }}>命運武器進度</p>
                </div>
                <p className="mb-0 text-muted">計算各階段所需能量、完成時間與週數</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="mt-4 text-center">
            <p className="text-muted small">
              <strong>免責聲明：</strong>本工具僅供參考，計算結果可能因遊戲內部調整而有所變動。<br />
              使用者需自行承擔使用本工具所產生的風險。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}