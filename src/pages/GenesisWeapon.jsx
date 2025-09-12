import { useState } from "react";
import weeklyBossClearCountResetTicketIcon from "../assets/images/Weekly_Boss_Clear_Count_Reset_Ticket_icon.png";
import monthlyBossClearCountResetTicketIcon from "../assets/images/Monthly_Boss_Clear_Count_Reset_Ticket_icon.png";
import vonLeonIcon from "../assets/images/boss/VonLeon_icon.png";
import arkariumIcon from "../assets/images/boss/Arkarium_icon.png";
import magnusIcon from "../assets/images/boss/Magnus_icon.png";
import lotusIcon from "../assets/images/boss/Lotus_icon.png";
import damienIcon from "../assets/images/boss/Damien_icon.png";
import willIcon from "../assets/images/boss/Will_icon.png";
import lucidIcon from "../assets/images/boss/Lucid_icon.png";
import verusHillaIcon from "../assets/images/boss/VerusHilla_icon.png";
import gloomIcon from "../assets/images/boss/Gloom_icon.png";
import darknellIcon from "../assets/images/boss/Darknell_icon.png";
import blackMageIcon from "../assets/images/boss/BlackMage_icon.png";
import BossResetModal from "../components/BossResetModal";

const bossData = {
  lotus: {
    name: '史烏',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 10 },
      hard: { name: '困難', energy: 50 },
      extreme: { name: '極限', energy: 50 }
    }
  },
  damien: {
    name: '戴米安',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 10 },
      hard: { name: '困難', energy: 50 },
    }
  },
  lucid: {
    name: '露希妲',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 20 },
      hard: { name: '困難', energy: 65 },
    }
  },
  will: {
    name: '威爾',
    players: 6,
    difficulties: {
      easy: { name: '簡單', energy: 15 },
      normal: { name: '普通', energy: 25 },
      hard: { name: '困難', energy: 75 }
    }
  },
  gloom: {
    name: '戴斯克',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 20 },
      hard: { name: '困難', energy: 65 }
    }
  },
  darknell: {
    name: '頓凱爾',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 25 },
      hard: { name: '困難', energy: 75 }
    }
  },
  verusHilla: {
    name: '真希拉',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 45 },
      hard: { name: '困難', energy: 90 }
    }
  },
  blackMage: {
    name: '黑魔法師',
    players: 6,
    difficulties: {
      hard: { name: '困難', energy: 600 },
      extreme: { name: '極限', energy: 600 }
    }
  }
};

const stageBossData = {
  vonLeon: 500,
  arkarium: 500,
  magnus: 500,
  lotus: 1000,
  damien: 1000,
  lucid: 1000,
  will: 1000,
  verusHilla: 1000,
}

const bossIcon = {
  lotus: lotusIcon,
  damien: damienIcon,
  lucid: lucidIcon,
  will: willIcon,
  gloom: gloomIcon,
  darknell: darknellIcon,
  verusHilla: verusHillaIcon,
  blackMage: blackMageIcon
};

const stageBossIcon = {
  vonLeon: vonLeonIcon,
  arkarium: arkariumIcon,
  magnus: magnusIcon,
  lotus: lotusIcon,
  damien: damienIcon,
  lucid: lucidIcon,
  will: willIcon,
  verusHilla: verusHillaIcon,
};

const stageCumulative = [500, 1000, 1500, 2500, 3500, 4500, 5500, 6500];

export default function GenesisWeapon() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [startEnergy, setStartEnergy] = useState(0);
  const [bossConfig, setBossConfig] = useState({
    lotus: { players: 1, difficulty: "extreme", origin: "lotus", enabled: true, reset: false },
    damien: { players: 1, difficulty: "hard", origin: "damien", enabled: true, reset: false },
    lucid: { players: 1, difficulty: "hard", origin: "lucid", enabled: true, reset: false },
    will: { players: 1, difficulty: "hard", origin: "will", enabled: true, reset: false },
    gloom: { players: 1, difficulty: "hard", origin: "gloom", enabled: true, reset: false },
    darknell: { players: 1, difficulty: "hard", origin: "darknell", enabled: true, reset: false },
    verusHilla: { players: 1, difficulty: "hard", origin: "verusHilla", enabled: true, reset: false },
    blackMage: { players: 1, difficulty: "hard", origin: "blackMage", enabled: true, reset: false }
  });
  const [isBossResetModalOpen, setIsBossResetModalOpen] = useState(false);

  const handleOpenBossResetModal = () => {
    setIsBossResetModalOpen(true);
  }

  const updateBossConfig = (boss, field, value) => {
    if (field === 'difficulty') {
      const testConfig = { ...bossConfig };
      testConfig[boss] = { ...testConfig[boss], [field]: value };
    }

    const newConfig = { ...bossConfig };
    newConfig[boss] = { ...newConfig[boss], [field]: value };
    setBossConfig(newConfig);
  };

  const calculateEnergy = (bossData, origin, difficulty, players, reset, enabled) => {
    if (!enabled) return 0;
    const baseEnergy = bossData[origin].difficulties[difficulty].energy;
    const totalEnergy = reset ? baseEnergy * 2 : baseEnergy;
    return Math.round(totalEnergy / players);
  };

  const calculateWeeklyAndMonthlyEnergy = () => {
    let weeklyTotal = 0;
    let monthlyTotal = 0;

    Object.values(bossConfig).forEach(config => {
      if (!config.enabled) return;

      const perEnergy = calculateEnergy(
        bossData,
        config.origin,
        config.difficulty,
        config.players,
        config.reset,
        config.enabled
      );

      if (config.origin === 'blackMage') {
        monthlyTotal += perEnergy;
      } else {
        weeklyTotal += perEnergy;
      }
    });

    return { weeklyTotal, monthlyTotal };
  };

  // 判斷兩個日期是否在同一個月
  const isSameMonth = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth();
  };

  const calculateStageProgress = (weeklyEnergy, monthlyEnergy, startEnergy, startDate) => {
    return stageCumulative.map(targetEnergy => {
      if (startEnergy >= targetEnergy) {
        return {
          weeks: 0,
          finishDate: '已完成'
        };
      }

      if (weeklyEnergy === 0 && monthlyEnergy === 0) {
        return {
          weeks: 0,
          finishDate: '--'
        };
      }

      let currentEnergy = startEnergy;
      let currentDate = new Date(startDate);
      let weeks = 0;
      let isFirstWeek = true;

      while (currentEnergy < targetEnergy) {
        weeks++;

        // 每週都可以獲得週度痕跡
        let weekEnergy = weeklyEnergy;

        // 判斷是否可以獲得月度痕跡
        if (isFirstWeek || !isSameMonth(currentDate, new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000))) {
          weekEnergy += monthlyEnergy;
        }

        currentEnergy += weekEnergy;
        currentDate.setDate(currentDate.getDate() + 7);
        isFirstWeek = false;
      }

      return {
        weeks: weeks,
        finishDate: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('zh-TW')
      };
    });
  }

  const { weeklyTotal, monthlyTotal } = calculateWeeklyAndMonthlyEnergy();
  const stageProgressData = calculateStageProgress(weeklyTotal, monthlyTotal, startEnergy, startDate);
  const percentage = Math.min((startEnergy / stageCumulative[7]) * 100, 100).toFixed(1);

  return (
    <>
      <div className="container">
        <h1 className="page-title my-3 text-center">創世武器進度計算器</h1>

        <div className="row">
          {/* 角色狀態 */}
          <div className="col-lg-6">
            <div className="card-clean shadow-sm mb-4">
              <div className="card-header-clean">
                <h5 className="card-title-clean fw-bold m-0">角色狀態</h5>
              </div>
              <div className="card-body-clean">
                {/* 開始日期 */}
                <div className="form-group mb-2">
                  <label htmlFor="startDate" className="form-label fw-bold mb-2">開始日期</label>
                  <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                {/* 目前痕跡 */}
                <div className="form-group mb-2">
                  <label htmlFor="startEnergy" className="form-label fw-bold mb-2">目前痕跡</label>
                  <input type="number" className="form-control" id="startEnergy" value={startEnergy} min="0" max="6500" onChange={(e) => setStartEnergy(Number(e.target.value))} />
                </div>
                <div
                  className="btn btn-outline-primary border-0 rounded-pill px-3 py-2 mb-2 shadow-sm"
                  onClick={handleOpenBossResetModal}
                >
                  <div className="d-flex align-items-center">
                    <span className="me-1">使用</span>
                    <div style={{ position: "relative", width: "33px", height: "27px" }}>
                      {/* 左圖：左下 → 左上 → 右上 */}
                      <img
                        src={weeklyBossClearCountResetTicketIcon}
                        alt="Weekly_Boss_Clear_Count_Reset_Ticket_icon"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          clipPath: "polygon(0 100%, 0 0, 100% 0)", // 左下 → 左上 → 右上
                          cursor: "pointer",
                        }}
                      />
                      {/* 右圖：右上 → 右下 → 左下 */}
                      <img
                        src={monthlyBossClearCountResetTicketIcon}
                        alt="Monthly_Boss_Clear_Count_Reset_Ticket_icon"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          clipPath: "polygon(100% 0, 100% 100%, 0 100%)", // 右上 → 右下 → 左下
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* BOSS選單 */}
                <form id="bossForm">
                  <div className="table-scroll">
                    <table className="boss-table">
                      <thead>
                        <tr>
                          <th className="col-md-2">選擇</th>
                          <th className="col-md-2">BOSS</th>
                          <th className="col-md-2">難度</th>
                          <th className="col-md-2">人數</th>
                          <th className="col-md-2">痕跡</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Object.entries(bossConfig).map(([boss, { players, difficulty, origin, enabled, reset }], index) => {
                            return (
                              <tr className="boss-row" data-boss={boss} key={index}>
                                <td>
                                  <div className="form-check d-flex justify-content-center">
                                    <input
                                      className="form-check-input boss-checkbox"
                                      type="checkbox"
                                      id={boss}
                                      checked={enabled}
                                      onChange={(e) => updateBossConfig(boss, 'enabled', e.target.checked)}
                                    />
                                    <label className="form-check-label visually-hidden" htmlFor={boss}></label>
                                  </div>
                                </td>
                                <td>
                                  <img src={bossIcon[origin]} alt={origin} />
                                  {(reset && boss !== "blackMage") ? (
                                    <>
                                      <span>+</span>
                                      <img src={weeklyBossClearCountResetTicketIcon} alt="Weekly_Boss_Clear_Count_Reset_Ticket_icon" />
                                    </>
                                  ) : (reset && boss === "blackMage") ? (
                                    <>
                                      <span>+</span>
                                      <img src={monthlyBossClearCountResetTicketIcon} alt="Monthly_Boss_Clear_Count_Reset_Ticket_icon" />
                                    </>
                                  ) : null}
                                </td>
                                <td>
                                  <select className="form-select form-select-sm difficulty-select" value={difficulty} onChange={(e) => updateBossConfig(boss, 'difficulty', e.target.value)}>
                                    {Object.keys(bossData[origin].difficulties).map((key) => (
                                      <option key={key} value={key}>{bossData[origin].difficulties[key].name}</option>
                                    ))}
                                  </select>
                                </td>
                                <td>
                                  <select className="form-select form-select-sm player-select" value={players} onChange={(e) => updateBossConfig(boss, 'players', Number(e.target.value))}>
                                    {Array.from({ length: bossData[origin].players }, (_, i) => (
                                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                  </select>
                                </td>
                                <td><span className="energy-badge energy-display">
                                  {calculateEnergy(bossData, origin, difficulty, players, reset, enabled)}
                                </span></td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </form>
                {/* 每週 + 每月痕跡 */}
                <div className="total-energy">
                  每週痕跡：{weeklyTotal.toLocaleString()}
                  {monthlyTotal > 0 && (
                    <span className="ms-2">
                      + 每月：{monthlyTotal.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 進度預估 */}
          <div className="col-lg-6">
            <div className="card-clean shadow-sm mb-4">
              <div className="card-header-clean">
                <h5 className="card-title-clean fw-bold m-0">進度預估</h5>
              </div>
              <div className="card-body-clean">
                {/* 進度列表 */}
                <ul className="stage-list">
                  {
                    stageCumulative.map((stage, i) => {
                      const isCompleted = startEnergy >= stageCumulative[i];
                      const isActive = !isCompleted && (i === 0 || startEnergy >= stageCumulative[i - 1]);
                      const { weeks, finishDate } = stageProgressData[i];

                      return (
                        <li
                          key={i}
                          className={`stage-item d-flex align-items-center ${isCompleted ? 'completed' : ''}`}
                        >
                          <div className="flex-shrink-0 me-2">
                            <div className={`stage-circle ${isCompleted ? 'completed' : isActive ? 'active' : ''}`} id={`stage${i + 1}Circle`}>
                              <img src={stageBossIcon[Object.keys(stageBossData)[i]]} alt={`Stage ${i + 1}`} />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center w-100">
                            <div className="stage-info">
                              <div className="stage-title fw-bold">第{i + 1}階段</div>
                              <div className="stage-requirement">累積痕跡：{stage}</div>
                            </div>
                            <div className="stage-right text-primary text-end">
                              <div>完成日期：{finishDate}</div>
                              <div>第 <span className="text-info fw-bold">{weeks || 0}</span> 週</div>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>

                {/* 進度條 */}
                <div className="progress-container">

                  {/* 進度狀態 */}
                  <div className="genesis-progress-text" id="progressText">
                    目前進度：{
                      startEnergy >= stageCumulative[7] ? `解放完成 ${startEnergy}/${stageCumulative[7]}` :
                        startEnergy >= stageCumulative[6] ? `第八階段 ${startEnergy}/${stageCumulative[7]}` :
                          startEnergy >= stageCumulative[5] ? `第七階段 ${startEnergy}/${stageCumulative[6]}` :
                            startEnergy >= stageCumulative[4] ? `第六階段 ${startEnergy}/${stageCumulative[5]}` :
                              startEnergy >= stageCumulative[3] ? `第五階段 ${startEnergy}/${stageCumulative[4]}` :
                                startEnergy >= stageCumulative[2] ? `第四階段 ${startEnergy}/${stageCumulative[3]}` :
                                  startEnergy >= stageCumulative[1] ? `第三階段 ${startEnergy}/${stageCumulative[2]}` :
                                    startEnergy >= stageCumulative[0] ? `第二階段 ${startEnergy}/${stageCumulative[1]}` :
                                      `第一階段 ${startEnergy}/${stageCumulative[0]}`
                    } ({percentage}%)
                  </div>

                  {/* 統計 */}
                  <div className="row g-3 mt-4">
                    <div className="col-6 col-md-3">
                      <div className="stat-card">
                        <div className="stat-value">{startEnergy.toLocaleString()}</div>
                        <div className="stat-label">目前痕跡</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="stat-card">
                        <div className="stat-value">{weeklyTotal.toLocaleString()}</div>
                        <div className="stat-label">週王痕跡</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="stat-card">
                        <div className="stat-value">{monthlyTotal.toLocaleString()}</div>
                        <div className="stat-label">月王痕跡</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="stat-card">
                        <div className="stat-value">{startEnergy >= 6500 ? 0 : stageProgressData[7]?.weeks || 0}</div>
                        <div className="stat-label">剩餘週數</div>
                      </div>
                    </div>
                  </div>

                  {/* 特殊狀態覆蓋層 */}
                  {startEnergy >= 6500 && (
                    <div
                      id="unlockedOverlay"
                      className="d-flex align-items-center justify-content-center flex-column position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: "rgba(16, 185, 129, 0.1)",
                        borderRadius: 16,
                        zIndex: 20,
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <h3 className="text-success fw-bold">已解放！</h3>
                    </div>
                  )}

                  {weeklyTotal === 0 && monthlyTotal === 0 && startEnergy < 6500 && (
                    <div
                      id="noBossOverlay"
                      className="d-flex align-items-center justify-content-center flex-column position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: "rgba(245, 158, 11, 0.1)",
                        borderRadius: 16,
                        zIndex: 20,
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <h3 className="text-warning fw-bold">去課金！</h3>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
      <BossResetModal bossConfig={bossConfig} setBossConfig={setBossConfig} bossData={bossData} isBossResetModalOpen={isBossResetModalOpen} setIsBossResetModalOpen={setIsBossResetModalOpen} />
    </>
  );
}