import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    id: "collapse1",
    question: "MapleKit 是什麼？",
    answer: "MapleKit 是一個給新楓之谷玩家使用的工具網站，提供遊戲相關的計算工具，讓玩家能輕鬆掌握角色的遊戲進度。"
  },
  {
    id: "collapse2",
    question: "為什麼會做 MapleKit?",
    answer: "興趣使然。"
  },
  {
    id: "collapse3",
    question: "為什麼只有命運武器進度工具？",
    answer: "最初是為了給台版即將開放的命運武器而製作的，之後有想到什麼功能會再陸續加入。"
  },
  {
    id: "collapse4",
    question: "如何回報網站問題或建議？",
    answer: (
      <span>
        如果發現網站有任何問題，歡迎透過{' '}
        <a 
          href="https://forms.gle/TfA1kbPJmsorU9wv6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary fw-semibold"
          style={{ textDecoration: 'underline' }}
        >
          回報表單
        </a>{' '}
        提供建議。
      </span>
    )
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set(["collapse1"])); // 預設第一個開啟

  const toggleItem = (itemId) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          {/* FAQ 標題 */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark mb-2">常見問題</h2>
          </div>

          {faqData.map((item, index) => {
            const isOpen = openItems.has(item.id);
            return (
              <div key={item.id} className="accordion shadow-sm rounded-3 overflow-hidden mb-3" id={`accordion-${index}`}>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${!isOpen ? 'collapsed' : ''} bg-white text-dark fw-semibold shadow-none py-4 px-4`}
                      type="button"
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className="flex-grow-1 text-start pe-3">{item.question}</span>
                      <span className="d-flex align-items-center justify-content-center">
                        {isOpen ? (
                          <Minus
                            size={24}
                            className="text-primary"
                          />
                        ) : (
                          <Plus
                            size={24}
                            className="text-primary"
                          />
                        )}
                      </span>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse ${isOpen ? 'show' : ''}`}
                    style={{
                      transition: 'all 0.3s ease-in-out',
                      maxHeight: isOpen ? '200px' : '0',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="accordion-body bg-light px-4 py-4 border-top border-light">
                      <div className="mb-0 text-dark-emphasis lh-lg">{item.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}