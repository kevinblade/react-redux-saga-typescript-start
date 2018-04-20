import * as React from 'react';
import { History } from 'history';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import CssBaseline from 'material-ui/CssBaseline';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

// create a decorator function by call withStyles.
const decorator = withStyles<'root'>(theme => ({
  root: {
    paddingTop: theme.spacing.unit * 20,
    textAlign: 'center'
  }
}));

// declare a prop type for this component.
export interface AppProps {
  history: History;
}

// declare a state type for this component.
export interface AppState {
  open: boolean;
}

// create a decorated statefull component class.
const App = decorator<AppProps>(
  class Index extends React.Component<AppProps & WithStyles<'root'>, AppState> {
    // A theme with custom primary and secondary color.
    // It's optional.
    private theme = createMuiTheme({
      palette: {
        primary: purple,
        secondary: green
      }
    });

    public state = {
      open: false
    };

    public handleClose = () => {
      this.setState({
        open: false
      });
    };

    public handleClick = () => {
      this.setState({
        open: true
      });
    };

    public render() {
      return (
        <MuiThemeProvider theme={this.theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className={this.props.classes.root}>
            <Dialog open={this.state.open} onClose={this.handleClose}>
              <DialogTitle>Super Secret Password</DialogTitle>
              <DialogContent>
                <DialogContentText>1-2-3-4-5</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={this.handleClose}>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            <Typography variant="display1" gutterBottom>
              Material-UI
            </Typography>
            <Typography variant="subheading" gutterBottom>
              example project
            </Typography>
            <Button variant="raised" color="secondary" onClick={this.handleClick}>
              Super Secret Password
            </Button>
          </div>
        </MuiThemeProvider>
      );
    }
  }
);

export default App;
