import react from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PostCard from '../components/PostCard';

const HomesCards = () => {
    return (
        <main>
            <h1>Houses for Rent</h1>
            <div classname='App'>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{ height: '25vh', display: 'grid', placeItems: 'center' }}
                    >
   {/*this is the header*/}
                        <Typography variant='h3'> Fishing Bay</Typography>
                    </Grid>

{/*this is the images*/}
                    <Grid item container xs={12} justifyContent='center'>
                        <Grid item xs={3}> <PostCard /> </Grid>

                    </Grid>
                </Grid>
            </div>
        </main>
    );
};

export default HomesCards;