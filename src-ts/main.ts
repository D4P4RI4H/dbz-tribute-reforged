import { LibraryLoader } from 'war3-library-loader';
import { CustomUiTest } from './CustomUI/CustomUITest';
import { CustomPlayerTest } from 'CustomPlayer/CustomPlayerTest';
import { PathingCheck } from 'Common/PathingCheck';
import { SagaManager } from 'Core/SagaSystem/SagaManager';
import { Logger } from 'Libs/TreeLib/Logger';
import { CreepManager } from 'Core/CreepSystem/CreepManager';
import { TournamentManager } from 'Core/TournamentSystem/TournamentManager';
import { Constants } from 'Common/Constants';
import { HostDetectSystem } from 'Core/HostDetectSystem/HostDetectSystem'

let sagaManager: SagaManager;
let creepManager: CreepManager;
let tournamentManager: TournamentManager;

function tsMain() {
  // const unit = new Unit(MapPlayer.fromIndex(0), FourCC('H05D'), 0, 0, 0);
  // unit.name = "TypeScript!";

  // setup logger
  Logger.doLogVerbose = false;
  Logger.doLogDebug = true;
  HostDetectSystem.onInit();

  // if delayed wont hide creep cramps properly
  creepManager = CreepManager.getInstance();

  // delay init
  TimerStart(CreateTimer(), 1, false, () => {
    // initialize some systems
    PathingCheck.Init();
    sagaManager = SagaManager.getInstance();
    
    CustomUiTest();
    CustomPlayerTest();
    DestroyTimer(GetExpiredTimer());
  });

  TimerStart(CreateTimer(), 15, false, () => {
    tournamentManager = TournamentManager.getInstance();
  });
}

// Configure libraries
//setIsDestructableTreeConfig({ HARVESTER_UNIT_ID: FourCC("opeo") });


// Handle initialization 
function libLoaderLog(libName: string, success: boolean, message: string) {
  print(`Initializing "${libName}": ${success ? 'Success' : 'Failure'}, "${message}"`);
}

LibraryLoader.logFunction = libLoaderLog;
ceres.addHook("main::after", () => LibraryLoader.runInitializers());
ceres.addHook("main::after", () => tsMain());