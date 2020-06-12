export const selectHairColors = (state) => state.colors;
export const selectLoadState = (state) => state.loadState;
export const selectModels = (state) => state.models;
export const selectStatus = (state) => state.status;
export const selectParams = (match) => match.params;
export const selectModelIdFromParams = (state) => {
  const params = selectParams(state);
  return params.id;
};
export const selectCurrentModel = (state) => state.currentModel;
