import { initiHeuristicCost } from "../../../utils/heuristics";
import { GridType, TileType } from "../../../utils/types";

export const aStar = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
 ) => {
    const traversedTiles = [];
    const heuristicCost = initiHeuristicCost(grid, endTile);
}