import { useState } from "react";
import weeklyBossClearCountResetTicketIcon from "../assets/images/Weekly_Boss_Clear_Count_Reset_Ticket_icon.png";
import serenIcon from "../assets/images/boss/Seren_icon.png";
import kalosIcon from "../assets/images/boss/Kalos_icon.png";
import kalingIcon from "../assets/images/boss/Kaling_icon.png";
import limboIcon from "../assets/images/boss/Limbo_icon.png";
import baldrixIcon from "../assets/images/boss/Baldrix_icon.png";

const bossData = {
  seren: {
    name: '賽連',
    players: 6,
    difficulties: {
      hard: { name: '困難', energy: 6 },
      extreme: { name: '極限', energy: 80 }
    }
  },
  kalos: {
    name: '卡洛斯',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 10 },
      hard: { name: '困難', energy: 70 },
      extreme: { name: '極限', energy: 400 }
    }
  },
  kaling: {
    name: '卡凌',
    players: 6,
    difficulties: {
      normal: { name: '普通', energy: 20 },
      hard: { name: '困難', energy: 160 },
      extreme: { name: '極限', energy: 1200 }
    }
  },
  limbo: {
    name: '林波',
    players: 3,
    difficulties: {
      normal: { name: '普通', energy: 120 },
      hard: { name: '困難', energy: 360 }
    }
  },
  baldrix: {
    name: '巴德利斯',
    players: 3,
    difficulties: {
      normal: { name: '普通', energy: 150 },
      hard: { name: '困難', energy: 450 }
    }
  }
};

const bossIcon = {
  seren: serenIcon,
  serenReset: serenIcon,
  kalos: kalosIcon,
  kalosReset: kalosIcon,
  kaling: kalingIcon,
  limbo: limboIcon,
  baldrix: baldrixIcon
};

const stageEnergy = [2000, 2500, 3000];
const stageCumulative = [2000, 4500, 7500];

export default function Calculator() {
  const [startDate, setStartDate] = useState("2025-10-02");
  const [startEnergy, setStartEnergy] = useState(0);
  const [bossConfig, setBossConfig] = useState({
    seren: { players: 1, difficulty: "hard", origin: "seren", enabled: true },
    serenReset: { players: 1, difficulty: "hard", origin: "seren", enabled: true },
    kalos: { players: 1, difficulty: "normal", origin: "kalos", enabled: true },
    kalosReset: { players: 1, difficulty: "normal", origin: "kalos", enabled: true },
    kaling: { players: 1, difficulty: "normal", origin: "kaling", enabled: true },
    limbo: { players: 1, difficulty: "normal", origin: "limbo", enabled: true },
    baldrix: { players: 1, difficulty: "normal", origin: "baldrix", enabled: true },
  });

  const updateBossConfig = (boss, field, value) => {
    if (field === 'difficulty') {
      const testConfig = { ...bossConfig };
      testConfig[boss] = { ...testConfig[boss], [field]: value };

      if ((testConfig[boss].origin === 'seren' || testConfig[boss].origin === 'kalos') && !checkRules(testConfig[boss].origin, testConfig)) {
        alert(`${bossData[testConfig[boss].origin].name} 無法選擇兩場極限`);
        return;
      }
    }

    const newConfig = { ...bossConfig };
    newConfig[boss] = { ...newConfig[boss], [field]: value };
    setBossConfig(newConfig);
  };

  const calculateTotalWeekEnergy = () => {
    const total = Object.values(bossConfig).reduce((acc, config) => {
      if (!config.enabled) return acc;
      const perEnergy = Math.round(bossData[config.origin].difficulties[config.difficulty].energy / config.players);
      return acc + perEnergy;
    }, 0);
    return total;
  };

  const checkRules = (boss, testConfig) => {
    const rows = Object.values(testConfig).filter(row => row.origin === boss && row.enabled);
    const diffs = rows.map(row => row.difficulty);
    if ((boss === 'seren' || boss === 'kalos') && diffs.filter(d => d === 'extreme').length > 1) {
      return false;
    }
    return true;
  };

  function calculateStageWeeks(totalWeekEnergy, startEnergy) {
    let stageWeeks = [];

    stageEnergy.forEach((req, index) => {
      const cumulativeNeeded = stageCumulative[index];
      let weeks;
      if (totalWeekEnergy === 0) {
        weeks = 0;
      } else if (startEnergy >= cumulativeNeeded) {
        weeks = 0; // 已完成
      } else {
        weeks = Math.ceil((cumulativeNeeded - startEnergy) / totalWeekEnergy);
      }
      stageWeeks.push(weeks);
    });
    return stageWeeks;
  }


  const totalWeekEnergy = calculateTotalWeekEnergy();
  const stageWeeks = calculateStageWeeks(totalWeekEnergy, startEnergy);
  const percentage = Math.min((startEnergy / stageCumulative[2]) * 100, 100).toFixed(1);

  return (
    <>
      <div className="container">
        <h1 className="page-title my-3 text-center">命運武器進度計算器</h1>

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
                {/* 目前決心 */}
                <div className="form-group mb-2">
                  <label htmlFor="startEnergy" className="form-label fw-bold mb-2">目前決心</label>
                  <input type="number" className="form-control" id="startEnergy" value={startEnergy} min="0" max="7500" onChange={(e) => setStartEnergy(Number(e.target.value))} />
                </div>
                {/* BOSS選單 */}
                <form id="bossForm">
                  <div className="table-scroll">
                    <table className="boss-table">
                      <thead>
                        <tr>
                          <th className="col-md-2">選擇</th>
                          <th className="col-md-3">BOSS</th>
                          <th className="col-md-2">難度</th>
                          <th className="col-md-2">人數</th>
                          <th className="col-md-3">決心</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Object.entries(bossConfig).map(([boss, { players, difficulty, origin, enabled }], index) => {
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
                                  {(boss === "serenReset" || boss === "kalosReset") && (
                                    <img
                                      src={weeklyBossClearCountResetTicketIcon}
                                      alt="Weekly_Boss_Clear_Count_Reset_Ticket_icon"
                                    />
                                  )}
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
                                  {enabled ? Math.round(bossData[origin].difficulties[difficulty].energy / players) : 0}
                                </span></td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </form>
                {/* 每週決心 */}
                <div className="total-energy">
                  每週總決心：{totalWeekEnergy.toLocaleString()}
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
                      const weeks = stageWeeks[i];
                      let finishDate = '--';

                      if (weeks > 0 && !isCompleted) {
                        const date = new Date(startDate);
                        date.setDate(date.getDate() + (weeks - 1) * 7);
                        finishDate = date.toLocaleDateString('zh-TW');
                      } else if (isCompleted) {
                        finishDate = '已完成';
                      }

                      return (
                        <li
                          key={i}
                          className={`stage-item d-flex justify-content-between align-items-center ${isCompleted ? 'completed' : ''}`}
                        >
                          <div className="stage-left">
                            <div className="stage-title fw-bold">第{i + 1}階段</div>
                            <div className="stage-requirement">累積決心：{stage} </div>
                          </div>
                          <div className="stage-right text-primary text-end">
                            <div>完成日期：{finishDate}</div>
                            <div>第 <span className="text-info fw-bold">{weeks || 0}</span> 週</div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>

                {/* 進度條 */}
                <div className="progress-container">
                  <div className="progress-wrapper">
                    <div className="progress-bar-custom" id="progressBar" style={{ width: `${percentage}%` }}></div>

                    {/* 階段 */}
                    {
                      stageCumulative.map((stage, i) => {
                        const isCompleted = startEnergy >= stageCumulative[i];
                        const isActive = !isCompleted && (i === 0 || startEnergy >= stageCumulative[i - 1]);
                        const weeks = stageWeeks[i];
                        let finishDate = '--';

                        if (weeks > 0 && !isCompleted) {
                          const date = new Date(startDate);
                          date.setDate(date.getDate() + (weeks - 1) * 7);
                          finishDate = date.toLocaleDateString('zh-TW');
                        } else if (isCompleted) {
                          finishDate = '已完成';
                        }

                        return (
                          <div className={`stage-marker stage-${i + 1}`} key={i} style={{ left: i !== 2 ? `${(stage / stageCumulative[2]) * 100}%` : '95%' }}>
                            <div className={`stage-circle ${isCompleted ? 'completed' : isActive ? 'active' : ''}`} id={`stage${i + 1}Circle`}>
                              <img src={bossIcon[Object.keys(bossData)[i]]} alt={`Stage ${i + 1}`} />
                            </div>
                            <div className={`stage-info ${isCompleted ? 'completed' : isActive ? 'active' : ''}`} id={`stage${i + 1}Info`}>
                              第{i + 1}階段<br />
                              {isCompleted ? <span className="fw-bold">已完成</span> :
                                weeks > 0 ? <span className="fw-bold">第{weeks}週<br />{finishDate}</span> : '--'}
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>

                  {/* 進度狀態 */}
                  <div className="progress-text" id="progressText">
                    目前進度：{
                      startEnergy >= stageCumulative[2] ? `解放完成 ${startEnergy}/${stageCumulative[2]}` :
                        startEnergy > stageCumulative[1] ? `第三階段 ${startEnergy}/${stageCumulative[1]}` :
                          startEnergy > stageCumulative[0] ? `第二階段 ${startEnergy}/${stageCumulative[0]}` :
                            `第一階段 ${startEnergy}/${stageCumulative[0]}`
                    } ({percentage}%)
                  </div>

                  {/* 統計 */}
                  <div className="progress-stats">
                    <div className="stat-card">
                      <div className="stat-value">{startEnergy.toLocaleString()}</div>
                      <div className="stat-label">目前決心</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{totalWeekEnergy.toLocaleString()}</div>
                      <div className="stat-label">每週決心</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">{startEnergy >= 7500 ? 0 : Math.ceil((stageCumulative[2] - startEnergy) / (totalWeekEnergy || 1))}</div>
                      <div className="stat-label">剩餘週數</div>
                    </div>
                  </div>

                  {/* 特殊狀態覆蓋層 */}
                  {startEnergy >= 7500 && (
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

                  {totalWeekEnergy === 0 && startEnergy < 7500 && (
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
    </>
  );
}