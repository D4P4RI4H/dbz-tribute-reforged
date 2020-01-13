import { AbilityComponent } from "./AbilityComponent";
import { CustomAbility } from "CustomAbility/CustomAbility";
import { CustomAbilityInput } from "CustomAbility/CustomAbilityInput";
import { AbilityComponentHelper } from "./AbilityComponentHelper";
import { Vector2D } from "Common/Vector2D";
import { CoordMath } from "Common/CoordMath";
import { AddableComponent } from "./AddableComponent";
import { TextTagHelper } from "Common/TextTagHelper";

export class MultiComponent implements 
  AbilityComponent,
  Serializable<MultiComponent>,
  AddableComponent
{
  static readonly LINEAR_FIRING = 0;
  static readonly SPREAD_FIRING = 1;
  static readonly WRAPAROUND_FIRING = 2;
  static readonly RANDOM_FIRING = 3;

  protected angleCurrent: number;
  protected angleDirection: number;
  protected angleRange: number;
  protected originalAngle: number;
  protected originalDistance: number;
  protected originalTarget: Vector2D;
  protected currentDelay: number;
  protected activeComponents: AbilityComponent[];

  constructor(
    public name: string = "MultiComponent",
    public repeatInterval: number = 1,
    public startTick: number = 0,
    public endTick: number = -1,
    public angleDifference: number = 30,
    public angleMin: number = -30,
    public angleMax: number = 30,
    public forceMinDistance: number = 0,
    public forceMaxDistance: number = 0,
    public delayBetweenComponents: number = 1,
    public firingMode: number = MultiComponent.SPREAD_FIRING,
    public multiplyComponents: number = 1,
    public componentsAddedPerRound: number = 1,
    public alwaysUpdateAngle: boolean = false,
    public useLastCastPoint: boolean = false,
    public components: AbilityComponent[] = [],
  ) {
    this.angleCurrent = 0;
    this.angleDirection = 1;
    this.angleRange = 0;
    this.originalAngle = 0;
    this.originalDistance = 0;
    this.originalTarget = new Vector2D(0, 0);
    this.currentDelay = 0;
    this.activeComponents = [];
  }

  activateComponentsWhenReady() {
    if (this.currentDelay >= this.delayBetweenComponents) {
      for (let i = 0; i < this.componentsAddedPerRound && this.components.length > 0; ++i) {
        const component = this.components.pop();
        if (component) {
          this.activeComponents.push(component);
        }
      }
      this.currentDelay = 0;
    }
  }

  adjustAngleCurrent() {
    if (this.firingMode == MultiComponent.RANDOM_FIRING) {
      this.angleCurrent = this.angleMin + Math.random() * this.angleRange;

    } else {
      const nextAngle = this.angleCurrent + this.angleDifference * this.angleDirection;
      if (nextAngle > this.angleMax || nextAngle < this.angleMin) {  
        if (this.firingMode == MultiComponent.WRAPAROUND_FIRING) {
          if (this.angleDirection > 0) {
            this.angleCurrent = this.angleMin;
          } else {
            this.angleCurrent = this.angleMax;
          }
        } else {
          this.angleDirection *= -1;
          this.angleCurrent += this.angleDifference * this.angleDirection;
        }
      } else {
        this.angleCurrent = nextAngle;
      }
    }
  }
  
  performTickAction(ability: CustomAbility, input: CustomAbilityInput, source: unit) {
    let sourceCoords = new Vector2D(GetUnitX(source), GetUnitY(source));

    if (ability.currentTick == this.startTick) {
      this.angleCurrent = this.angleMin;
      if (this.angleMax > this.angleMin) {
        this.angleRange = this.angleMax - this.angleMin;
        this.angleDirection = 1;
      } else {
        this.angleRange = this.angleMin - this.angleMax;
        
        const tmp = this.angleMax;
        this.angleMax = this.angleMin;
        this.angleMin = tmp;
        this.angleDirection = -1;
      }
      let targettedPoint = input.targetPoint;
      if (this.useLastCastPoint) {
        targettedPoint = input.castPoint;
      }

      this.originalAngle = CoordMath.angleBetweenCoords(sourceCoords, targettedPoint);
      if (this.forceMaxDistance < 0.5 && this.forceMinDistance < 0.5) {
        this.originalDistance = CoordMath.distance(sourceCoords, targettedPoint);
      } else {
      this.originalDistance = 
        this.forceMinDistance + 
        Math.random() * (this.forceMaxDistance - this.forceMinDistance);
      }
      this.originalTarget = new Vector2D(targettedPoint.x, targettedPoint.y);
      if (this.angleRange >= 360) {
        this.originalTarget = new Vector2D(GetUnitX(input.caster.unit), GetUnitY(input.caster.unit));
      }
      this.currentDelay = this.delayBetweenComponents;
    }

    // add components to active components when ready
    this.activateComponentsWhenReady();

    if (this.forceMaxDistance > this.forceMinDistance && this.forceMinDistance > 0.5) {
      this.originalDistance = 
        this.forceMinDistance + 
        Math.random() * (this.forceMaxDistance - this.forceMinDistance);
    }

    let tmp: Vector2D;
    if (this.useLastCastPoint) {
      tmp = input.castPoint;
      input.castPoint = CoordMath.polarProjectCoords(
        sourceCoords, 
        this.angleCurrent + this.originalAngle,
        this.originalDistance
      );
      TextTagHelper.showPlayerColorTextToForce(
        ability.currentTick + "!",
        input.castPoint.x, 
        input.castPoint.y,
      );
    } else {
      BJDebugMsg("i am editing target point for some reason");
      tmp = input.targetPoint
      input.targetPoint = CoordMath.polarProjectCoords(
        sourceCoords, 
        this.angleCurrent + this.originalAngle,
        this.originalDistance
      );
      TextTagHelper.showPlayerColorTextToForce("MultiTargetPoint!", input.targetPoint.x, input.targetPoint.y);
    }

    // keep showing active components
    for (const component of this.activeComponents) {
      if (ability.isReadyToUse(component.repeatInterval, component.startTick, component.endTick)) {
        component.performTickAction(ability, input, source);
      }
    }

    if (this.useLastCastPoint) {
      input.castPoint = tmp;
    } else {
      input.targetPoint = tmp;
    }

    // if fired a beam, then adjust angle to next point
    if (this.currentDelay == 0 || this.alwaysUpdateAngle) {
      this.adjustAngleCurrent();
    }
    ++this.currentDelay;
    
    // finished, so move active components back to components
    if (ability.isFinishedUsing(this)) {
      for (const component of this.activeComponents) {
        this.components.push(component);
      }
      this.activeComponents.splice(0, this.activeComponents.length);
    }
  }
  

  clone(): AbilityComponent {
    return new MultiComponent(
      this.name, this.repeatInterval, this.startTick, this.endTick, 
      this.angleDifference, this.angleMin, this.angleMax, 
      this.forceMinDistance,
      this.forceMaxDistance,
      this.delayBetweenComponents,
      this.firingMode,
      this.multiplyComponents,
      this.componentsAddedPerRound,
      this.alwaysUpdateAngle,
      this.useLastCastPoint,
      AbilityComponentHelper.clone(this.components)
    );
  }
  
  deserialize(
    input: { 
      name: string; 
      repeatInterval: number; 
      startTick: number;
      endTick: number;
      angleDifference: number;
      angleMin: number;
      angleMax: number;
      forceMinDistance: number;
      forceMaxDistance: number;
      delayBetweenComponents: number;
      firingMode: number;
      multiplyComponents: number;
      componentsAddedPerRound: number;
      alwaysUpdateAngle: boolean;
      useLastCastPoint: boolean;
      components: {
        name: string,
      }[];
    }
  ) {
    this.name = input.name;
    this.repeatInterval = input.repeatInterval;
    this.startTick = input.startTick;
    this.endTick = input.endTick;
    this.angleDifference = input.angleDifference;
    this.angleMin = input.angleMin;
    this.angleMax = input.angleMax;
    this.forceMinDistance = input.forceMinDistance;
    this.forceMaxDistance = input.forceMaxDistance;
    this.delayBetweenComponents = input.delayBetweenComponents;
    this.firingMode = input.firingMode;
    this.componentsAddedPerRound = input.componentsAddedPerRound;
    this.multiplyComponents = input.multiplyComponents;
    this.alwaysUpdateAngle = input.alwaysUpdateAngle;
    this.useLastCastPoint = input.useLastCastPoint;
    return this;
  }

  addComponent(component: AbilityComponent) {
    return this.components.push(component);
  }
}