import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Index() {
  useEffect(() => {
    const script = document.createElement('script')
    script.text = `amzn_assoc_ad_type ="responsive_search_widget"; amzn_assoc_tracking_id ="orderbabu-21"; amzn_assoc_marketplace ="amazon"; amzn_assoc_region ="IN"; amzn_assoc_placement =""; amzn_assoc_search_type = "search_widget";amzn_assoc_width ="300"; amzn_assoc_height ="250"; amzn_assoc_default_search_category =""; amzn_assoc_default_search_key ="Mobile";amzn_assoc_theme ="dark"; amzn_assoc_bg_color ="000000";`

    const script2 = document.createElement('script')
    script2.src = '//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN'
    script2.async = true

    const amazonAdd = document.querySelector('#amzn_assoc_ad_div_assoc_banner_placement_default_0')


    const script3 = document.createElement('script')
    script3.src = `//affiliate.flipkart.com/affiliate/widgets/FKAffiliateWidgets.js`
    script3.async = true

    const flpkartAdd = document.querySelector('#flpkart-id-1')


    if (amazonAdd) {
      amazonAdd.appendChild(script)
      amazonAdd.appendChild(script2)
    }
    // if (flpkartAdd) {
    flpkartAdd.appendChild(script3)
    // }
  }, [])
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={8}  >
          <Typography variant="h4" component="h2" gutterBottom>
            Order Babu
      </Typography>
        </Grid>

        <Grid item xs={12} lg={8}  >
          <div id="flpkart-id-1" >
            <div data-WRID="WRID-160120568436633865" data-widgetType="searchWidget" data-class="affiliateAdsByFlipkart" height="250" width="300" ></div>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}  >
          <div id="amzn_assoc_ad_div_assoc_banner_placement_default_0" />
        </Grid>
      </Grid>

    </Container>
  );
}
