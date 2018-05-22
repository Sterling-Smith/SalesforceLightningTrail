import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import productData from './productData.json';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#66ffd9',
      light: '#E1E1E0',
      main: '#05e1a7',
      dark: '#00ae78',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ffbc5e',
      light: '#E1E1E0',
      main: '#ff8b2d',
      dark: '#c65c00',
      contrastText: '#000',
    },
  },
});

class BarChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid container spacing={8}>
              <Grid item sm={2}>
                <div>
                  <strong>Product</strong>
                  <i style={{ transform: 'rotate(90deg)', fontSize: 16, marginLeft: 6 }} class="material-icons">code</i>
                </div>
              </Grid>

              <Grid item sm={4} style={{ borderBottom: '3px solid #ff8b2d', marginRight: 4 }} >
                <div>
                  <strong style={{ textAlign: 'left' }}>Discount%</strong>
                  <i style={{ transform: 'rotate(90deg)', fontSize: 16, marginLeft: 6 }} class="material-icons">code</i>
                </div>
              </Grid>

              <Grid item sm={4} style={{ textAlign: 'right', borderBottom: '3px solid #05E1A7' }}>
                <div>
                  <strong>Net Sales</strong>
                  <i style={{ transform: 'rotate(90deg)', fontSize: 16, marginLeft: 6 }} class="material-icons">code</i>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={8} style={{ marginTop: 10 }}>

              {productData.map(product => (
                <Grid container key={product.name} spacing={8} >

                  <Grid item sm={2} style={{ padding: 0 }}>
                    <div>{product.name}</div>
                  </Grid>

                  <Grid item sm={1} style={{ padding: 0, textAlign: 'right' }}>
                    <div>{`${product.discountPercent}%`}</div>
                  </Grid>

                  <Grid item sm={3}>
                    <LinearProgress
                      color={'secondary'}
                      key={product.name}
                      variant="determinate"
                      value={product.discountPercent * 100 / 15}
                      className={classes.bar}
                    />
                  </Grid>

                  <Grid item sm={3}>
                    <LinearProgress
                      color={'primary'}
                      key={product.name}
                      variant="determinate"
                      value={(product.netSales / 30000)}
                      className={classes.bar2}
                    />
                  </Grid>

                  <Grid item sm={2} style={{ padding: 0 }}>
                    <div>{product.netSales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  bar2: {
    marginBottom: 4,
    height: 12,
    marginRight: 20,
    color: '#05E1A7',
  },
  bar: {
    marginBottom: 4,
    height: 12,
    transform: 'scaleX(-1)'
  },
});


BarChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarChart);
