import { MultiComponent } from "CustomAbility/AbilityComponent/MultiComponent";

export const MultiComponents = [
  {
    name: "multi twin dragon shot", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 30,
    angleMin: -15,
    angleMax: 15,
    delayBetweenComponents: 16,
    firingMode: MultiComponent.SPREAD_FIRING,
    multiplyComponents: 2,
    useLastCastPoint: true,
    components: [
      { name: "beam twin dragon shot" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi final flash 2", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 5,
    angleMin: -2.5,
    angleMax: 2.5,
    delayBetweenComponents: 1,
    firingMode: MultiComponent.SPREAD_FIRING,
    multiplyComponents: 2,
    useLastCastPoint: true,
    components: [
      { name: "beam final flash" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi energy blast volley", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 5,
    angleMin: -20,
    angleMax: 20,
    delayBetweenComponents: 2,
    firingMode: MultiComponent.RANDOM_FIRING,
    multiplyComponents: 16,
    useLastCastPoint: true,
    components: [
      { name: "beam energy blast volley" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi hellzone grenade", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 10,
    angleMin: 40,
    angleMax: -40,
    delayBetweenComponents: 5,
    firingMode: MultiComponent.RANDOM_FIRING,
    multiplyComponents: 12,
    useLastCastPoint: true,
    components: [
      { name: "beam hellzone grenade" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi innocence breath", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 10,
    angleMin: -60,
    angleMax: 60,
    delayBetweenComponents: 2,
    firingMode: MultiComponent.SPREAD_FIRING,
    multiplyComponents: 12,
    useLastCastPoint: true,
    components: [
      { name: "beam innocence breath" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi mankind destruction attack", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 10,
    angleMin: -180,
    angleMax: 180,
    delayBetweenComponents: 5,
    firingMode: MultiComponent.RANDOM_FIRING,
    multiplyComponents: 66,
    useLastCastPoint: true,
    components: [
      { name: "beam mankind destruction attack" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi death beam barrage", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 3,
    angleMin: -7,
    angleMax: -7,
    delayBetweenComponents: 4,
    firingMode: MultiComponent.SPREAD_FIRING,
    multiplyComponents: 5,
    useLastCastPoint: true,
    components: [
      { name: "beam death beam frieza" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi double sunday", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 8,
    angleMin: -4,
    angleMax: 4,
    delayBetweenComponents: 1,
    firingMode: MultiComponent.SPREAD_FIRING,
    multiplyComponents: 2,
    useLastCastPoint: true,
    components: [
      { name: "beam double sunday" },
    ],
  },
  // -------------------------------------------
  {
    name: "multi blazing storm", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    angleDifference: 10,
    angleMin: -25,
    angleMax: 26,
    delayBetweenComponents: 1,
    firingMode: MultiComponent.SPREAD_FIRING,
    multiplyComponents: 5,
    useLastCastPoint: true,
    components: [
      { name: "damage target blazing storm explosion" },
      { name: "sfx blazing storm" },
    ],
  },
];