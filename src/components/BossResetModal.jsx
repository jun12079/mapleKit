import { useEffect, useRef, useState, useMemo } from 'react';
import { Modal } from 'bootstrap';
import PropTypes from 'prop-types';
import weeklyBossClearCountResetTicketIcon from "../assets/images/Weekly_Boss_Clear_Count_Reset_Ticket_icon.png";
import monthlyBossClearCountResetTicketIcon from "../assets/images/Monthly_Boss_Clear_Count_Reset_Ticket_icon.png";
import lotusIcon from "../assets/images/boss/Lotus_icon.png";
import damienIcon from "../assets/images/boss/Damien_icon.png";
import willIcon from "../assets/images/boss/Will_icon.png";
import lucidIcon from "../assets/images/boss/Lucid_icon.png";
import verusHillaIcon from "../assets/images/boss/VerusHilla_icon.png";
import gloomIcon from "../assets/images/boss/Gloom_icon.png";
import darknellIcon from "../assets/images/boss/Darknell_icon.png";
import blackMageIcon from "../assets/images/boss/BlackMage_icon.png";

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

// Boss中文名稱對應
const bossNames = {
  lotus: '史烏',
  damien: '戴米安',
  lucid: '露西妲',
  will: '威爾',
  gloom: '戴斯克',
  darknell: '頓凱爾',
  verusHilla: '真希拉',
  blackMage: '黑魔法師'
};

// 定義Boss類型跟上限
const WEEKLY_BOSSES = ['lotus', 'damien', 'lucid', 'will', 'gloom', 'darknell', 'verusHilla'];
const MONTHLY_BOSSES = ['blackMage'];
const MAX_WEEKLY_SELECTION = 3;
const MAX_MONTHLY_SELECTION = 1;

function BossResetModal({ bossConfig, setBossConfig, isBossResetModalOpen, setIsBossResetModalOpen }) {
  const bossResetModalRef = useRef(null);
  const modalInstanceRef = useRef(null);
  const [selectedBosses, setSelectedBosses] = useState([]);

  // 從bossConfig取得所有boss
  const allBosses = useMemo(() => {
    return Object.entries(bossConfig).map(([boss, config]) => ({
      id: boss,
      origin: config.origin,
      name: bossNames[config.origin]
    }));
  }, [bossConfig]);

  // 計算目前選擇的週、月王數量
  const selectionCounts = useMemo(() => {
    const weeklyCount = selectedBosses.filter(bossId => {
      const boss = allBosses.find(b => b.id === bossId);
      return boss && WEEKLY_BOSSES.includes(boss.origin);
    }).length;

    const monthlyCount = selectedBosses.filter(bossId => {
      const boss = allBosses.find(b => b.id === bossId);
      return boss && MONTHLY_BOSSES.includes(boss.origin);
    }).length;

    return { weekly: weeklyCount, monthly: monthlyCount };
  }, [selectedBosses, allBosses]);

  // 初始化 Modal 實例
  useEffect(() => {
    const modalElement = bossResetModalRef.current;
    if (modalElement && !modalInstanceRef.current) {
      modalInstanceRef.current = new Modal(modalElement, { backdrop: 'static' });

      // 監聽所有關閉事件（包括 ESC、backdrop click 等）
      modalElement.addEventListener('hidden.bs.modal', () => {
        // 統一更新狀態
        setIsBossResetModalOpen(false);
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      });
    }

    // 清理函數
    return () => {
      if (modalInstanceRef.current) {
        modalInstanceRef.current.dispose();
        modalInstanceRef.current = null;
      }
    };
  }, [setIsBossResetModalOpen]);

  // 控制 Modal 顯示/隱藏
  useEffect(() => {
    if (modalInstanceRef.current) {
      if (isBossResetModalOpen) {
        modalInstanceRef.current.show();
      } else {
        modalInstanceRef.current.hide();
      }
    }
  }, [isBossResetModalOpen]);

  const handleBossToggle = (bossId) => {
    const isCurrentlySelected = selectedBosses.includes(bossId);

    if (isCurrentlySelected) {
      setSelectedBosses(prev => prev.filter(id => id !== bossId));
    } else {
      setSelectedBosses(prev => [...prev, bossId]);
    }
  };

  const handleCloseBossResetModal = () => {
    if (modalInstanceRef.current) {
      modalInstanceRef.current.hide();
    }
  };

  const handleBossReset = () => {
    // 更新boss配置
    const updatedConfig = { ...bossConfig };
    Object.keys(updatedConfig).forEach(boss => {
      updatedConfig[boss] = {
        ...updatedConfig[boss],
        reset: selectedBosses.includes(boss)
      };
    });

    setBossConfig(updatedConfig);
    handleCloseBossResetModal();
  };

  const isCheckboxDisabled = (bossId) => {
    const boss = allBosses.find(b => b.id === bossId);
    const isSelected = selectedBosses.includes(bossId);

    if (isSelected) return false; // 已選中的不禁用

    const isWeeklyBoss = WEEKLY_BOSSES.includes(boss.origin);
    const isMonthlyBoss = MONTHLY_BOSSES.includes(boss.origin);

    if (isWeeklyBoss && selectionCounts.weekly >= MAX_WEEKLY_SELECTION) return true;
    if (isMonthlyBoss && selectionCounts.monthly >= MAX_MONTHLY_SELECTION) return true;

    return false;
  };

  return (
    <div ref={bossResetModalRef} className="modal fade" id="bossResetModal" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h1 className="modal-title fs-5">選擇 Boss 重置</h1> */}
            <div className="ms-3 me-3 d-flex gap-2">
              <img src={weeklyBossClearCountResetTicketIcon} alt="Weekly Boss Clear Count Reset Ticket" />
              <span className="text-primary">{selectionCounts.weekly} / 3</span>
              <img src={monthlyBossClearCountResetTicketIcon} alt="Monthly Boss Clear Count Reset Ticket" />
              <span className="text-primary">{selectionCounts.monthly} / 1</span>
            </div>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseBossResetModal}></button>
          </div>

          <div className="modal-body">
            {/* Boss選擇區域 */}
            <div className="row g-3">
              {allBosses.map((boss) => {
                const isSelected = selectedBosses.includes(boss.id);
                const isDisabled = isCheckboxDisabled(boss.id);

                return (
                  <div key={boss.id} className="col-md-6 col-12">
                    <div
                      className={`card h-100 ${isSelected ? 'border-success bg-success bg-opacity-10' : ''} ${isDisabled ? 'bg-light opacity-50' : ''}`}
                      style={{
                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onClick={() => !isDisabled && handleBossToggle(boss.id)}
                    >
                      <div className="card-body d-flex align-items-center p-3">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={boss.id}
                            checked={isSelected}
                            disabled={isDisabled}
                            onChange={() => { }} // 由onClick處理
                          />
                        </div>

                        <img
                          src={bossIcon[boss.origin]}
                          alt={bossNames[boss.origin]}
                          className="me-3"
                          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                        />
                        <h6 className="card-title mb-0">{boss.name}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleBossReset}
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

BossResetModal.propTypes = {
  bossConfig: PropTypes.object.isRequired,
  setBossConfig: PropTypes.func.isRequired,
  isBossResetModalOpen: PropTypes.bool.isRequired,
  setIsBossResetModalOpen: PropTypes.func.isRequired
}

export default BossResetModal;