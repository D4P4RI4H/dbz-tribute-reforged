import { Id } from "Common/Constants";
import { AOEDebuff } from "CustomAbility/AbilityComponent/AOEDebuff";

export module Debuffs {
  export const THUNDERBOLT_ORDER_ID = 852095;
  export const STUN_MICRO = FourCC('A08K')
  export const STUN_HALF_SECOND = FourCC('A0NR');
  export const STUN_ONE_SECOND = FourCC('A0IY');
  export const STUN_ONE_AND_A_HALF_SECOND = FourCC('A0FY');
  export const STUN_TWO_SECOND = FourCC('A0I7');
  export const STUN_THREE_SECOND = FourCC('A08H');
  export const STUN_FROZEN_EIS_SHENRON = FourCC('A0PA');

  export const CURSE_ORDER_ID = 852190;
  export const DEMONS_MARK = FourCC("A0O7");
  export const FROST_CLAWS_BLIND = FourCC("A0P6");
  export const BLINDING_WOLF_FANG_FIST = FourCC("A0S8");
  export const BRAVE_SLASH = FourCC("A0TV");

  export const SLOW_ORDER_ID = 852075;
  export const HEROS_SONG = FourCC("A0I6");
  export const EIS_FROSTBITE = FourCC("A0P5");
  export const KROWN_TOSS = FourCC("A0P9");
  export const MILKY_CANNON = FourCC("A0PU");
  export const DRAGON_THUNDER = FourCC("A0QT");
  export const SPIRIT_BALL = FourCC("A0SA");
  export const BLEED_ZAMASU = FourCC("A0I4");
  export const FERVENT_WOUND = FourCC("A0TE");
  export const FLATTEN = FourCC("A0TQ");
  export const GRAN_REY_SLOW = FourCC("A0V7");
  export const FINAL_BURST_SLOW = FourCC("A0VE");
  export const LIGHTNING_3_SLOW = FourCC("A0WN");

  export const ENTANGLING_ROOTS_ORDER_ID = 852171;
  export const CIRCLE_FLASH = FourCC("A0R6");
  export const GALACTIC_DONUT = FourCC("A0U6");
}

export const AOEDebuffComponents = [
  {
    name: "stun masenko",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun blazing rush",
    repeatInterval: 1,
    startTick: 20,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun super saiyan rage",
    repeatInterval: 33,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_MICRO,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 200,
    keepCasting: true, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun saiyan spirit",
    repeatInterval: 1,
    startTick: 3,
    endTick: 22,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun reliable friend",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun energy punch",
    repeatInterval: 1,
    startTick: 16,
    endTick: 24,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun behind you",
    repeatInterval: 1,
    startTick: 5,
    endTick: 15,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_AND_A_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff brave slash feedback",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.BRAVE_SLASH,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff heros song brave cannon",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.HEROS_SONG,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff heros song heros flute start",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.HEROS_SONG,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 900,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff heros song heros flute continuous",
    repeatInterval: 33,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.HEROS_SONG,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 900,
    keepCasting: true, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff demons mark rakshasa claw",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.DEMONS_MARK,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff demons mark devil claw",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.DEMONS_MARK,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff krown toss",
    repeatInterval: 1,
    startTick: 0,
    endTick: 50,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.KROWN_TOSS,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun kharge",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun hand kannon",
    repeatInterval: 1,
    startTick: 0,
    endTick: 16,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff blind frost claws",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.FROST_CLAWS_BLIND,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow frost claws",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.EIS_FROSTBITE,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow ice slash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.EIS_FROSTBITE,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 600,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun absolute zero finish",
    repeatInterval: 1,
    startTick: 131,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_FROZEN_EIS_SHENRON,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 600,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: true,
    buffId: FourCC("B02T"),
  },
  {
    name: "debuff stun ice cannon",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_FROZEN_EIS_SHENRON,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 600,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: true,
    buffId: FourCC("B02T"),
  },
  {
    name: "debuff slow milky cannon",
    repeatInterval: 1,
    startTick: 30,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.MILKY_CANNON,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 500,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun impaling rush",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun nova rush",
    repeatInterval: 1,
    startTick: 23,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow dragon thunder omega",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.DRAGON_THUNDER,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff root circle flash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.CIRCLE_FLASH,
    orderId: Debuffs.ENTANGLING_ROOTS_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun yamcha r sledgehammer",
    repeatInterval: 1,
    startTick: 12,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun yamcha r uppercut",
    repeatInterval: 1,
    startTick: 8,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow yamcha r spirit ball",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.SPIRIT_BALL,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun yamcha r neo wolf fang fist",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff blind yamcha r blinding wolf fang fist",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.BLINDING_WOLF_FANG_FIST,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun lightning surprise",
    repeatInterval: 8,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: true, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff bleed zamasu",
    repeatInterval: 1,
    startTick: 0,
    endTick: 4,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.BLEED_ZAMASU,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 450,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun united states of smash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 450,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun carolina smash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun california smash",
    repeatInterval: 1,
    startTick: 22,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun new hampshire smash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff fervent wound",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.FERVENT_WOUND,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun time cage",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_AND_A_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 50,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow flatten",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.FLATTEN,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 550,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun goten rock throw",
    repeatInterval: 7,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_MICRO,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun super goten strike",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff root galactic donut",
    repeatInterval: 1,
    startTick: 24,
    endTick: 40,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.GALACTIC_DONUT,
    orderId: Debuffs.ENTANGLING_ROOTS_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun ultra volleyball",
    repeatInterval: 1,
    startTick: 24,
    endTick: 40,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_ONE_AND_A_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow getsuga gran",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.GRAN_REY_SLOW,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 650,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun mugetsu slash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_THREE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 850,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun burning rush",
    repeatInterval: 1,
    startTick: 20,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow madness slash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Id.madnessDebuffSlow,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow madness on hit",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Id.madnessDebuffSlow,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 50,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun burning rush",
    repeatInterval: 1,
    startTick: 20,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow final burst",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    debuffSource: AOEDebuff.SOURCE_UNIT,
    abilityId: Debuffs.FINAL_BURST_SLOW,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow target lightning 3",
    repeatInterval: 1,
    startTick: 0,
    endTick: 0,
    debuffSource: AOEDebuff.SOURCE_TARGET_POINT_LAST_CAST,
    abilityId: Debuffs.LIGHTNING_3_SLOW,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
]