import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";

export default function InfoBox({ weatherInfo }) {
  let hot_url =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let cold_url =
    "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let rain_url =
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="cardContent">
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherInfo.humidity > 100
                ? rain_url
                : weatherInfo.temp > 15
                ? hot_url
                : cold_url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city} &nbsp;
              {weatherInfo.temp > 100 ? (
                <UmbrellaIcon />
              ) : weatherInfo.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature: {weatherInfo.temp}&deg;C</div>
              <div>Humidity: {weatherInfo.humidity}</div>
              <div>Min temperature: {weatherInfo.tempMin}&deg;C</div>
              <div>Max temperature: {weatherInfo.tempMax}&deg;C</div>
              <div>
                The weather is <i>{weatherInfo.weather}</i> and feels like{" "}
                {weatherInfo.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
