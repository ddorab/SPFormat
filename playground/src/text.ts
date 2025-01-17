export const defaultCode = `/*===================================
=             Variables             =
===================================*/

// Testing Variables
float g_fTick[MAXPLAYERS + 1][2];
float g_fServerLoading[2];
float g_fClientsLoading[MAXPLAYERS + 1][2];
char g_szLogFile[PLATFORM_MAX_PATH];

// PR Commands
int g_iPrTarget[MAXPLAYERS + 1];
int g_totalStagesPr[MAXPLAYERS + 1];
int g_totalBonusesPr[MAXPLAYERS + 1];

// Speed Gradient
char g_szSpeedColour[MAXPLAYERS + 1];

// Show Zones
bool g_bShowZones[MAXPLAYERS + 1];

/*----------  Stages  ----------*/

// Which stage is the client in
int g_Stage[MAXZONEGROUPS][MAXPLAYERS + 1];
int g_WrcpStage[MAXPLAYERS + 1];
bool g_bhasStages;

/*----------  Spawn Locations  ----------*/
float g_fSpawnLocation[MAXZONEGROUPS][CPLIMIT][2][3];
float g_fSpawnAngle[MAXZONEGROUPS][CPLIMIT][2][3];
float g_fSpawnVelocity[MAXZONEGROUPS][CPLIMIT][2][3];
bool g_bGotSpawnLocation[MAXZONEGROUPS][CPLIMIT][2];

/*----------  Bonus Variables  ----------*/

// Name of the #1 in the current maps bonus
char g_szBonusFastest[MAXZONEGROUPS][MAX_NAME_LENGTH];

// Fastest bonus time in 00:00:00:00 format
char g_szBonusFastestTime[MAXZONEGROUPS][64];

// Clients personal bonus record in the current map
float g_fPersonalRecordBonus[MAXZONEGROUPS][MAXPLAYERS + 1];

// Personal bonus record in 00:00:00 format
char g_szPersonalRecordBonus[MAXZONEGROUPS][MAXPLAYERS + 1][64];

// Fastest bonus time in the current map
float g_fBonusFastest[MAXZONEGROUPS];

// Old record time, for prints + counting
float g_fOldBonusRecordTime[MAXZONEGROUPS];

// Clients personal bonus rank in the current map
int g_MapRankBonus[MAXZONEGROUPS][MAXPLAYERS + 1];

// Old rank in bonus
int g_OldMapRankBonus[MAXZONEGROUPS][MAXPLAYERS + 1];

// Has the client missed his best bonus time
int g_bMissedBonusBest[MAXPLAYERS + 1];

// Used to make sure bonus finished prints are correct
int g_tmpBonusCount[MAXZONEGROUPS];

// Amount of players that have passed the bonus in current map
int g_iBonusCount[MAXZONEGROUPS];`;
