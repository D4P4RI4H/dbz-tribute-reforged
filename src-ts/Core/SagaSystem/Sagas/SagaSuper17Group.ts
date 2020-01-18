import { AdvancedSaga } from "./AdvancedSaga";
import { Saga } from "./BaseSaga";
import { SagaHelper } from "../SagaHelper";
import { Constants } from "Common/Constants";

export class Super17Saga extends AdvancedSaga implements Saga {
  name: string = '[DBGT] Super 17 Saga';

  protected super17: unit | undefined;
  protected oldHp: number;

  constructor() {
    super();
    this.oldHp = 0;
    this.sagaDelay = 15;
  }

  spawnSagaUnits(): void {
    super.spawnSagaUnits();
    SagaHelper.showMessagesChanceOfJoke(
      [
        "Dr. Gero and Dr. Myuu have combined forces to create Super Android 17"
      ],
    );

    this.addHeroListToSaga(["Super 17"], true);
    this.super17 = this.bosses.get("Super 17");
    if (this.super17) {
      this.oldHp = GetUnitState(this.super17, UNIT_STATE_LIFE);
      SetUnitState(this.super17, UNIT_STATE_MANA, 0);
    }

    for (const [name, boss] of this.bosses) {
      SetUnitAcquireRange(boss, Constants.sagaMaxAcquisitionRange);
    }

    this.ping();
    this.addActionRewardStats(this);
  }

  update(t: number): void {
    super.update(t);
    if (
      this.super17
    ) {
      const newHp = GetUnitState(this.super17, UNIT_STATE_LIFE);
      const hpDiff = this.oldHp - newHp;
      let newMp = GetUnitState(this.super17, UNIT_STATE_MANA);
      // had more hp in before
      if (hpDiff > 0) {
        newMp += hpDiff;
      }

      if (newMp < 0.99 * GetUnitState(this.super17, UNIT_STATE_MAX_MANA)) {
        SetUnitState(
          this.super17, 
          UNIT_STATE_MANA, 
          newMp,
        );
      } else {
        // restore hp equal to 50% of mana pool
        SetUnitState(
          this.super17,
          UNIT_STATE_LIFE,
          newHp + newMp * 0.5
        );
        SetUnitState(this.super17, UNIT_STATE_MANA, 0);
        DestroyEffect(
          AddSpecialEffectTarget(
            "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl",
            this.super17, 
            "origin", 
          )
        );
        DestroyEffect(
          AddSpecialEffectTarget(
            "Abilities\\Spells\\Items\\AIem\\AIemTarget.mdl",
            this.super17, 
            "origin", 
          )
        );
      }
      this.oldHp = GetUnitState(this.super17, UNIT_STATE_LIFE);
    }
  }

  canStart(): boolean {
    return true;
  }

  canComplete(): boolean {
    if (this.bosses.size > 0) {
      return SagaHelper.areAllBossesDead(this.bosses);
    }
    return false;
  }

  start(): void {
    super.start();
    this.spawnWhenDelayFinished();
  }

  spawnWhenDelayFinished(): void {
    if (this.sagaDelay <= 0) {
      this.spawnSagaUnits();
    } else {
      TimerStart(this.sagaDelayTimer, this.sagaDelay, false, ()=> {
        this.spawnSagaUnits();
        DestroyTimer(GetExpiredTimer());
      });
    }
  }

  complete(): void {
    super.complete();
  }
}
