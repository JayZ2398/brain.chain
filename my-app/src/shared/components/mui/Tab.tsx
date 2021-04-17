import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => ({
  selected: {
    color: "tomato",
    borderRight: "none",
    borderLeft: "2px solid tomato",
  },
}))(Tab);
