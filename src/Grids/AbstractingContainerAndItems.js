import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const Container = props => <Grid container {...props} />
const Item = props => (
  <Grid item xs={12} sm={6} md={3} {...props} />
)

const AbstractingContainerAndItems = withStyles(styles)(
  ({ classes }) => {
    return (
      <div className={classes.root}>
        <Container spacing={4}>
          <Item>
            <Paper className={classes.paper}>
              xs=12 sm=6 md=3
            </Paper>
          </Item>
          <Item>
            <Paper className={classes.paper}>
              xs=12 sm=6 md=3
            </Paper>
          </Item>
          <Item>
            <Paper className={classes.paper}>
              xs=12 sm=6 md=3
            </Paper>
          </Item>
          <Item>
            <Paper className={classes.paper}>
              xs=12 sm=6 md=3
            </Paper>
          </Item>
        </Container>
      </div>
    )
  }
)

export default AbstractingContainerAndItems
