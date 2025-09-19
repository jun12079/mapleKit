import CardLink from "../components/CardLink";
import genesisRitualFanIcon from "../assets/images/Genesis_Ritual_Fan_icon.png";
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
          <CardLink
            to="/calc/destiny-weapon"
            icon={destinyRitualFanIcon}
            title="命運武器進度"
            description="計算各階段所需決心、完成時間與週數"
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <CardLink
            to="/calc/genesis-weapon"
            icon={genesisRitualFanIcon}
            title="創世武器進度"
            description="計算各階段所需痕跡、完成時間與週數"
          />
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