import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import zones, { BackAssetType } from "../config/zones";
import { RootState } from "./store";

export type Zone = {
  backgroundTopColor: string;
  backgroundBottomColor: string;
  sunHighlightColor: string;
  sunShadowColor: string;
  foregroundColor: string;
  backAssetType: BackAssetType;
  backAssetTopColor: string;
  backAssetBottomColor: string;
  smallStars: number;
  largeStars: number;
  sunDiameterMultiplier: number;
  sunSizeMultiplier: number;
  sunOpacityMultiplier: number;
};

interface backgroundState {
  movement: number;
  zone: Zone;
}

const initialState: backgroundState = {
  movement: 0,
  zone: zones[0],
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setMovement: (state, action: PayloadAction<number>) => {
      state.movement = action.payload;
    },
    setZone: (state, action: PayloadAction<Zone>) => {
      state.zone = action.payload;
    },
  },
});

export const { setMovement, setZone } = backgroundSlice.actions;

export const selectMovement = (state: RootState) => state.background.movement;
export const selectBackgroundTopColor = (state: RootState) =>
  state.background.zone.backgroundTopColor;
export const selectBackgroundBottomColor = (state: RootState) =>
  state.background.zone.backgroundBottomColor;
export const selectSunHighlightColor = (state: RootState) =>
  state.background.zone.sunHighlightColor;
export const selectSunShadowColor = (state: RootState) =>
  state.background.zone.sunShadowColor;
export const selectForegroundColor = (state: RootState) =>
  state.background.zone.foregroundColor;
export const selectBackAssetType = (state: RootState) =>
  state.background.zone.backAssetType;
export const selectBackAssetTopColor = (state: RootState) =>
  state.background.zone.backAssetTopColor;
export const selectBackAssetBottomColor = (state: RootState) =>
  state.background.zone.backAssetBottomColor;
export const selectSmallStars = (state: RootState) =>
  state.background.zone.smallStars;
export const selectLargeStars = (state: RootState) =>
  state.background.zone.largeStars;
export const selectSunDiameterMultiplier = (state: RootState) =>
  state.background.zone.sunDiameterMultiplier;
export const selectSunSizeMultiplier = (state: RootState) =>
  state.background.zone.sunSizeMultiplier;
export const selectSunOpacityMultiplier = (state: RootState) =>
  state.background.zone.sunOpacityMultiplier;

export default backgroundSlice.reducer;
