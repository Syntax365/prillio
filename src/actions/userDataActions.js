import { getUserData } from "../../data_scripts/user_data";

export function userData() {
  return (dispatch) => {
    return getUserData()
      .then((res) => {
        dispatch({
          type: "set_userdata",
          payload: res,
        });
      })
      .catch((error) => console.error(error));
  };
}
