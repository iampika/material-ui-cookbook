import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
})

const Container = props => <Grid container {...props} />
const Item = props => <Grid item {...props} />

const FixedColumnLayout = withStyles(styles)(
  ({ classes }) => {
    const width = 3
    return (
      <div className={classes.root}>
        <Container spacing={4}>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
          <Item xs={width}>
            <Paper className={classes.paper}>
              xs={width}
            </Paper>
          </Item>
        </Container>
      </div>
    )
  }
)

export default FixedColumnLayout
