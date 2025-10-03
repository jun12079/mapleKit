"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BossResetDialog from "@/components/calc/genesis-weapon/BossResetDialog";
import weeklyBossClearCountResetTicketIcon from "@/assets/images/Weekly_Boss_Clear_Count_Reset_Ticket_icon.png";
import monthlyBossClearCountResetTicketIcon from "@/assets/images/Monthly_Boss_Clear_Count_Reset_Ticket_icon.png";
import vonLeonIcon from "@/assets/images/boss/VonLeon_icon.png";
import arkariumIcon from "@/assets/images/boss/Arkarium_icon.png";
import magnusIcon from "@/assets/images/boss/Magnus_icon.png";
import lotusIcon from "@/assets/images/boss/Lotus_icon.png";
import damienIcon from "@/assets/images/boss/Damien_icon.png";
import willIcon from "@/assets/images/boss/Will_icon.png";
import lucidIcon from "@/assets/images/boss/Lucid_icon.png";
import verusHillaIcon from "@/assets/images/boss/VerusHilla_icon.png";
import gloomIcon from "@/assets/images/boss/Gloom_icon.png";
import darknellIcon from "@/assets/images/boss/Darknell_icon.png";
import blackMageIcon from "@/assets/images/boss/BlackMage_icon.png";

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
  const [startDate, setStartDate] = useState(new Date("2025-10-02"));
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [startEnergy, setStartEnergy] = useState(0);
  const [isBossResetDialogOpen, setIsBossResetDialogOpen] = useState(false);
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

  const updateBossConfig = (boss, field, value) => {
    if (field === 'difficulty') {
      const testConfig = { ...bossConfig };
      testConfig[boss] = { ...testConfig[boss], [field]: value };
    }

    const newConfig = { ...bossConfig };
    newConfig[boss] = { ...newConfig[boss], [field]: value };
    setBossConfig(newConfig);
  };

  const handleOpenBossResetDialog = () => {
    setIsBossResetDialogOpen(true);
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">創世武器進度計算器</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 角色狀態 */}
        <Card>
          <CardHeader>
            <CardTitle>角色狀態</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 開始日期 */}
            <div>
              <Label htmlFor="startDate" className="block text-sm font-bold mb-2">
                開始日期
              </Label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="startDate"
                    className="w-full justify-between font-normal text-left"
                  >
                    {startDate ? startDate.toLocaleDateString('zh-TW') : "選擇日期"}
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setStartDate(date || new Date());
                      setCalendarOpen(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* 目前痕跡 */}
            <div>
              <Label htmlFor="startEnergy" className="block text-sm font-bold mb-2">
                目前痕跡
              </Label>
              <Input
                type="number"
                id="startEnergy"
                value={startEnergy}
                min="0"
                max="6500"
                onChange={(e) => setStartEnergy(Number(e.target.value))}
                placeholder="輸入目前痕跡數值 (0-6500)"
              />
            </div>
            <Button
              variant="outline"
              className="rounded-full px-3 py-2 mb-2 shadow-sm"
              onClick={handleOpenBossResetDialog}
            >
              <div className="flex items-center">
                <span className="mr-1">使用</span>
                <div className="relative w-8 h-7">
                  {/* 左圖：左下 → 左上 → 右上 */}
                  <Image
                    src={weeklyBossClearCountResetTicketIcon}
                    alt="Weekly_Boss_Clear_Count_Reset_Ticket_icon"
                    className="w-full h-full object-cover absolute top-0 left-0"
                    style={{
                      clipPath: "polygon(0 100%, 0 0, 100% 0)", // 左下 → 左上 → 右上
                    }}
                  />
                  {/* 右圖：右上 → 右下 → 左下 */}
                  <Image
                    src={monthlyBossClearCountResetTicketIcon}
                    alt="Monthly_Boss_Clear_Count_Reset_Ticket_icon"
                    className="w-full h-full object-cover absolute top-0 left-0"
                    style={{
                      clipPath: "polygon(100% 0, 100% 100%, 0 100%)", // 右上 → 右下 → 左下
                    }}
                  />
                </div>
              </div>
            </Button>
            {/* BOSS選單 */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted dark:bg-muted">
                  <TableRow>
                    <TableHead className="text-center">選擇</TableHead>
                    <TableHead className="text-center">BOSS</TableHead>
                    <TableHead className="text-center">難度</TableHead>
                    <TableHead className="text-center">人數</TableHead>
                    <TableHead className="text-center">痕跡</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(bossConfig).map(([boss, { players, difficulty, origin, enabled, reset }], index) => (
                    <TableRow key={index}>
                      <TableCell className="py-2 px-2">
                        <div className="flex justify-center">
                          <Checkbox
                            id={boss}
                            checked={enabled}
                            onCheckedChange={(checked) => updateBossConfig(boss, 'enabled', checked)}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="py-2 px-2">
                        <div className="flex justify-center items-center gap-1">
                          <Image
                            src={bossIcon[origin]}
                            alt={origin}
                            className="w-8 h-auto flex-shrink-0"
                          />
                          {reset && boss !== "blackMage" && (
                            <>
                              <span>+</span>
                              <Image
                                src={weeklyBossClearCountResetTicketIcon}
                                alt="Weekly_Boss_Clear_Count_Reset_Ticket_icon"
                                className="w-8 h-auto flex-shrink-0"
                              />
                            </>
                          )}
                          {reset && boss === "blackMage" && (
                            <>
                              <span>+</span>
                              <Image
                                src={monthlyBossClearCountResetTicketIcon}
                                alt="Monthly_Boss_Clear_Count_Reset_Ticket_icon"
                                className="w-8 h-auto flex-shrink-0"
                              />
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="py-2 px-2">
                        <div className="flex justify-center">
                          <Select
                            value={difficulty}
                            onValueChange={(value) => updateBossConfig(boss, 'difficulty', value)}
                          >
                            <SelectTrigger className="h-8 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.keys(bossData[origin].difficulties).map((key) => (
                                <SelectItem key={key} value={key}>{bossData[origin].difficulties[key].name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                      <TableCell className="py-2 px-2">
                        <div className="flex justify-center">
                          <Select
                            value={players.toString()}
                            onValueChange={(value) => updateBossConfig(boss, 'players', Number(value))}
                          >
                            <SelectTrigger className="h-8 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: bossData[origin].players }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>{i + 1}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                      <TableCell className="py-2 px-2">
                        <div className="flex justify-center">
                          <Badge
                            variant={enabled ? "default" : "secondary"}
                            className="text-xs font-mono min-w-[3rem] justify-center"
                          >
                            {calculateEnergy(bossData, origin, difficulty, players, reset, enabled)}
                          </Badge>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={5} className="text-center font-bold py-4 text-lg">
                      週痕跡：{weeklyTotal.toLocaleString()}
                      {monthlyTotal > 0 && (
                        <span className="ml-2">
                          + 月痕跡：{monthlyTotal.toLocaleString()}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* 進度預估 */}
        <Card className="relative">
          <CardHeader>
            <CardTitle>進度預估</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 進度列表 */}
            <ul className="space-y-0">
              {stageCumulative.map((stage, i) => {
                const isCompleted = startEnergy >= stageCumulative[i];
                const isActive = !isCompleted && (i === 0 || startEnergy >= stageCumulative[i - 1]);
                const { weeks, finishDate } = stageProgressData[i];

                return (
                  <li
                    key={i}
                    className={`flex items-center py-4 ${i < stageCumulative.length - 1 ? 'border-b border-border' : 'border-b border-border'} ${isCompleted ? 'completed' : ''}`}
                  >
                    {/* 圓形圖標區域 */}
                    <div className="flex-shrink-0 mr-4">
                      <div className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 shadow-lg relative ${isCompleted ? 'bg-green-500 scale-110 shadow-green-500/30' :
                        isActive ? 'bg-yellow-500 scale-105 shadow-yellow-500/30 animate-pulse-glow' :
                          'bg-slate-300 shadow-slate-300/30'}`}>
                        {isCompleted ? (
                          <div className="text-white text-sm font-bold">✓</div>
                        ) : (
                          <Image
                            src={stageBossIcon[Object.keys(stageBossIcon)[i]]}
                            alt={`Stage ${i + 1}`}
                            className="w-6 h-6 rounded-full object-contain"
                          />
                        )}
                      </div>
                    </div>

                    {/* 內容區域 */}
                    <div className="flex justify-between items-center w-full">
                      <div className="stage-info">
                        <div className="font-bold">第{i + 1}階段</div>
                        <div className="text-sm text-muted-foreground">
                          累積痕跡：{stage.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>完成日期：{finishDate}</div>
                        <div className="font-medium">
                          第 <span className="text-cyan-500 dark:text-cyan-400 font-bold">{weeks || 0}</span> 週
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* 進度條容器 */}
            <Card className="relative">
              <CardContent className="pt-6 pr-5 md:pt-6 md:pr-3">
                {/* 進度狀態文字 */}
                <div className="text-center font-medium">
                  目前進度：{
                    startEnergy >= stageCumulative[7] ? `解放完成 ${startEnergy.toLocaleString()}/${stageCumulative[7].toLocaleString()}` :
                      startEnergy >= stageCumulative[6] ? `第八階段 ${startEnergy.toLocaleString()}/${stageCumulative[7].toLocaleString()}` :
                        startEnergy >= stageCumulative[5] ? `第七階段 ${startEnergy.toLocaleString()}/${stageCumulative[6].toLocaleString()}` :
                          startEnergy >= stageCumulative[4] ? `第六階段 ${startEnergy.toLocaleString()}/${stageCumulative[5].toLocaleString()}` :
                            startEnergy >= stageCumulative[3] ? `第五階段 ${startEnergy.toLocaleString()}/${stageCumulative[4].toLocaleString()}` :
                              startEnergy >= stageCumulative[2] ? `第四階段 ${startEnergy.toLocaleString()}/${stageCumulative[3].toLocaleString()}` :
                                startEnergy >= stageCumulative[1] ? `第三階段 ${startEnergy.toLocaleString()}/${stageCumulative[2].toLocaleString()}` :
                                  startEnergy >= stageCumulative[0] ? `第二階段 ${startEnergy.toLocaleString()}/${stageCumulative[1].toLocaleString()}` :
                                    `第一階段 ${startEnergy.toLocaleString()}/${stageCumulative[0].toLocaleString()}`
                  } ({percentage}%)
                </div>

                {/* 統計卡片 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  <Card>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold mb-1">
                        {startEnergy.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground font-normal">目前痕跡</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold mb-1">
                        {weeklyTotal.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground font-normal">週王痕跡</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold mb-1">
                        {monthlyTotal.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground font-normal">月王痕跡</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold mb-1">
                        {startEnergy >= 6500 ? 0 : stageProgressData[7]?.weeks || 0}
                      </div>
                      <div className="text-sm text-muted-foreground font-normal">剩餘週數</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>

              {/* 特殊狀態覆蓋層 */}
              {startEnergy >= 6500 && (
                <div className="absolute inset-0 bg-green-100/30 dark:bg-green-400/30 backdrop-blur-md rounded-xl flex items-center justify-center z-20">
                  <h3 className="text-2xl text-green-500 dark:text-green-400 font-bold">已解放！</h3>
                </div>
              )}

              {weeklyTotal === 0 && monthlyTotal === 0 && startEnergy < 6500 && (
                <div className="absolute inset-0 bg-yellow-100/30 dark:bg-yellow-400/30 backdrop-blur-md rounded-xl flex items-center justify-center z-20">
                  <h3 className="text-2xl text-yellow-500 dark:text-yellow-400 font-bold">去課金！</h3>
                </div>
              )}
            </Card>
          </CardContent>
        </Card>
      </div>

      <BossResetDialog
        bossConfig={bossConfig}
        setBossConfig={setBossConfig}
        isOpen={isBossResetDialogOpen}
        onOpenChange={setIsBossResetDialogOpen}
      />
    </div>
  );
}