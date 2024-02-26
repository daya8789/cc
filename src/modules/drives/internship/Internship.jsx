import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Internship = () => {
    return (
        <div className="bg-[#EFF8F6]">
            <h1 className="text-center text-4xl font-semibold p-4">Internship <span className="text-[#FF0000]">Programmes</span></h1>
            <div className="flex flex-wrap gap-4 p-8 justify-evenly ">
                <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
                    <CardMedia title="" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            HexaView
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Hexaview Be a part of a fun environment where you
                            can learn new skills, earn rewards and work with
                            some awe-inspiring people. We work & evolve together
                            as a team connected by a shared passion
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Apply</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            To The New
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica Lizards are a
                            widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Apply</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nucleus Software
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica Lizards are a
                            widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Apply</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
                    <CardMedia title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Accenture
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica Lizards are a
                            widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Apply</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};
