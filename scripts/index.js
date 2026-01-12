import { world } from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";

world.afterEvents.playerSpawn.subscribe(event => {
    const player = event.player;
    transferPlayer(player, { hostname: "beyondmc.net", port: 19132 });
});
