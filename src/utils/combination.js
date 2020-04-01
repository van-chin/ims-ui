import { mapKeys } from "lodash/object";
import includes from "lodash/includes";

function combination(model, excepts = []) {
  console.info(model);
  mapKeys(model, function(value, key) {
    const keySplits = key.split("_");
    if (keySplits.length >= 2 && !includes(excepts, key)) {
      switch (keySplits.length) {
        case 3:
          model[keySplits[0]][keySplits[1]][keySplits[2]] = "";
          model[keySplits[0]][keySplits[1]][keySplits[2]] = value;
          break;
        case 4:
          model[keySplits[0]][keySplits[1]][keySplits[2]][keySplits[3]] = value;
          break;
        case 5:
          model[keySplits[0]][keySplits[1]][keySplits[2]][keySplits[3]][
            keySplits[4]
          ] = value;
          break;
        default:
          model[keySplits[0]][keySplits[1]] = "";
          model[keySplits[0]][keySplits[1]] = value;
      }
    }
  });
}

export default combination;
