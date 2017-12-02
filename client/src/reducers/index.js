import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import twitchDataReducer from "./twitch_data_reducer";
import twitchMetadataReducer from "./twitch_metadata_reducer";
import statsDataReducer from "./stats_data_reducer";
import filterStreamReducer from "./filter_stream_reducer";

const rootReducer = combineReducers({
  twitchData: twitchDataReducer,
  twitchMetaData: twitchMetadataReducer,
  statsData: statsDataReducer,
  filter: filterStreamReducer,
  form: formReducer
});

export default rootReducer;
