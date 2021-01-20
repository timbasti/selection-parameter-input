import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  formLabel: {
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 3,
    fontSize: 12
  }
});

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

export default function ActionsInAccordionSummary() {
  const [value, setValue] = React.useState(null);

  const handleAccordionChange = (newValue) => (event, isExpanded) => {
    setValue(isExpanded ? newValue : null);
  };

  const handleRadioControlClick = (newValue) => (event) => {
    event.stopPropagation();
    event.preventDefault();
    setValue(value !== newValue ? newValue : null);
  };

  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined">
        <FormLabel className={classes.formLabel} required>
          Some Label
        </FormLabel>
        <RadioGroup name="gender1" value={value}>
          <Accordion
            expanded={value === "female"}
            onChange={handleAccordionChange("female")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              <FormControlLabel
                value="female"
                aria-label="Acknowledge"
                onClick={handleRadioControlClick("female")}
                control={<Radio />}
                label="female"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                The click event of the nested action will propagate up and
                expand the accordion unless you explicitly stop it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={value === "male"}
            onChange={handleAccordionChange("male")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions2-content"
              id="additional-actions2-header"
            >
              <FormControlLabel
                value="male"
                aria-label="Acknowledge"
                onClick={handleRadioControlClick("male")}
                control={<Radio />}
                label="male"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                The focus event of the nested action will propagate up and also
                focus the accordion unless you explicitly stop it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={value === "other"}
            onChange={handleAccordionChange("other")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions3-content"
              id="additional-actions3-header"
            >
              <FormControlLabel
                value="other"
                aria-label="Acknowledge"
                onClick={handleRadioControlClick("other")}
                control={<Radio />}
                label="other"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </RadioGroup>
        <FormHelperText>Some Helper Text</FormHelperText>
      </FormControl>
    </div>
  );
}
